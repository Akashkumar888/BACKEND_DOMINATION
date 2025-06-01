
const { string } = require('joi');
const mongoose=require('mongoose');
// no need to connect again 
// mongoose.connect('mongodb://127.0.0.1.27017/testingdbreferences')
// .then(function(){
//   console.log("Database Successfully connected...");
// })
// .catch(function(err){
//   console.log('Database connection failed...');
// })


const postSchema=mongoose.Schema({
 user:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'User'
 },
 content:String
});


const postModel=mongoose.model('Post',postSchema);

module.exports={postModel};

