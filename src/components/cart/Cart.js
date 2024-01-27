import React, { useContext } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import CartContext, { AuthContext } from "../store/store-context";

const CartItem = (props) => {
  return (
    <>
      <Row className="d-flex m-2 fs-6 border-bottom pb-2 align-items-center">
        <Col xs={5} className="d-flex align-items-center">
          <span className="mb-2" style={{marginRight:'10px'}}>
            <Image
              src={props.item.imageUrl}
              rounded
              width="75px"
            />
          </span>
          <span>{props.item.title}</span>
        </Col>
        <Col xs={3} className="">
          {props.item.price}
        </Col>
        <Col xs={4} className="d-flex">
          <input
            type="text"
            value={props.item.quantity}
            style={{
              outline: "none",
              border: "1px solid rgb(0, 204, 255)",
              width: "40px",
              height: "30px",
              textAlign: "center",
              marginRight:'20px',
              borderRadius:'8%'
            }}
          />
          <Button variant="danger" size="sm" onClick={props.onRemove}>Remove</Button>
        </Col>
      </Row>
    </>
  );
};

function Cart(props) {
  const ctx=useContext(CartContext)
  const atx=useContext(AuthContext)
  return (
    <Card
      className="mt-2 h-75 z-2 p-3 overflow-auto shadow-lg"
      style={{ position: "absolute", right: "10px",top:'70px', width: "500px" }}
    >
      <Button
        variant="outline-secondary"
        size="sm"
        style={{ position: "absolute", right: "15px" }}
        onClick={props.onClose}
      >
        X
      </Button>
      <Card.Title className="my-4 fw-bold fs-3">Cart</Card.Title>
      <Card.Body className="p-0">
        <Row className="d-flex fw-bold fs-6">
          <Col xs={5} className="border-bottom">
            ITEM
          </Col>
          <Col xs={3} className="border-bottom">
            PRICE
          </Col>
          <Col xs={4} className="border-bottom">
            QUANTITY
          </Col>
        </Row>
        <div className="my-2">
          {
            ctx.Cartlist.map((item)=><CartItem key={item.id} item={item} onRemove={ctx.removefromcart.bind(null,item.id)}/>)
          }
        </div>
        <div className="d-flex justify-content-end my-4">
          <span className="fw-bold fs-5" style={{marginRight:'10px'}}>Total </span>
          <span className="fs-5">Rs {ctx.Carttotalamount}</span>
        </div>
        {atx.isLoggedIn?<Button variant="info" size="lg" className="text-white fw-bolder fs-5 mt-3">PURCHASE</Button>: <p className="fs-5 text-secondary mt-3 border p-2">LOG IN to proceed</p>}
      </Card.Body>
    </Card>
  );
}

export default Cart;
