import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Topbar from '../navbar/Topbar'
import Cart from "../cart/Cart";
import Bottombar from "./Bottombar";
import Banner from "./Banner";
import ContextProvider from '../store/ContextProvider';

function Storepage() {
  const [showcart,setshowcart]=useState(false)
  const showcarthandler=()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setshowcart(true)
  }
  const hidecarthandler=()=>{
    setshowcart(false)
  }
  return (
    <ContextProvider>
      <Topbar onCartclick={showcarthandler}/>
      {showcart && <Cart onClose={hidecarthandler}/>}
      <Banner />
      <Outlet context={[showcarthandler]}/>
      <Bottombar />
  </ContextProvider>
  )
}

export default Storepage