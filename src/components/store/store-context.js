import React from 'react'

export const ProductContext=React.createContext({
  Productlist:[],
})

export const AuthContext=React.createContext({
  token:'',
  isLoggedIn: false,
  login:(token,email)=>{},
  logout:()=>{},
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