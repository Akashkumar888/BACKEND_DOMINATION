
const { string } = require('joi');
const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/aggregationDB')
.then(function(){
  console.log('Database connect Successfully...')
})
.catch(function(err){
  console.log('Database connection failed...')
})


const userSchema=new mongoose.Schema({
  name:String,
  age:Number,
  email:String,
  createdAt:{
    type:Date,
    default:Date.now()
  },
  tags:[String],
})

const userModel=mongoose.model('User',userSchema);

module.exports={userModel};

