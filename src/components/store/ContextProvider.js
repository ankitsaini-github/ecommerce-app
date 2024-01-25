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
  const ctx={
    Cartlist:cartitems,
    Carttotalamount:carttotal,
    cartcount:cartcount,
    cartbtn:false,
    addtocart:addtocarthandler,
    removefromcart:removefromcarthandler,
  }
  return (
    <CartContext.Provider value={ctx}>
      {props.children}
    </CartContext.Provider>
  )
}

export default ContextProvider