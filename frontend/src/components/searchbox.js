import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'


const Searchbox = ({history}) => {
    const[keyword,setkeyword]=useState('')
    
    const submithandler=(e)=>{
        e.preventDefault()
        if(keyword.trim()){
            history.push(`/search/${keyword}`)
        }
        else{
          history.push('/')
        }
    } 
    return (
       <Form onSubmit={submithandler} inline>
<Form.Control type='text' name='q' placeholder='search products...' className='mr-sm-2 ml-sm-5' onChange={e=>setkeyword(e.target.value)}></Form.Control>
<Button className='p-2' variant='outline-success' type='submit'>
    Search
</Button>
       </Form>
    )
}

export default Searchbox
