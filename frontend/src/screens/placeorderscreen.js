import React,{useEffect} from 'react'
import {Form,Button,Row,Col,ListGroup,Image,Card} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Chekoutsteps from '../components/checkoutsteps'
import Checkoutsteps from '../components/checkoutsteps'
import {Link} from 'react-router-dom'
import {createorder} from '../actions/orderactions'

const Placeorderscreen = (props) => {
  const cart=useSelector(state=>state.cart)
  
  const dispatch=useDispatch()


  cart.itemprice=cart.cartitems.reduce((sum,item)=>sum+item.price*item.qty,0)

  cart.shippingprice=cart.itemprice>100?0:100

  cart.taxprice=Number((0.15*cart.itemprice).toFixed(2))

  cart.totalprice=Number((cart.itemprice+cart.shippingprice+cart.taxprice).toFixed(2))


  const ordercreate=useSelector(state=>state.ordercreate)

  const {order,success,error}=ordercreate

useEffect(()=>{
    if(success){
       props.history.push(`/order/${order._id}`)
    }
     
},[props.history,success])

  const placeorder=()=>{
dispatch(createorder({
    orderitems:cart.cartitems,
    shippingaddress:cart.shippingaddress,
    paymentmethod:cart.paymentmethod,
    itemprice:cart.itemprice,
    shippingprice:cart.shippingprice,
    taxprice:cart.taxprice,
    totalprice:cart.totalprice

}))

  }

    return (
        <div>
            <Checkoutsteps step1 step2 step3 step4></Checkoutsteps>
            <Row>
                <Col md={8}>
                   <ListGroup variant='flush'>
                       <ListGroup.Item>
                       <h2>Shipping</h2>
                       <strong>
                           Address:
                       </strong>
                       {cart.shippingaddress.address}, {cart.shippingaddress.city}, {cart.shippingaddress.postalcode}, 
                       {cart.shippingaddress.country}
                       </ListGroup.Item>
                    <ListGroup.Item>
                    <h2>Payment method</h2>
                     {cart.paymentmethod}

                    </ListGroup.Item>

                    <ListGroup.Item>
                    <h2>Order items</h2>
                     {cart.cartitems.length===0?<Message>Your cart is empty
                     </Message>:<ListGroup variant='flush'>
                         {cart.cartitems.map((item,index)=>(
                             <ListGroup.Item key={index}>
                             <Row>
                                 <Col md={1}>
                                     <Image src={item.image} alt={item.name} fluid rounded/>
                                 </Col>
                                 <Col >
                                   <Link to={`/products/${item.product}`}>
                                       {item.name}
                                   </Link>
                                 </Col>
                                 <Col >
                                  
                                  {item.qty} item each worth ${item.price}
                                 </Col>
                                
                                
                             </Row>

                             </ListGroup.Item>
                         ))}
                     </ListGroup>
                }

                    </ListGroup.Item>
                   </ListGroup>

                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Items
                                    </Col>
                                    <Col>
                                    ${cart.itemprice}
                                    </Col>
                                </Row>

                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                   Shipping Price
                                    </Col>
                                    <Col>
                                    ${cart.shippingprice}
                                    </Col>
                                </Row>

                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                   Tax Price
                                    </Col>
                                    <Col>
                                    ${cart.taxprice}
                                    </Col>
                                </Row>

                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                   Total Price
                                    </Col>
                                    <Col>
                                    ${cart.totalprice}
                                    </Col>
                                </Row>

                            </ListGroup.Item>
                             <ListGroup.Item>
                                 {error&&<Message variant='danger'>{error}</Message>}
                             </ListGroup.Item>
                            <ListGroup.Item>
                                <Button type='button' className='btn-block' disabled={cart.cartitems.length===0}
                                onClick={placeorder}>
                                    Place Order
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Placeorderscreen
