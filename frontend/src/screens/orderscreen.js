import React,{useEffect,useState} from 'react'
import {Form,Button,Row,Col,ListGroup,Image,Card} from 'react-bootstrap'
import {PayPalButton} from 'react-paypal-button-v2'
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../components/loader'
import Chekoutsteps from '../components/checkoutsteps'
import Checkoutsteps from '../components/checkoutsteps'
import {Link} from 'react-router-dom'
import {deliverorders, getorderdetails, payorder} from '../actions/orderactions'
import axios from 'axios'

import Message from '../components/Message'

const Orderscreen = (props) => {
  const cart=useSelector(state=>state.cart)
   
  const [sdkready,setsdkready]=useState(false)

  const dispatch=useDispatch()


  const orderdetails=useSelector(state=>state.orderdetails)
  const {order,loading,error}=orderdetails
  
  const  userlogin=useSelector(state=>state.userlogin)
  const {userinfo}=userlogin
  
  const orderpay=useSelector(state=>state.orderpay)
  const {loading:loadingpay,success:successpay}=orderpay

   
  const orderdeliver=useSelector(state=>state.orderdeliver)
  const {loading:loadingdeliver,success:successdeliver}=orderdeliver

useEffect(()=>{

if(!userinfo){
props.history.push('/login')

}
    const addpaypalscript=async()=>{
const{data:clientId}=await axios.get('/api/config/paypal')

const script=document.createElement('script')
script.type='text/javascript'
script.src=`https://www.paypal.com/sdk/js?client-id=${clientId}`
script.async=true
script.onload=()=>{
    setsdkready(true)
}
document.body.appendChild(script)

}   
if(!order||successpay||successdeliver){
    dispatch({type:'ORDER_PAY_RESET'})
    dispatch({type:'ORDER_DELIVER_RESET'})
    dispatch(getorderdetails(props.match.params.id))
    
}
else if(!order.ispaid){
    if(!window.paypal){
        addpaypalscript()
    }else{
        setsdkready(true)
    }
}

},[dispatch,props.match.params.id,successpay,order,successdeliver])

if(!loading){
     order.itemprice=order.orderitems.reduce((sum,item)=>sum+item.price*item.qty,0)}

// const itemprice=cart.cartitems.reduce((sum,item)=>sum+item.price*item.qty,0)

const successpaymenthandler=(paymentresult)=>{

console.log(paymentresult)

dispatch(payorder(props.match.params.id))

}


const deliverhandler=()=>{

    dispatch(deliverorders(props.match.params.id))
}


    return loading?<Loader></Loader>:error?<Message variant='danger'>{error}</Message>:
    <div>
        <h1>Order {order._id}</h1>
        <Checkoutsteps step1 step2 step3 step4></Checkoutsteps>
            <Row>
                <Col md={8}>
                   <ListGroup variant='flush'>
                       <ListGroup.Item>
                       <h2>Shipping</h2>
                       <p>
                       <strong>Name :</strong>
                       {order.User.name}
                       </p>
                       <p>
                       <strong>Email :</strong>
                       {order.User.email}
                       </p>
                       <strong>
                           Address:
                       </strong>
                       {order.shippingaddress.address}, {order.shippingaddress.city}, {order.shippingaddress.postalcode}, 
                       {order.shippingaddress.country}

                       <p>
                        {order.isdelivered?<Message variant='success'>Delivered On {order.deliveredat}</Message>:<Message variant='danger'>Not Delivered</Message>}
                    </p>
                       </ListGroup.Item>
                    <ListGroup.Item>
                    <h2>Payment method</h2>
                    <p>Method:
                    {order.paymentmethod}
                    </p>
                    <p>
                        {order.ispaid?<Message variant='success'>Paid at{order.paidAt}</Message>:<Message variant='danger'>Not paid</Message>}
                    </p>
                     

                    </ListGroup.Item>

                    <ListGroup.Item>
                    <h2>Order items</h2>
                     {order.orderitems.length===0?<Message>Order is empty
                     </Message>:<ListGroup variant='flush'>
                         {order.orderitems.map((item,index)=>(
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
                                    ${order.itemprice}
                                    </Col>
                                </Row>

                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                   Shipping Price
                                    </Col>
                                    <Col>
                                    ${order.shippingprice}
                                    </Col>
                                </Row>

                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                   Tax Price
                                    </Col>
                                    <Col>
                                    ${order.taxprice}
                                    </Col>
                                </Row>

                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                   Total Price
                                    </Col>
                                    <Col>
                                    ${order.totalprice}
                                    </Col>
                                </Row>

                            </ListGroup.Item>
                            {!order.ispaid&&(
                                <ListGroup.Item>
                                    {loadingpay&&<Loader/>}
                                    {!sdkready?<Loader/>:(
                                        <PayPalButton amount={order.totalprice} onSuccess={successpaymenthandler}>

                                        </PayPalButton>
                                    )}

                                </ListGroup.Item>

                            )}
                            {/* {userinfo.isAdmin&&order.ispaid&&!order.isdelivered&&(
                                <ListGroup.Item>
                                    <Button type='button' classNAme='btn btn-block' onCliack={deliverhandler}>
                                       Mark as Delivered
                                    </Button>
                                </ListGroup.Item>
                            )} */}
                            {loadingdeliver&&<Loader/>}
                            {userinfo&&userinfo.isAdmin&&!order.isdelivered&&(
                                <ListGroup.Item>
                                    <Button type='button' classNAme='btn btn-block' onClick={deliverhandler}>
                                       Mark as Delivered
                                    </Button>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
    </div>
}

export default Orderscreen
