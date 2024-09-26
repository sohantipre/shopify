import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Form,
  Image,
  Card,
  Button,
} from "react-bootstrap";
import { addtocart, removefromcart } from "../actions/cartactions";
import Message from "../components/Message";

const Cartscreen = (props) => {
  const productid = props.match.params.id;

  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productid) {
      dispatch(addtocart(productid, qty));
    }
  }, [dispatch, productid, qty]);

  const removecarthandler = (id) => {
    dispatch(removefromcart(id));
  };

  const checkouthandler = () => {
    props.history.push("/login?redirect=shipping");
  };

  const cart = useSelector((state) => state.cart);
  const { cartitems } = cart;

  console.log(qty);

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping cart</h1>
        {cartitems.length === 0 ? (
          <Message>
            Your cart is empty<Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartitems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} fluid rounded></Image>
                  </Col>
                  <Col md={3}>
                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                  </Col>

                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addtocart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      onClick={() => removecarthandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Total ({cartitems.reduce((sum, item) => sum + item.qty, 0)})
                items in cart
              </h2>
              Total price : $
              {cartitems
                .reduce((sum, item) => sum + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartitems.length === 0}
                onClick={checkouthandler}
              >
                Proceed to pay
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default Cartscreen;
