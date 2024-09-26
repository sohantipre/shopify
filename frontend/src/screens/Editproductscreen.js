import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/loader'
import  Formcontainer from '../components/formcontainer'
import {listproductdetails,updateproduct} from '../actions/productactions'
import Productlistscreen from './Productlistscreen'
import axios from 'axios'




const Producteditscreen = (props) => {
   const [formstate,setstate]=useState({
       name:'',
       price:0,
       description:'',
       image:'',
       brand:'',
       category:'',
       countInStock:0,
       numreviews:0,
       uploading:false
   })
const dispatch=useDispatch()

const productdetails=useSelector(state=>state.productdetails)
const {loading,error,product}=productdetails

const productupdate=useSelector(state=>state.productupdate)
const {loading:loadingupdate,success:successupdate,error:errorupdate,product:Productupdate}=productupdate


useEffect(()=>{
if(successupdate){
    dispatch({type:'PRODUCT_UPDATE_RESET'})
    props.history.push('/admin/productlist')
}else{
    if(!product.name||product._id!==props.match.params.id){
        dispatch(listproductdetails(props.match.params.id))
        }
        else{
        setstate((prev)=>{return{...prev,name:product.name,price:product.price,brand:product.brand,image:product.image,
         category:product.category,countInStock:product.countInStock,description:product.description,numreviews:formstate.numreviews}})
        }
    }
},[dispatch,product,props.match.params.id,successupdate,props.history])


  
  const submithandler=(e)=>{
      e.preventDefault()
   
    dispatch(updateproduct({
        _id:props.match.params.id,
        name:formstate.name,
        image:formstate.image,
        price:formstate.price,
        category:formstate.category,
        brand:formstate.brand,
        description:formstate.description,
        countInStock:formstate.countInStock,
        numreviews:formstate.numreviews
    
    }))
    setstate({
        name:formstate.name,
        image:formstate.image,
        price:formstate.price,
        category:formstate.category,
        brand:formstate.brand,
        description:formstate.description,
        countInStock:formstate.countInStock,
        numreviews:formstate.numreviews
    })
            
      
  }
  const handlechange=(e)=>{
  const {name,value}=e.target

  setstate((prev)=>{return{...prev,[name]:value}})
     
  }

  const uploadhandler=async(e)=>{
      const file=e.target.files[0]
      const formdata=new FormData()
      formdata.append('image',file)
      setstate((prev)=>{return{...prev,uploading:true}})

      try{
          const config={
              headers:{
                  'Content-Type':'multipart/formdata'
              }
          }

    const {data}=await axios.post('/api/upload',formdata,config)
    setstate((prev)=>{return{...prev,image:data,uploading:false}})
    
      }

catch(error){
console.log(error)
setstate((prev)=>{return{...prev,uploading:false}})
}
  }

    return (
        <div>
            <Link to ='/admin/userlist' className='btn btn-light my-3'></Link>
            <Formcontainer>
        <h1>Edit Product</h1>
        {loadingupdate&&<Loader/>}
        {errorupdate&&<Message variant='danger'>{errorupdate}</Message>}
        {loading?<Loader />:error?<Message variant='danger'>{error}</Message>:(
             <Form onSubmit={submithandler}>
             <Form.Group controlId='name'>
             <Form.Label>Name</Form.Label>
                 <Form.Control type='name' placeholder='enter name' name='name' value={formstate.name} onChange={handlechange}>
                 </Form.Control>
              </Form.Group> 
             <Form.Group controlId='price'>
             <Form.Label>Price</Form.Label>
                 <Form.Control type='number' placeholder='enter price' name='price' value={formstate.price} onChange={handlechange}>
                 </Form.Control>
              </Form.Group>     
              <Form.Group controlId='image'>
             <Form.Label>Image</Form.Label>
                 <Form.Control type='text' placeholder='enter image URL' name='image' value={formstate.image} onChange={handlechange}>
                 </Form.Control>
                 <Form.File id='image-file'  label='upload image' custom onChange={uploadhandler}></Form.File>
              </Form.Group>    
              {formstate.uploading&&<Loader/>}
              <Form.Group controlId='brand'>
              <Form.Label>Brand</Form.Label>
                 <Form.Control type='name' placeholder='enter brand' name='brand' value={formstate.brand} onChange={handlechange}>
                 </Form.Control>
              </Form.Group>   
              <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
                 <Form.Control type='name' placeholder='enter category' name='category' value={formstate.category} onChange={handlechange}>
                 </Form.Control>
              </Form.Group>   
              <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
                 <Form.Control type='text' placeholder='enter description' name='description' value={formstate.description} onChange={handlechange}>
                 </Form.Control>
              </Form.Group>     
              <Form.Group controlId='countInStock'>
              <Form.Label>countInStock</Form.Label>
                 <Form.Control type='number' placeholder='enter countInStock' name='countInStock' value={formstate.countInStock} onChange={handlechange}>
                 </Form.Control>
              </Form.Group>     
              <Form.Group controlId='numreviews'>
                  <Form.Label>numreviews</Form.Label>
                 <Form.Control type='number' placeholder='enter no. of reviews' name='numreviews' value={formstate.numreviews} onChange={handlechange}>
                 </Form.Control>
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

export default Producteditscreen
