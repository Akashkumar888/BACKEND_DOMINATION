
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
 name:String,
 username:String,
 age:Number,
 email:String
});

module.exports=mongoose.model('User',userSchema);

