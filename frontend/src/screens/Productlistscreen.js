import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Table,Button,Row,Col} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/loader'
import {listproducts,deleteproduct,createproduct} from '../actions/productactions'
import Paginate from '../components/Paginate'



const Productlistscreen = (props) => {
    const dispatch=useDispatch()

    const pageNumber=props.match.params.pageNumber

    const productlist=useSelector(state=>state.productlist)
    const {products,page,pages,loading,error}=productlist

    const userlogin=useSelector(state=>state.userlogin)
    const {userinfo}=userlogin


    const productdelete=useSelector(state=>state.productdelete)
    const {error:errordelete,loading:loadingdelete,success:successdelete}=productdelete

    const productcreate=useSelector(state=>state.productcreate)
    const {product:Createproduct,loading:Createloading,error:Createerror,success:Createsuccess}=productcreate


useEffect(()=>{
dispatch({type:'PRODUCT_CREATE_RESET'})
if(!userinfo.isAdmin){
    props.history.push('/login')
  }
if(Createsuccess){
    props.history.push(`/admin/product/${Createproduct._id}/edit`)
}
else{
    dispatch(listproducts('',pageNumber))
}
    },[dispatch,props.history,userinfo,successdelete,Createsuccess,Createproduct,pageNumber])
    

const deletehandler=(id)=>{
if(window.confirm('Are you sure to delete this')){
 dispatch(deleteproduct(id))}

    }
    const createproducthandler=()=>{
dispatch(createproduct())
    }

    return (
        <div>
            <Row className='align-items-center'>
                <Col>
                <h1>Products</h1>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createproducthandler}>
                      <i className='fas fa-plus'></i>Create product
                    </Button>
                </Col>
            </Row>
    {loadingdelete&&<Loader/>}
    {errordelete&&<Message variant='danger'>{errordelete}</Message>}
    {Createloading&&<Loader/>}
    {errordelete&&<Message variant='danger'>{Createerror}</Message>}
            {loading?<Loader />:error?<Message varaint='danger'>{error}</Message>:
            <>
            <Table striped bordered hover resource className='table-sm'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=>(
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            
                            <td>
                                <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                   <Button variant='light' className='btn-sm'>
                                       <i className='fas fa-edit'></i>
                                   </Button>
                                </LinkContainer>
                                <Button variant='danger' className='btn-sm' onClick={()=>{
                                       deletehandler(product._id)
                                }}><i className='fas fa-trash'></i></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </Table>
            <Paginate pages={pages} page={page} isAdmin={true}/>
            </> }
        </div>
    )
}

export default Productlistscreen
