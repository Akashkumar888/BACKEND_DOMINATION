
const express=require('express');
const app=express();

const mongooseconnection=require('./config/mongoose');

const UserModels=require('./models/user');


app.get('/',function(req,res,next){
  res.send('HLL');
});


app.listen(3000,()=>{
  console.log("Server running on port: http://localhost:3000");
});

