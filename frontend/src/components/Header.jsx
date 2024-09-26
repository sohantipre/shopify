import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {logout} from '../actions/useraction'
import Searchbox from '../components/searchbox'
import {Route} from 'react-router-dom'

const Header = () => {

const userlogin =useSelector(state=>state.userlogin)
const {userinfo}=userlogin  

const dispatch=useDispatch()
const logouthandler=()=>{

dispatch(logout())
}

  return (
    <div>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
        <LinkContainer to='/'>
        <Navbar.Brand >ShopCart</Navbar.Brand>
        </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

 
    
    <Nav className="ml-auto">
    <LinkContainer to='/cart'>
    <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
    </LinkContainer>
    
    
    {userinfo? (<NavDropdown title={userinfo.name} id='username'>
      <LinkContainer to='/profile'>
      <NavDropdown.Item>Profile</NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Item onClick={logouthandler}>Logout</NavDropdown.Item>
    </NavDropdown>) :<LinkContainer to='/login'>
     <Nav.Link ><i className='fas fa-user'></i>signin</Nav.Link>
     </LinkContainer>}
     {userinfo&&userinfo.isAdmin&&(
       <NavDropdown title='Admin data' id='adminmenu'>
       <LinkContainer to='/admin/userlist'>
       <NavDropdown.Item>Users</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to='/admin/productlist'>
       <NavDropdown.Item>Products</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to='/admin/orderlist'>
       <NavDropdown.Item>Orders</NavDropdown.Item>
       </LinkContainer>
       </NavDropdown>
       
     )}
  
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header
