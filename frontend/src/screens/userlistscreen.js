
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Table,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/loader'
import {getusers} from '../actions/useraction'
import {deleteusers} from '../actions/useraction'



const Userlistscreen = (props) => {
    const dispatch=useDispatch()

    const userlist=useSelector(state=>state.userlist)
    const {users,loading,error}=userlist

    const userlogin=useSelector(state=>state.userlogin)
    const {userinfo}=userlogin

    const userdelete=useSelector(state=>state.userdelete)
    const {success:successdelete}=userdelete

useEffect(()=>{
if(userinfo&&userinfo.isAdmin){
  dispatch(getusers())}
  else{
      props.history.push('/login')
  }
    },[dispatch,props.history,userinfo,successdelete])
    

    const deletehandler=(id)=>{
if(window.confirm('Are you sure to delete this')){
    dispatch(deleteusers(id))}
 

    }

    return (
        <div>
            <h1>Users</h1>
            {loading?<Loader />:error?<Message varaint='danger'>{error}</Message>:
            <Table striped bordered hover resource className='table-sm'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td><a href={`mailto:${user.email}`}>{user._id}</a>`</td>
                            <td>{user.isAdmin?(<i className='fas fa-check' style={{color:'green'}}></i>):(
                                <i className='fas fa-times' color={{color:'red'}}></i>
                            )}</td>
                            <td>
                                <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                   <Button variant='light' className='btn-sm'>
                                       <i className='fas fa-edit'></i>
                                   </Button>
                                </LinkContainer>
                                <Button variant='danger' className='btn-sm' onClick={()=>{
                                       deletehandler(user._id)
                                }}><i className='fas fa-trash'></i></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </Table> }
        </div>
    )
}

export default Userlistscreen
