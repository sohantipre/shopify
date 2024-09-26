import React, { useState } from 'react'


import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/loader'
import  Formcontainer from '../components/formcontainer'
import {saveshippingaddress} from '../actions/cartactions'
import Chekoutsteps from '../components/checkoutsteps'


const Shippingscreen = (props) => {


    const cart=useSelector(state=>state.cart)
    const {shippingaddress}=cart
    
 

    const [address,setaddress]=useState(shippingaddress.address)
    const[city,setcity]=useState(shippingaddress.city)
    const [postalcode,setpostalcode]=useState(shippingaddress.postalcode)
    const [country,setcountry]=useState(shippingaddress.country)


     const dispatch=useDispatch()

    const submithandler=(e)=>{

   e.preventDefault()
   dispatch(saveshippingaddress({address,city,postalcode,country}))
   props.history.push('/payment')

    }

    return (
        <Formcontainer>
            <Chekoutsteps step1 step2/>
        <h1>Shipping</h1>
        <Form onSubmit={submithandler}>
        <Form.Group controlId='address'>
           <Form.Control type='text' placeholder='enter address' required value={address} onChange={e=>setaddress(e.target.value)}>
           </Form.Control>
        </Form.Group> 
        <Form.Group controlId='city'>
           <Form.Control type='text' placeholder='enter City'  required value={city} onChange={e=>setcity(e.target.value)}>
           </Form.Control>
        </Form.Group> 
        <Form.Group controlId='postalcode'>
           <Form.Control type='text' placeholder='enter postalcode'  required value={postalcode} onChange={e=>setpostalcode(e.target.value)}>
           </Form.Control>
        </Form.Group> 
        <Form.Group controlId='country'>
           <Form.Control type='text' placeholder='enter country'  required value={country} onChange={e=>setcountry(e.target.value)}>
           </Form.Control>
        </Form.Group> 
        <Button type='submit' variant='primary'>
            Continue
        </Button>
        </Form>
 
      
       </Formcontainer>
    )
}

export default Shippingscreen
