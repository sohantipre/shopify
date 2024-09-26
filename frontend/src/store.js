import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import {productlistreducer,productdetailsreducer,productdeletereducer,productcreatereducer,productupdatereducer,productreviewcreatereducer,producttopreducer} from './reducers/productreducer'
import {cartreducer} from './reducers/cartreducer'
import {userloginreducer,userregisterreducer,userdetailreducer,userupdateprofilereducer,userlistreducer,userdeletereducer,userupdatereducer} from './reducers/userreducers'
import {ordercreatereducer,orderdetailsreducer,orderpayreducer,orderlistmyreducer,orderallreducer,orderdeliverreducer} from './reducers/orderreducer'


const reducer=combineReducers({
    productlist:productlistreducer,
    productdetails:productdetailsreducer,
    productdelete:productdeletereducer,
    productcreate:productcreatereducer,
    productupdate:productupdatereducer,
    productreviewcreate:productreviewcreatereducer,
    producttop:producttopreducer,
    cart:cartreducer,
    userlogin:userloginreducer,
    userregister:userregisterreducer,
    userdetails:userdetailreducer,
    userupdateprofile:userupdateprofilereducer,
    userlist:userlistreducer,
    userdelete:userdeletereducer,
    userupdate:userupdatereducer,
    ordercreate:ordercreatereducer,
    orderdetails:orderdetailsreducer,
    orderpay:orderpayreducer,
    orderlistmy:orderlistmyreducer,
    orderall:orderallreducer,
    orderdeliver:orderdeliverreducer
})

const cartitemsfromstorage=localStorage.getItem('cartitems')?JSON.parse(localStorage.getItem('cartitems')):[]

const userinfofromstorage=localStorage.getItem('userinfo')?JSON.parse(localStorage.getItem('userinfo')):null

const shippingaddressfromstorage=localStorage.getItem('shippingaddress')?JSON.parse(localStorage.getItem('shippingaddress')):{}

const initialstate={
    cart:{
        cartitems:cartitemsfromstorage,
        shippingaddress:shippingaddressfromstorage
    },
    userlogin:{
        userinfo:userinfofromstorage
    }
}

const middleware=[thunk]

const store=createStore(reducer,initialstate,composeWithDevTools(applyMiddleware(...middleware)))

export default store