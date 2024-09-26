import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/loader'
import  Formcontainer from '../components/formcontainer'
import {getuserdetails,updateuser} from '../actions/useraction'



const Usereditscreen = (props) => {
   const [formstate,setstate]=useState({
       email:'',
       password:'',
       isAdmin:false,
       message:null
   })
const dispatch=useDispatch()

const userdetails=useSelector(state=>state.userdetails)
const {loading,error,user}=userdetails

const userupdate=useSelector(state=>state.userupdate)
const {loading:loadingupdate,error:errorupdate,success:successupdate}=userupdate


useEffect(()=>{
if(successupdate){
    dispatch({type:'USER_UPDATE_RESET'})
    props.history.push('/admin/userlist')
}
else{

    if(!user.name||user._id!==props.match.params.id){
        dispatch(getuserdetails(props.match.params.id))
        }
        else{
            setstate((prev)=>{return{...prev,name:user.name,email:user.email,isAdmin:user.isAdmin}})
        }
}




},[dispatch,user,successupdate])


  
  const submithandler=(e)=>{
      e.preventDefault()
    dispatch(updateuser({_id:props.match.params.id,name:formstate.name,email:formstate.email,isAdmin:formstate.isAdmin}))
       
            
      
  }
  const handlechange=(e)=>{
  const {name,value}=e.target
   
  if(name==='email'){
 setstate(prev=>{return{...prev,email:value}})
  }
  else if(name==='isAdmin'){
    setstate(prev=>{return{...prev,isAdmin:e.target.checked}})
     }
     else if(name==='name'){
        setstate(prev=>{return{...prev,name:value}})
         }
         
  }

    return (
        <div>
            <Link to ='/admin/userlist' className='btn btn-light my-3'></Link>
            <Formcontainer>
        <h1>Edit user</h1>
        {loadingupdate&&<Loader/>}
        {errorupdate&&<Message variant='danger'>{errorupdate}</Message>}
        {loading?<Loader />:error?<Message variant='danger'>{error}</Message>:(
             <Form onSubmit={submithandler}>
             <Form.Group controlId='name'>
                 <Form.Control type='name' placeholder='enter name' name='name' value={formstate.name} onChange={handlechange}>
                 </Form.Control>
              </Form.Group> 
             <Form.Group controlId='email'>
                 <Form.Control type='email' placeholder='enter email' name='email' value={formstate.email} onChange={handlechange}>
                 </Form.Control>
              </Form.Group>       
              <Form.Group controlId='isadmin'>
                 <Form.Check type='checkbox' placeholder='enter password' label='Is Admin' checked={formstate.isAdmin} onChange={handlechange}>
                 </Form.Check>
              </Form.Group> 
              <Button type='submit'>
                  Update
              </Button>
             </Form>
        )}
       
       
       </Formcontainer>
        </div>
      
    )
}

export default Usereditscreen
