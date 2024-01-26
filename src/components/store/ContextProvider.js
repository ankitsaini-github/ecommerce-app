import React,{useState,useEffect} from 'react'
import CartContext from './store-context'


function ContextProvider(props) {
  const [cartitems,setcartitems]=useState([]);
  const [carttotal,setcarttotal]=useState(0)
  const [cartcount,setcartcount]=useState(0)
  useEffect(()=>{
    const totalamount=cartitems.reduce((acc,cur)=>acc+(cur.price*cur.quantity),0)
    const totalcount=cartitems.reduce((acc,cur)=>acc+(cur.quantity),0)
    setcartcount(totalcount)
    setcarttotal(totalamount)
  },[cartitems])
  const addtocarthandler=(newitem)=>{
    const existingCartItemIndex = cartitems.findIndex(
      (item) => item.id === newitem.id
    );
    const existingCartItem = cartitems[existingCartItemIndex];
    let updateditems;
    if(existingCartItem){
      const updateditem={
        ...existingCartItem,
        quantity:existingCartItem.quantity+newitem.quantity
      }
      updateditems=[...cartitems]
      updateditems[existingCartItemIndex]=updateditem;
    }
    else{
      updateditems=cartitems.concat(newitem)
    }
    setcartitems(updateditems);
  }
  const removefromcarthandler=(removeid)=>{
    const newarr=cartitems.filter((item)=>item.id!==removeid)
    setcartitems(newarr)
  }
  const addContactHandler=async (user)=>{
    const response = await fetch('https://react-http-2265-default-rtdb.asia-southeast1.firebasedatabase.app/contactus.json',{
      method:'POST',
      body:JSON.stringify(user),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data=await response.json();
    console.log(data);
  }
  const ctx={
    Cartlist:cartitems,
    Carttotalamount:carttotal,
    cartcount:cartcount,
    addtocart:addtocarthandler,
    removefromcart:removefromcarthandler,
    addContact:addContactHandler,
  }
  return (
    <CartContext.Provider value={ctx}>
      {props.children}
    </CartContext.Provider>
  )
}

export default ContextProvider