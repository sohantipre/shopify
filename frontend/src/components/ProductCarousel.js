import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Carousel,Image} from 'react-bootstrap'
import Loader from './loader'
import Message from './Message'
import {listtopproducts} from '../actions/productactions'
import Searchbox from '../components/searchbox'
import {Route} from 'react-router-dom'

const ProductCarousel = () => {

    const dispatch=useDispatch()
    
    const producttoprated=useSelector(state=>state.producttop)
    const {products,error,loading}=producttoprated

    useEffect(()=>{
        dispatch(listtopproducts())
    },[dispatch])
    return <div>loading?<Loader/>:error?<Message variant='danger'>{error}</Message>:(
        <Carousel pause='hover' className='bg-dark'>
        { products.map(product => (
            <Carousel.Item key={product._id} >
                <Link to={`/products/${product._id}`} >
                    <Image src={product.image} alt={product.name} />
                    <Carousel.Caption className='carousel-caption ' >
                        <h2 className='name' >
                            {product.name} 
                        </h2>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
        )) }
    </Carousel>
    )
    <Route render={({history})=><Searchbox history={history}/>}></Route>
    </div>
}

export default ProductCarousel

