import React from 'react'
import { Row, Col, Container ,Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom/cjs/react-router-dom'

// title: "Colors",

//     price: 100,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     id: 1,

function ProductDetail() {
  const params=useParams();
  return (
    <Container className='d-flex bg-light p-5'>
      <Row md={2} xs={1} className='border w-100'>
        <Col xs={5} className=' border border-black'>
        <Image
              src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
              rounded
              width="400px"
            />
        </Col>
        <Col xs={7}>
          <div className='d-flex flex-column align-items-start'>
            <span className='fs-3'>Title</span>
            <span className='fs-6 text-success my-2'>Special Price</span>
            <span className='fw-bold fs-3'>Rs. 200</span>
            <div className='d-flex flex-column align-items-start mt-3 '>
              <span className='fw-bold'>Available offers</span>
              <span>Bank Offer10% off on Bank of Baroda Credit Card and EMI Transactions, up to ₹1500 on orders of ₹5000 and aboveT&C</span>
              <span>Bank Offer10% off on Canara Bank Credit Card Transactions, up to ₹1,500 on orders of ₹5,000 and aboveT&C</span>
              <span>Bank Offer10% off on Citi-branded Credit Card EMI Transactions, up to ₹2,000 on orders of ₹10,000 and aboveT&C</span>
              <span>Special PriceGet extra 31% off (price inclusive of cashback/coupon)T&C</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail