import React from 'react'

const CartContext = React.createContext({
  Cartlist:[],
  Carttotalamount:0,
  cartcount:0,
  addtocart:()=>{},
  removefromcart:()=>{},
  addContact:()=>{},
})

export default CartContext