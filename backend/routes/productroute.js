import express from 'express'
import {getproduct,getproductbyid,deleteproduct,updateproduct,createproduct,productreviews,gettopproducts} from '../controllers/productcontroller.js'
import {protect,admin} from '../middleware/authmiddleware.js'

const router=express.Router()


router.route('/').get(getproduct).post(protect,admin,createproduct)

router.get('/top',gettopproducts)

router.route('/:id/reviews').post(protect,admin,productreviews)

router.route('/:id').get(getproductbyid).delete(protect,admin,deleteproduct).put(protect,admin,updateproduct)


export default router