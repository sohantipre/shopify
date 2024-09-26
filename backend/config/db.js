import mongoose from 'mongoose'


const connect=async ()=>{
try{
const con=await mongoose.connect(process.env.MONGO_URI,{
useUnifiedTopology:true,
useNewUrlParser:true,
useCreateIndex:true
})
console.log(`mongoose connected on port ${con.connection.host}`)
}
catch(e){
console.log(e)

}

}
export default connect