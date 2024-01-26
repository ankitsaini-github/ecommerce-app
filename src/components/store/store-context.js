import React from 'react'

export const ProductContext=React.createContext({
  Productlist:[],
})

const CartContext = React.createContext({
  Cartlist:[],
  Carttotalamount:0,
  cartcount:0,
  addtocart:()=>{},
  removefromcart:()=>{},
  addContact:()=>{},
})

export default CartContext