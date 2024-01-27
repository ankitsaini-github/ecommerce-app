import React, {  useContext, useState } from 'react'
import {Route} from 'react-router-dom';
import Topbar from '../navbar/Topbar'
import Cart from "../cart/Cart";
import Bottombar from "./Bottombar";
import Banner from "./Banner";
import Home from './Home';
import Musiclist from './Musiclist';
import About from './About';
import ContactUs from './ContactUs';
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom';
import ProductDetail from './ProductDetail';
import Auth from './Auth';
import { AuthContext } from '../store/store-context';


function Storepage() {
  const [showcart,setshowcart]=useState(false)
  const atx=useContext(AuthContext)
  
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
    <>
      <Topbar onCartclick={showcarthandler}/>
      {showcart && <Cart onClose={hidecarthandler}/>}
      <Banner />
      <Switch>
      <Route path="/" exact>
            <Redirect to='/home'/>
        </Route>
        <Route path="/home">
            <Home />
        </Route>
        {!atx.isLoggedIn && <Route path="/auth">
            <Auth />
        </Route>}
        <Route path="/store">
            {atx.isLoggedIn && <Musiclist onCartclick={showcarthandler}/>}
            {!atx.isLoggedIn && <Redirect to='/auth' />}
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
      </Switch>
      <Bottombar />
    </>

  )
}

export default Storepage