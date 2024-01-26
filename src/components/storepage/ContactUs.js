import React, { useContext } from 'react'
import { Container,Form,Button } from 'react-bootstrap';
import CartContext from '../store/store-context';

function ContactUs() {
  const ctx=useContext(CartContext)
  const addUserData=(e)=>{
    e.preventDefault();
    const user={
      'name':e.target.cname.value,
      'email':e.target.cemail.value,
      'phone':e.target.cphone.value,
    }
    ctx.addContact(user);
      e.target.cname.value='';
      e.target.cemail.value='';
      e.target.cphone.value='';
  }
  return (
    <Container className=''>
      <div
        className="fw-bolder fs-1 my-4 p-4"
        style={{ fontFamily: "times-new-roman" }}
      >
        CONTACT US
      </div>
      <Form className='w-50 m-auto p-5 border rounded-3 shadow' onSubmit={addUserData}>
      <Form.Group className="mb-3" controlId="cname">
        <Form.Label className='float-start fs-5 ms-1'>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="cemail">
        <Form.Label className='float-start fs-5 ms-1'>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="cphone">
        <Form.Label className='float-start fs-5 ms-1'>Phone Number</Form.Label>
        <Form.Control type='tel' placeholder='Phone no.'/>
      </Form.Group>
      <Form.Group className="mt-5">
        <Button type="submit">CONTACT US</Button>
      </Form.Group>
    </Form>
    </Container>
  )
}

export default ContactUs