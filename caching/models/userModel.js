
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
 name:{
  type:String,
  required:true
 },
 email:{
  type:String,
  required:true,
  unique:true
 }
});

const User=mongoose.model("USer",userSchema);


module.exports=User;

