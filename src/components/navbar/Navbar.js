import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


function Navbar() {
  return (
    <>
      <Nav className="justify-content-between p-3 bg-dark d-flex text-white w-auto" activeKey="/home">
        <span></span>
        <span className='d-flex'>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Store</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">About</Nav.Link>
        </Nav.Item>
        </span>
        <Nav.Item className='float-end'>
          <Button variant="outline-info">Cart</Button>{'0'}
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Navbar