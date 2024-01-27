import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import CartContext,{AuthContext} from "../store/store-context";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import classes from './Topbar.module.css'

function Topbar(props) {
  const ctx=useContext(CartContext)
  const atx=useContext(AuthContext)
  const history=useHistory();
  const location=useLocation()
  const cartbtn=location.pathname==='/store'?'':'d-none';

  const loginpage=()=>{
    history.replace('/auth');
  }
  const logoutpage=()=>{
    if(window.confirm('Want to LOGOUT ?')){
      atx.logout();
    }
  }
  return (
    <>
      <Navbar
        className="justify-content-center p-2 bg-dark d-flex text-white w-auto border-bottom border-info fs-4 fixed-top z-index-2"
        variant="dark"
      >
        <Nav className={classes.nav}>
          <Nav.Item className="mx-4">
            <NavLink to="/home" activeClassName={classes.active}>Home</NavLink>
          </Nav.Item>
          <Nav.Item className="mx-4">
            <NavLink to="/store" activeClassName={classes.active}>Store</NavLink>
          </Nav.Item>
          <Nav.Item className="mx-4">
            <NavLink to="/about" activeClassName={classes.active}>About</NavLink>
          </Nav.Item>
          <Nav.Item className="mx-4">
            <NavLink to="/contactus" activeClassName={classes.active}>Contact Us</NavLink>
          </Nav.Item>
        </Nav>
          
        <span className='d-flex' style={{ color: "cyan", position: "absolute", right: "2%" }}>
          {!atx.isLoggedIn && <Button variant="info" onClick={loginpage}>LOGIN</Button>}
          {atx.isLoggedIn && <Button variant="info" onClick={logoutpage}>LOGOUT</Button>}
          <Button variant="outline-info" onClick={props.onCartclick} className={`d-flex ms-5 justify-content-around ${cartbtn}`} style={{width:'150px'}}>
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
