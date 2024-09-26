import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/loader'
import  Formcontainer from '../components/formcontainer'
import {login} from '../actions/useraction'


const Loginscreen = (props) => {
   const [formstate,setstate]=useState({
       email:'',
       password:''
   })
const dispatch=useDispatch()

const userlogin=useSelector(state=>state.userlogin)
const {loading,error,userinfo}=userlogin

const redirect=props.location.search?props.location.search.split('=')[1]:'/'

useEffect(()=>{
if(userinfo){
    props.history.push(redirect)
}
},[props.history,userinfo])


  
  const submithandler=(e)=>{
      e.preventDefault()
      dispatch(login(formstate.email,formstate.password))
  }
  const handlechange=(e)=>{
  const {name,value}=e.target
   
  if(name==='email'){
 setstate(prev=>{return{...prev,email:value}})
  }
  else if(name==='password'){
    setstate(prev=>{return{...prev,password:value}})
     }


  }

    return (
       <Formcontainer>
        <h1>Sign In</h1>
        {error &&<Message variant='danger'>Invalid credentials!</Message>}
        {loading&&<Loader></Loader>}
       <Form onSubmit={submithandler}>
       
       <Form.Group controlId='email'>
           <Form.Control type='email' placeholder='enter email' name='email' value={formstate.email} onChange={handlechange}>
           </Form.Control>
        </Form.Group>       
        <Form.Group controlId='password'>
           <Form.Control type='password' placeholder='enter password' name='password' value={formstate.password} onChange={handlechange}>
           </Form.Control>
        </Form.Group> 
        <Button type='submit'>
            Sign In
        </Button>
       </Form>
       <Row className='py-3'>
        <Col>
        New To our site?<Link to= {redirect?`/register?redirect=${redirect}`:'/register'}>
        Register
        </Link></Col>
       </Row>
       
       </Formcontainer>
    )
}

export default Loginscreen
