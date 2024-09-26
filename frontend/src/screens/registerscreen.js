import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/loader'
import  Formcontainer from '../components/formcontainer'
import {register} from '../actions/useraction'


const Registerscreen = (props) => {
   const [formstate,setstate]=useState({
       email:'',
       password:'',
       name:'',
       confirmpassword:'',
       message:null
   })
const dispatch=useDispatch()

const userregister=useSelector(state=>state.userregister)
const {loading,error,userinfo}=userregister

const redirect=props.location.search?props.location.search.split('=')[1]:'/'

useEffect(()=>{
if(userinfo){
    props.history.push('/')
}
},[props.history,userinfo])


  
  const submithandler=(e)=>{
      e.preventDefault()
      if(formstate.password!==formstate.confirmpassword){
          setstate(prev=>{return{...prev,message:'Passwords do not match'}})
      }
      else{dispatch(register(formstate.name,formstate.email,formstate.password))}
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

    return (
       <Formcontainer>
        <h1>Sign Up</h1>
        {error &&<Message variant='danger'>Email is already registered!!</Message>}
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
            Register
        </Button>
       </Form>
       <Row className='py-3'>
        <Col>
        Have an account?<Link to= {redirect?`/login?redirect=${redirect}`:'/register'}>
        Login
        </Link></Col>
       </Row>
       
       </Formcontainer>
    )
}

export default Registerscreen
