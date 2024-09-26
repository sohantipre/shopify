import React, { useState } from 'react'


import {Form,Button,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/loader'
import  Formcontainer from '../components/formcontainer'
import {savepaymentmethod} from '../actions/cartactions'
import Chekoutsteps from '../components/checkoutsteps'


const Paymentscreen = (props) => {


    const cart=useSelector(state=>state.cart)
    const {shippingaddress}=cart
    
    if(!shippingaddress){
        props.history.push('/shipping')
    }

    const [paymentmethod,setmethod]=useState('')
    


     const dispatch=useDispatch()

    const submithandler=(e)=>{

   e.preventDefault()
   dispatch(savepaymentmethod(paymentmethod))
   props.history.push('/placeorder')

    }

    return (
        <Formcontainer>
            <Chekoutsteps step1 step2 step3/>
        <h1>Payment method</h1>
        <Form onSubmit={submithandler}>
        <Form.Group>
            <Form.Label as='legend'>
                Select Method
            </Form.Label>
     
        <Col>
        <Form.Check 
        type='radio' 
        label='PayPal or credit card' 
        id='PayPal' 
        name='paymentmethod' 
        value='paypal' 

        onClick={e=>setmethod(e.target.value)}>

        </Form.Check>

        <Form.Check 
        type='radio' 
        label='Stripe' 
        id='Stripe' 
        name='paymentmethod' 
        value='Stripe' 
        
        onClick={e=>setmethod(e.target.value)}>

        </Form.Check>
        
        </Col>
        </Form.Group>
        <Button type='submit' variant='primary'>
            Continue
        </Button>
       
        </Form>
 
      
       </Formcontainer>
    )
}

export default Paymentscreen
