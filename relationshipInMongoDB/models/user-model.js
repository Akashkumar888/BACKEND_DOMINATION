

const Joi=require('joi');
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testingdbreferences')
.then(function(){
  console.log('Database successfully connected...');
})
.catch(function(err){
  console.log('Database connection failed...');
})


const userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
  },
  password:{
    type:String
  }
  
})





const userModel=mongoose.model("User",userSchema);

module.exports={userModel};

