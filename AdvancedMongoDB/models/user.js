
const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/testingadvdbcommand')
.then(function(){
  console.log('database connection Successfully...');
})
.catch(function(err){
  console.log('database connection failed...',err);
})

const userSchema=new mongoose.Schema({
  name:String,
  username:String,
  email:String,
  password:String,
  age:Number,
  isMarried:Boolean
});

module.exports=mongoose.model('User',userSchema);

