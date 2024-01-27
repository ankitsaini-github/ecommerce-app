import React,{useState,useEffect} from 'react'
import CartContext,{ProductContext,AuthContext} from './store-context'


const products = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    id: "p1",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    id: "p2",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    id: "p3",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    id: "p4",
  },
];

function ContextProvider(props) {
  // const [ProductItems,setProductItems]=useState(products);
  const initialToken=localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const [userIsLoggedIn,setuserIsLoggedIn]=useState(null)
  // userIsLoggedIn = !!token;
  const [cartitems,setcartitems]=useState([]);
  const [carttotal,setcarttotal]=useState(0)
  const [cartcount,setcartcount]=useState(0)

  useEffect(()=>{
    const totalamount=cartitems.reduce((acc,cur)=>acc+(cur.price*cur.quantity),0)
    const totalcount=cartitems.reduce((acc,cur)=>acc+(cur.quantity),0)
    setcartcount(totalcount)
    setcarttotal(totalamount)
    setuserIsLoggedIn(!!token)
  },[cartitems,token])

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

  const cctx={
    Cartlist:cartitems,
    Carttotalamount:carttotal,
    cartcount:cartcount,
    addtocart:addtocarthandler,
    removefromcart:removefromcarthandler,
    addContact:addContactHandler,
  }

  const pctx={
    Productlist:products
  }

  const loginHandler=(token)=>{
    setToken(token);
    localStorage.setItem('token', token);
  }
  const logoutHandler=()=>{
    setToken(null);
    localStorage.removeItem('token');
  }
  const AuthCtx={
    token:token,
    isLoggedIn: userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler,
  }
  return (
    <AuthContext.Provider value={AuthCtx}>
      <ProductContext.Provider value={pctx}>
        <CartContext.Provider value={cctx}>
          {props.children}
        </CartContext.Provider>
      </ProductContext.Provider>
    </AuthContext.Provider>
  )
}

export default ContextProvider