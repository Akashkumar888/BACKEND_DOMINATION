

const Joi=require('joi');
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testingdbreferences')
.then(function(){
  console.log('Database successfully connected...');
})
.catch(function(err){
  console.log('Database connection failed...');
})

// method-1

// const userSchema=new mongoose.Schema({
//   username:{
//     type:String,
//     required:true
//   },
//   email:{
//     type:String,
//   },
//   password:{
//     type:String
//   }
//   ,
//   posts:[
//     {
//       content:String,
//       date:{
//         type:Date,
//         default: Date.now()
//       }
//     }
//   ]
// })


// method-2

// const postSchema=mongoose.Schema({
//   content:String,
//   date:{
//     type:Date,
//     default:Date.now()
//   }
// })


// const userSchema=new mongoose.Schema({
//   username:{
//     type:String,
//     required:true
//   },
//   email:{
//     type:String,
//   },
//   password:{
//     type:String
//   }
//   ,
//   posts:[postSchema]
// })

// method-3

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
  ,
  posts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }]
})



const userModel=mongoose.model("User",userSchema);

module.exports={userModel};

