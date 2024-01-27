import React, { useState, useEffect } from "react";
import CartContext, { ProductContext, AuthContext } from "./store-context";
import { useHistory } from "react-router-dom";

const apiKey = "e6dd4b23e8784fd881bb9efb455507bf";

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
  const initialToken = localStorage.getItem("token");
  const storedemail = localStorage.getItem("auth-email");
  const [token, setToken] = useState(initialToken);
  const [useremail, setuseremail] = useState(storedemail);
  const userIsLoggedIn = !!token;
  // const [fullcart,setfullcart]=useState(null);
  let fullcart;
  const [cartitems, setcartitems] = useState([]);
  const [carttotal, setcarttotal] = useState(0);
  const [cartcount, setcartcount] = useState(0);
  const history = useHistory();

  const getfullcart = async () => {
    try {
      const res = await fetch(`https://crudcrud.com/api/${apiKey}/cart`);
      const data = await res.json();
      if (data) {
        console.log("fetched : ", data);
        fullcart = [...data];
      }
    } catch (err) {
      console.log("got error ", err);
    }
  };

  const uploadCart = async (updatedcart) => {
    if (userIsLoggedIn) {
      const founduser = fullcart.find((user) => user.email === useremail);

      if (founduser) {
        console.log("user exist");
        try {
          const res = await fetch(`https://crudcrud.com/api/${apiKey}/cart/${founduser._id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
              },
              body: JSON.stringify({
                email: useremail,
                cart: updatedcart,
              }),
            }
          )
            if(!res.ok){
              console.log('got error res.ok ')
              throw new Error('something went wrong')
            }

        } catch (err) {
          console.log(err);
        }
      } else {
        console.log("not found");
        try {
          const res = await fetch(`https://crudcrud.com/api/${apiKey}/cart`, {
            method: "POST",
            body: JSON.stringify({
              email: useremail,
              cart: updatedcart,
            }),
            headers: {
              "Content-type": "application/json",
            },
          });
          const data = (await res).json();
          if (data) {
            console.log("entered new : ", data);
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  useEffect(() => {
    const totalamount = cartitems.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0
    );
    const totalcount = cartitems.reduce((acc, cur) => acc + cur.quantity, 0);
    setcartcount(totalcount);
    setcarttotal(totalamount);
  }, [cartitems]);

  const addtocarthandler = async (newitem) => {
    const existingCartItemIndex = cartitems.findIndex(
      (item) => item.id === newitem.id
    );
    const existingCartItem = cartitems[existingCartItemIndex];
    let updateditems;
    if (existingCartItem) {
      const updateditem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + newitem.quantity,
      };
      updateditems = [...cartitems];
      updateditems[existingCartItemIndex] = updateditem;
    } else {
      updateditems = cartitems.concat(newitem);
    }
    await getfullcart();

    uploadCart(updateditems);
    setcartitems(updateditems);
  };

  const removefromcarthandler = (removeid) => {
    const newarr = cartitems.filter((item) => item.id !== removeid);
    setcartitems(newarr);
  };

  const addContactHandler = async (user) => {
    const response = await fetch(
      "https://react-http-2265-default-rtdb.asia-southeast1.firebasedatabase.app/contactus.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const cctx = {
    Cartlist: cartitems,
    Carttotalamount: carttotal,
    cartcount: cartcount,
    addtocart: addtocarthandler,
    removefromcart: removefromcarthandler,
    addContact: addContactHandler,
  };

  const pctx = {
    Productlist: products,
  };

  const loginHandler = (token, email) => {
    getfullcart().then(()=>{
      const user=fullcart.find((user)=>user.email===email)
      if(user)
      setcartitems(user.cart)
    })
    setToken(token);
    setuseremail(email);
    localStorage.setItem("auth-email", email);
    localStorage.setItem("token", token);
    history.replace("/store");

  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("auth-email");
    history.replace("/auth");
  };
  const AuthCtx = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={AuthCtx}>
      <ProductContext.Provider value={pctx}>
        <CartContext.Provider value={cctx}>
          {props.children}
        </CartContext.Provider>
      </ProductContext.Provider>
    </AuthContext.Provider>
  );
}

export default ContextProvider;
