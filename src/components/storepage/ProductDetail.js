import React,{useContext} from 'react'
import { Row, Col, Container ,Image, Button, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import classes from './ProductDetail.module.css';
import CartContext, { ProductContext } from '../store/store-context';

// title: "Colors",

//     price: 100,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     id: 1,

function ProductDetail() {
  const params=useParams();
  const ptx = useContext(ProductContext)
  const ctx=useContext(CartContext)
  const curProduct=ptx.Productlist.find(p => p.id === params.productId);
  console.log('product page');

  const additemhandler = () => {

    const newitem = {
      ...curProduct,
      quantity: 1,
    };
    ctx.addtocart(newitem);
  };
  return (
    <Container className='d-flex p-5'>
      <Row md={2} className='border w-100 p-3 shadow'>
        <Col lg={5} className='d-flex flex-column'>
          <Image
              src={curProduct.imageUrl}
              rounded
              width="97%"
              className={classes.productimg}
            />
            <div className='d-flex g-2 w-100'>
              <Button variant='warning' size='lg' className='my-3 w-50 me-1 rounded-0 text-white fw-bold shadow-sm' onClick={additemhandler}>ADD TO CART</Button>
              <Button variant='danger' size='lg' className='my-3 w-50 ms-1 rounded-0 text-white fw-bold shadow-sm'>BUY NOW</Button>
            </div>
        </Col>
        <Col lg={7} className='border-start'>
          <div className='d-flex flex-column align-items-start ms-3'>
            <span className='fs-3'>{curProduct.title}</span>
            <span className='fs-6 my-2 fw-bold' style={{color:'rgb(38, 165, 65)'}}>Special Price</span>
            <span className='fw-bold fs-3'>Rs. {curProduct.price}</span>
            <div className='d-flex mt-2'>
              <h6><Badge pill  bg='' style={{backgroundColor:'rgb(38, 165, 65)'}} className='text-white fw-bold'> 4 ★ </Badge></h6>
              <h6 className='text-muted ms-2'>15,380 ratings and 1,466 reviews</h6>
            </div>
            <div className={`d-flex flex-column align-items-start mt-3 ${classes.offers}`}>
              <h6 className='fw-bold'>Available offers</h6>
              <span>Bank Offer10% off on Bank of Baroda Credit Card and EMI Transactions, up to ₹1500 on orders of ₹5000 and above </span>
              <span>Bank Offer10% off on Canara Bank Credit Card Transactions, up to ₹1,500 on orders of ₹5,000 and above </span>
              <span>Bank Offer10% off on Citi-branded Credit Card EMI Transactions, up to ₹2,000 on orders of ₹10,000 and above </span>
              <span>Special PriceGet extra 31% off </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail