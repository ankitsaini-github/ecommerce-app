import React, { useContext, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import CartContext from "../store/store-context";
import { NavLink } from "react-router-dom";
import classes from './Topbar.module.css'

function Topbar(props) {
  const ctx=useContext(CartContext)
  const [cartbtn,setcartbtn]=useState('')
  const showcartbtn=()=>{
    setcartbtn('')
  }
  const hidecartbtn=()=>{
    setcartbtn('d-none')
  }
  return (
    <>
      <Navbar
        className="justify-content-center p-1 bg-dark d-flex text-white w-auto border-bottom border-info fs-4 fixed-top z-index-2"
        variant="dark"
      >
        <Nav className={classes.nav}>
          <Nav.Item className="mx-4">
            <NavLink to="/" onClick={hidecartbtn} className={({isActive})=>(isActive?classes.active:undefined)}>Home</NavLink>
          </Nav.Item>
          <Nav.Item className="mx-4">
            <NavLink to="/store" onClick={showcartbtn} className={({isActive})=>(isActive?classes.active:undefined)}>Store</NavLink>
          </Nav.Item>
          <Nav.Item className="mx-4">
            <NavLink to="/about" onClick={hidecartbtn} className={({isActive})=>(isActive?classes.active:undefined)}>About</NavLink>
          </Nav.Item>
        </Nav>
        <span style={{ color: "cyan", position: "absolute", right: "2%" }}>
          <Button variant="outline-info" onClick={props.onCartclick} className={`d-flex justify-content-around ${cartbtn}`} style={{width:'150px'}}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </span>
            <strong>Cart</strong>
            <strong>{ctx.cartcount}</strong>  
          </Button>
        </span>
      </Navbar>
    </>
  );
}

export default Topbar;
