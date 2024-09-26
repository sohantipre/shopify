import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Table,Form,Button,Row,Col} from 'react-bootstrap'

import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/loader'
import  Formcontainer from '../components/formcontainer'
import {getuserdetails,updateuserdetails} from '../actions/useraction'
import {myorderlist} from  '../actions/orderactions'
import { LinkContainer } from 'react-router-bootstrap'


const Profilescreen = (props) => {
   const [formstate,setstate]=useState({
       email:'',
       password:'',
       name:'',
       confirmpassword:'',
       message:null
   })
const dispatch=useDispatch()

const userdetails=useSelector(state=>state.userdetails)
const {loading,error,user}=userdetails

const userlogin=useSelector(state=>state.userlogin)
const {userinfo}=userlogin

const userupdateprofile=useSelector(state=>state.userupdateprofile)
const {success}=userupdateprofile

const orderlistmy=useSelector(state=>state.orderlistmy)
const {loading:loadingmyorders,error:errormyorders,orders}=orderlistmy

useEffect(()=>{
if(!userinfo){
    props.history.push('/login')
}
else{
    if(!user||!user.name||success){
        dispatch({
            type:'USER_UPDATE_PROFILE_RESET'
        })
    dispatch(getuserdetails('profile'))
    dispatch(myorderlist())

    }else{
    setstate(prev=>{return{...prev,name:user.name,email:user.email}})
    
    }
}
},[dispatch,props.history,userinfo,user,success])


  
  const submithandler=(e)=>{
      e.preventDefault()
      if(formstate.password!==formstate.confirmpassword){
          setstate(prev=>{return{...prev,message:'Passwords do not match'}})
      }
   else{
       dispatch(updateuserdetails({id:user._id,name:formstate.name,email:formstate.email,password:formstate.password}))
   }
  }
  const handlechange=(e)=>{
  const {name,value}=e.target
   
  if(name==='email'){
 setstate(prev=>{return{...prev,email:value}})
  }
  else if(name==='password'){
    setstate(prev=>{return{...prev,password:value}})
     }
     else if(name==='name'){
        setstate(prev=>{return{...prev,name:value}})
         }
         else if(name==='confirmpassword'){
            setstate(prev=>{return{...prev,confirmpassword:value}})
             }
     


  }

    return <Row>
        <Col md={3}>
         <h2>User profile</h2>
         
        {error &&<Message variant='danger'>Email is already registered!!</Message>}
        {success&&<Message variant='success'>Profile updated! </Message>}
        {formstate.message}
        {loading&&<Loader></Loader>}
       <Form onSubmit={submithandler}>
       <Form.Group controlId='name'>
           <Form.Control type='name' placeholder='enter name' name='name' value={formstate.name} onChange={handlechange}>
           </Form.Control>
        </Form.Group> 
       <Form.Group controlId='email'>
           <Form.Control type='email' placeholder='enter email' name='email' value={formstate.email} onChange={handlechange}>
           </Form.Control>
        </Form.Group>       
        <Form.Group controlId='password'>
           <Form.Control type='password' placeholder='enter password' name='password' value={formstate.password} onChange={handlechange}>
           </Form.Control>
        </Form.Group> 
        <Form.Group controlId='confirmpassword'>
           <Form.Control type='password' placeholder='confirm password' name='confirmpassword' value={formstate.confirmpassword} onChange={handlechange}>
           </Form.Control>
        </Form.Group> 
        <Button type='submit'>
            Update
        </Button>
       </Form>
        </Col >
        <Col md={9}>
        <h2>My Orders</h2>
        {loadingmyorders?<Loader/>:errormyorders?<Message variant='danger'>{errormyorders}</Message>:(
            <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                        <th>PAID</th>
                        <th>DELIVERED</th>

                    </tr>
                </thead>
                <tbody>
                    {orders.map(order=>(
                        <tr key={order._id}>
                            <td>{order.createdAt.substring(0,10)}</td>
                            <td>{order.totalprice}</td>
                            <td>{order.ispaid?order.paidAt.substring(0,10):(<i className='fas fa-times' style={{color:'red'}}>
                            </i>)}</td>
                            <td>{order.isdelivered?order.deliveredAt.substring(0,10):(<i className='fas fa-times' style={{color:'red'}}>
                            </i>)}</td>
                            <td>{order._id}</td>
                            <td>
                                <LinkContainer to={`/order/${order._id}`}>
                                    <Button className ='btn-sm' variant='light'>Details</Button>
                                </LinkContainer>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        )}
        </Col>
    </Row>
}

export default Profilescreen
