import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/footer";
import { Container } from "react-bootstrap";
import Home from "./screens/Homescreen";
import Productscreen from "./screens/productscreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cartscreen from "./screens/cartscreen";
import Loginscreen from "./screens/loginscreen";
import Registerscreen from "./screens/registerscreen";
import Profilescreen from "./screens/profilescreen";
import Shippingscreen from "./screens/shippingscreen";
import Paymentscreen from "./screens/paymentscreen";
import Placeorderscreen from "./screens/placeorderscreen";
import Orderscreen from "./screens/orderscreen";
import Userlistscreen from "./screens/userlistscreen";
import Usereditscreen from "./screens/Usereditscreen";
import Productlistscreen from "./screens/Productlistscreen";
import Producteditscreen from "./screens/Editproductscreen";
import Orderlistscreen from "./screens/Orderlistscreen";

function App() {
  return (
    <Router>
      <Header></Header>
      <Container className='copyright py-3'>
        <Route path='/login' component={Loginscreen}></Route>
        <Route path='/register' component={Registerscreen}></Route>
        <Route path='/profile' component={Profilescreen}></Route>
        <Route path='/shipping' component={Shippingscreen}></Route>
        <Route path='/payment' component={Paymentscreen}></Route>
        <Route path='/placeorder' component={Placeorderscreen}></Route>
        <Route path='/order/:id' component={Orderscreen}></Route>
        <Route path='/' component={Home} exact></Route>
        <Route path='/products/:id' component={Productscreen}></Route>
        <Route path='/cart/:id?' component={Cartscreen}></Route>
        <Route path='/admin/userlist' component={Userlistscreen}></Route>
        <Route path='/admin/user/:id/edit' component={Usereditscreen}></Route>
        <Route
          path='/admin/productlist'
          component={Productlistscreen}
          exact
        ></Route>
        <Route
          path='/admin/productlist/:pageNumber'
          component={Productlistscreen}
          exact
        ></Route>
        <Route
          path='/admin/product/:id/edit'
          component={Producteditscreen}
        ></Route>
        <Route path='/admin/orderlist' component={Orderlistscreen}></Route>
        <Route path='/search/:keyword' component={Home} exact></Route>
        <Route path='/page/:pageNumber' component={Home} exact></Route>
        <Route
          path='/search/:keyword/page/:pageNumber'
          component={Home}
        ></Route>
      </Container>

      <Footer></Footer>
    </Router>
  );
}

export default App;
