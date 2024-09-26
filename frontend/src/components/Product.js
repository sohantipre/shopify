import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'

const Product = ({product}) => {
    return (
       <Card className='my-3 p-3 rounded'>
            <Link to={`/products/${product._id}`}>
                <Card.Img src={product.image} variant='top'></Card.Img>
            </Link>
        <Card.Body>
        <Link to={`/products/${product._id}`}>
                <Card.Title as='div'>
                    {product.name}
                </Card.Title>
            </Link>
            <Card.Text as='h3'>
                    ${product.price}
                </Card.Text>
                <Card.Text as='div'>
                  <Rating value=  {product.rating}></Rating>
                </Card.Text>
                
        </Card.Body>
       </Card>
    )
}

export default Product
