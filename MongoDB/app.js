

const express=require('express');
const app=express();

const mongoose=require('mongoose');


mongoose.connect("mongodb+srv://akashgkr12:VBgE8FMfvByJEpfz@testuser-db.cflvszg.mongodb.net/?retryWrites=true&w=majority&appName=testuser-db")
.then(function(){
  console.log(" ✅ Connected to MongoDB : connected to database...");
})
.catch(function(err){
  console.log("❌ MongoDB connection error:",err);
});


const UserModels=require('./models/usermodel');


async function insert() {
  try{
    const result=await UserModels.create({
      name:'Akash',
      username:'akashgkr',
      age:21,
      email:'akash.2201216cs@gmail.com'
    });
    console.log("Data inserted...",result);
  }
  catch(err){
    console.log("Insertion failed...",err);
  }
}


insert();

app.get('/', function(req, res, next) {
  res.send("HELLO");  // Send a simple response
});







// app.listen(3000,()=>{
//   console.log("Server running on port: http://localhost:3000");
// })

app.listen(3000,function(){
  console.log("Server running on port: http://localhost:3000")
});




