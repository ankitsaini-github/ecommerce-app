import React, { useState } from 'react'
import {Route} from 'react-router-dom';
import Topbar from '../navbar/Topbar'
import Cart from "../cart/Cart";
import Bottombar from "./Bottombar";
import Banner from "./Banner";
import ContextProvider from '../store/ContextProvider';
import Home from './Home';
import Musiclist from './Musiclist';
import About from './About';
import ContactUs from './ContactUs';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import ProductDetail from './ProductDetail';

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
  return (<BrowserRouter>
    <ContextProvider>
      <Topbar onCartclick={showcarthandler}/>
      {showcart && <Cart onClose={hidecarthandler}/>}
      <Banner />
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/store">
            <Musiclist onCartclick={showcarthandler}/>
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/contactus">
            <ContactUs />
        </Route>
        <Route path="/product-detail/:productId">
            <ProductDetail/>
        </Route>
      <Bottombar />
  </ContextProvider>
  </BrowserRouter>
  )
}

export default Storepage