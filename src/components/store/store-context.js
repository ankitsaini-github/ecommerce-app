import React from 'react'

const CartContext = React.createContext({
  Cartlist:[],
  Carttotalamount:0,
  cartcount:0,
  cartbtn:false,
  addtocart:()=>{},
  removefromcart:()=>{},
})

export default CartContext