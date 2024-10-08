export const productlistreducer=(state={products:[]},action)=>{
     switch(action.type){
case 'PRODUCT_LIST_REQUEST':
    return{loading:true,products:[]}
case 'PRODUCT_LIST_SUCCESS':
    return {loading:false,products:action.payload.products,pages:action.payload.pages,page:action.payload.page}
    case 'PRODUCT_LIST_FAIL':
        return {loading:false,error:action.payload}
default:
    return state
   }
} 

export const productdetailsreducer=(state={product:{reviews:[]}},action)=>{
    switch(action.type){
case 'PRODUCT_REQUEST':
   return{loading:true,...state}
case 'PRODUCT_SUCCESS':
   return {loading:false,product:action.payload}
   case 'PRODUCT_FAIL':
       return {loading:false,product:action.payload}
default:
   return state
  }
} 



export const productdeletereducer=(state={},action)=>{
    switch(action.type){
case 'PRODUCT_DELETE_REQUEST':
   return{loading:true}
case 'PRODUCT_DELETE_SUCCESS':
   return {loading:false,success:true}
   case 'PRODUCT_DELETE_FAIL':
       return {loading:false,error:action.payload}
default:
   return state
  }
} 

export const productcreatereducer=(state={},action)=>{
    switch(action.type){
case 'PRODUCT_CREATE_REQUEST':
   return{loading:true}
case 'PRODUCT_CREATE_SUCCESS':
   return {loading:false,success:true,product:action.payload}
case 'PRODUCT_CREATE_FAIL':
    return {loading:false,error:action.payload}
case 'PRODUCT_CREATE_RESET':
    return {}
default:
   return state
  }
} 

export const productupdatereducer=(state={product:[]},action)=>{
    switch(action.type){
case 'PRODUCT_UPDATE_REQUEST':
   return{loading:true}
case 'PRODUCT_UPDATE_SUCCESS':
   return {loading:false,success:true,product:action.payload}
case 'PRODUCT_UPDATE_FAIL':
    return {loading:false,error:action.payload}
case 'PRODUCT_UPDATE_RESET':
    return {product:[]}
default:
   return state
  }
}


export const productreviewcreatereducer=(state={},action)=>{
    switch(action.type){
case 'PRODUCT_CREATE_REVIEW_REQUEST':
   return{loading:true}
case 'PRODUCT_CREATE_REVIEW_SUCCESS':
   return {loading:false,success:true,product:action.payload}
case 'PRODUCT_CREATE_REVIEW_FAIL':
    return {loading:false,error:action.payload}
case 'PRODUCT_CREATE_REVIEW_RESET':
    return {}
default:
   return state
  }
} 

export const producttopreducer=(state={products:[]},action)=>{
    switch(action.type){
case 'PRODUCT_TOP_REQUEST':
   return{loading:true,products:[]}
case 'PRODUCT_TOP_SUCCESS':
   return {loading:false,products:action.payload}
case 'PRODUCT_TOP_FAIL':
    return {loading:false,error:action.payload}
case 'PRODUCT_TOP_RESET':
    return {}
default:
   return state
  }
} 




