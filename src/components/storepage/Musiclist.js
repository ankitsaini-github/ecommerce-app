import React, { useContext } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import CartContext from "../store/store-context";
import classes from './Musiclist.module.css'

const products = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    id: 1,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    id: 2,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    id: 3,
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    id: 4,
  },
];

function Musiclist(props) {
  const ctx = useContext(CartContext);
  const additemhandler = (p) => {
    // const olditem=ctx.Cartlist.filter((i)=>i.id===p.id)
    const newitem = {
      ...p,
      quantity: 1,
    };
    ctx.addtocart(newitem);
  };
  const displaycards = () => {
    return (
      <>
        <Row md={2} className="g-5">
          {products.map((p, i) => (
            <Col key={i} className="p-0 justify-content-center d-flex">
              <Card style={{ width: "18rem" }} className="p-4">
                <Card.Title className="mb-4">{p.title}</Card.Title>
                <div className={classes.imgwrapper}>
                  <Card.Img
                    variant="top"
                    src={p.imageUrl}
                    className={classes.hoverzoom}
                  />
                </div>
                <Card.Body className="d-flex justify-content-between ">
                  <Card.Text className="mt-2 mb-0">Rs {p.price}</Card.Text>
                  <Button variant="info" onClick={additemhandler.bind(null, p)}>
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  };
  return (
    <>
      <div
        className="fw-bolder fs-1 my-4 p-4"
        style={{ fontFamily: "times-new-roman" }}
      >
        Music
      </div>
      <div className="my-4 justify-content-center d-flex p-4 container">
        {displaycards()}
      </div>
      <Button variant="secondary" onClick={props.onCartclick}>See the Cart</Button>
    </>
  );
}

export default Musiclist;
