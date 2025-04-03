// harsh sir 

const express=require('express');
const app=express();

const morgan=require('morgan');
app.use(morgan("tiny"));

app.get('/',function(req,res,next){
  res.send('Hello Hii');
})

app.listen(3000);


