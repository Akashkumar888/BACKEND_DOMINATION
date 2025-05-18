


const express=require('express');
const app=express();

app.get('/',function(req,res,next){
  res.send("HELLO");
})

app.listen(3000,()=>{
  console.log("Server running on port: http://localhost:3000");
})

