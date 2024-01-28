import React, { useContext } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import CartContext,{ProductContext} from "../store/store-context";
import classes from './Musiclist.module.css'
import { Link } from "react-router-dom/cjs/react-router-dom";

function Musiclist(props) {
  const ctx = useContext(CartContext);
  const ptx=useContext(ProductContext);

  const additemhandler = (p) => {

    const newitem = {
      ...p,
      quantity: 1,
    };
    ctx.addtocart(newitem);
  };
  const displaycards = () => {
    return (
      <>
        <Row md={2} lg={4} className="g-2">
          {ptx.Productlist.map((p) => (
            <Col key={p.id} className="p-0 justify-content-center d-flex">
                <Card style={{ width: "18rem" }} className={classes.pcard}>
                  <Link to={`/product-detail/${p.id}`} className={classes.cardlink}>
                    <Card.Title className="mb-4">{p.title}</Card.Title>
                  <div className={classes.imgwrapper}>
                    <Card.Img
                      variant="top"
                      src={p.imageUrl}
                      className={classes.hoverzoom}
                      />
                  </div>
                  </Link>
                  <Card.Body className="d-flex justify-content-between ">
                    <Card.Text className="mt-1 mb-0 fs-5">Rs. {p.price}</Card.Text>
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
        MUSIC
      </div>
      <div className="m-4  p-5" >
        {displaycards()}
      </div>
      <Button variant="secondary" onClick={props.onCartclick}>See the Cart</Button>
    </>
  );
}

export default Musiclist;
