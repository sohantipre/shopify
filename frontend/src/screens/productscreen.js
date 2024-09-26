import React,{useEffect,useState} from 'react'
// import products from '../components/products'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button,Form, FormGroup} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import {listproductdetails,createproductreview} from '../actions/productactions'
import Loader from '../components/loader'
import Message from '../components/Message'
import {Helmet} from 'react-helmet'


const Productscreen = (props) => {


 const [qty,setqty]=useState(1)
 const [rating,setrating]=useState(0)
 const [comment,setcomment]=useState('')

 const dispatch=useDispatch()
   
const productdetail=useSelector(state=>state.productdetails)
const {loading,product,error}=productdetail

const productreviewcreate=useSelector(state=>state.productreviewcreate)
const {loading:loadingreview,product:productreview,error:errorreview,success:successreview}=productreviewcreate

const userlogin=useSelector(state=>state.userlogin)
const {userinfo}=userlogin

    useEffect(() => {
       if(successreview){
           alert('Review Submitted!')
           setrating(0)
           setcomment('')
           dispatch({type:'PRODUCT_CREATE_REVIEW_RESET'})
       }
       dispatch(listproductdetails(props.match.params.id))
       
    },[dispatch,props.match,successreview])
    

    const addtocarthandler=()=>{
        props.history.push(`/cart/${props.match.params.id}?qty=${qty}`)
    }
    

    const submithandler=(e)=>{
    e.preventDefault()
    dispatch(createproductreview(props.match.params.id,{
        rating,
        comment
    }))

    }
    return (
        <div>
            <Link className='btn btn-dark my-3' to='/'>Go back</Link>
            {loading?<Loader/>:(
                <>
                <Helmet>
            <title>{product.name}</title>
                </Helmet>
                <Row>
                <Col md={6}>
                    <Image src={product.image} alt='product.name' fluid></Image>
                </Col>
                <Col md={3}>
                   <ListGroup variant='flush'>
                       <ListGroup.Item>
                           <h3>{product.name}</h3>
                       </ListGroup.Item>
                       <ListGroup.Item>
                        <Rating value={product.rating}></Rating>
                        {product.numreviews} review
                       </ListGroup.Item>
                       <ListGroup.Item>
                        Price:${product.price}
                       </ListGroup.Item>
                       <ListGroup.Item>
                        Description:${product.description}
                       </ListGroup.Item>
                   </ListGroup>
                </Col>
                <Col md={3}>
                <ListGroup >
                    
                       <ListGroup.Item>
                        Price:$<strong>{product.price}</strong>
                       </ListGroup.Item>
                       <ListGroup.Item>
                       {product.countInStock>0?'in stock':'out of stock'}
                       </ListGroup.Item>
                       
                       {product.countInStock>0&&(
                        <ListGroup.Item>
                            <Row>
                          <Col>Qty</Col>
                          <Col>
                          <Form.Control as='select' value={qty} onChange={(e)=>setqty(e.target.value)}>
                        {
                            [...Array(product.countInStock).keys()].map((x)=>(
                                <option key={x+1} value={x+1}>
                                 {x+1}
                                </option>
                            ))
                        }
                        
                          </Form.Control>
                          
                          </Col>
                          

                            </Row>
                        </ListGroup.Item>
                       )}
                       <ListGroup.Item>
                         <Button 
                         onClick={addtocarthandler}
                         disabled={product.countInStock===0}>
                             Add to cart
                         </Button>
                         </ListGroup.Item>
                   </ListGroup>

                </Col>
            <Col md={6}>
                <h2>Reviews</h2>
                {product.reviews.length===0&&<Message> No reviews</Message>}
                <ListGroup >
                    {product.reviews.map(review=>(
                        <ListGroup.Item key={review._id}>
                            <strong>{review.name}</strong><br/>
                        <Rating value={review.rating}/>
                        <p>{review.createdAt}</p>
                        <p>{review.comment}</p>
                        </ListGroup.Item>
                    ))}
                    <ListGroup.Item>
                        <h2>Write a customer review</h2>
                    {errorreview&&<Message variant='danger'>Product already reviewed by you!</Message>}
                        {userinfo?
                        (<Form onSubmit={submithandler}>
                         <Form.Group controlId='rating'>
                             <Form.Label>RATING</Form.Label>
                             <Form.Control as='select' value={rating} onChange={e=>setrating(e.target.value)}>
                                 <option value=''>Select the rating</option>
                                 <option value='1'>1-Poor</option>
                                 <option value='2'>2-Moderate</option>
                                 <option value='3'>3-Good</option>
                                 <option value='4'>4-Very Good</option>
                                 <option value='5'>5-Excellent</option>
                            </Form.Control> 
                         </Form.Group>
                         <Form.Group>
                        <Form.Label>COMMENT</Form.Label>
                        <Form.Control as='textarea' value={comment} row={3} onChange={e=>setcomment(e.target.value)}>
                        </Form.Control>
                         </Form.Group>
                         <Button type='submit' variant='primary'>
                           Submit
                         </Button>
                        </Form>):
                        <Message>Please <Link to='/login'>Signin</Link> to write a review</Message>}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            </Row>
            </>)}
           
        </div>
    )
}

export default Productscreen
