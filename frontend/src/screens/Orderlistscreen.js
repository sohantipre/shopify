import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Table,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/loader'
import {allorders} from '../actions/orderactions'





const Orderlistscreen = (props) => {
    const dispatch=useDispatch()

   

    const userlogin=useSelector(state=>state.userlogin)
    const {userinfo}=userlogin

    const Allorders=useSelector(state=>state.orderall)
    const {loading,error,success,orders}=Allorders


useEffect(()=>{

if(!userinfo.isAdmin){
    props.history.push('/login')
  }
// if(Createsuccess){
//     props.history.push(`/admin/product/${Createproduct._id}/edit`)
// }
else{
    dispatch(allorders())
}
    },[dispatch,props.history,userinfo])
    

// const deletehandler=(id)=>{
// if(window.confirm('Are you sure to delete this')){
//  dispatch(deleteproduct(id))}

//     }
//     const createproducthandler=()=>{
// dispatch(createproduct())
//     }

    return (
        <div>
            <Row className='align-items-center'>
                <Col>
                <h1>Orders</h1>
                </Col>
            </Row>
            {loading?<Loader />:error?<Message varaint='danger'>{error}</Message>:
            <Table striped bordered hover resource className='table-sm'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Delivered</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order)=>(
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.User&&order.User.name}</td>
                            <td>{order.createdAt.substring(0,10)}</td>
                            <td>${order.totalprice}</td>
                           <td>{order.ispaid?order.paidat:(
                               <i className='fas fa-times' style={{color:'red'}}></i>
                           )}</td>
                           <td>{order.isdelivered?order.deliveredat:(
                               <i className='fas fa-times' style={{color:'red'}}></i>
                           )}</td>
                          
                            <td>
                                <LinkContainer to={`/order/${order._id}`}>
                                   <Button variant='light' className='btn-sm'>
                                       Details
                                   </Button>
                                </LinkContainer>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </Table> }
        </div>
    )
}

export default Orderlistscreen
