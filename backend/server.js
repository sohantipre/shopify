import express from 'express'
import path from 'path'
import morgan from 'morgan'

import connect from './config/db.js'
import productroute from './routes/productroute.js'
import Userroute from './routes/userroute.js'
import Orderroute from './routes/orderroutes.js'
import uploadroutes from './routes/uploadroutes.js'

const app=express()

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}

app.use(express.json())
import dotenv from 'dotenv'
dotenv.config()

connect()



app.use('/api/products',productroute)
app.use('/api/users',Userroute)
app.use('/api/orders',Orderroute)
app.use('/api/upload',uploadroutes)

app.get('/api/config/paypal',(req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID)
})

const __dirname=path.resolve()

app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/build")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
    });
  } else {
    app.get("/", (req, res) => {
      res.send("api is running");
    });
  }

  


const cool=(req,res) => {
  console.log(res.send(201));
}


const PORT=process.env.PORT||5000
app.listen(PORT,console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))







