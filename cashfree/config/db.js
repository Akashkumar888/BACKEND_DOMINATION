
require('dotenv').config();

const mongoose=require('mongoose');
const dbConnect=async ()=>{
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected Successfully");

  }
  catch(err){
    console.log("connection failed.");
    process.env(1);
  }
}

module.exports=dbConnect;

