
const express=require('express');
const app=express();


app.get('/',function(req,res,next){
  try{
    // res.send(Hello);
    res.send("Hello");

  }
  catch(err){
  next(err);
  }
})



app.get('/hey',function(req,res){
  res.send("hey");
})

// error handler
app.use(function(err,req,res,next){
  res.status(500).send(err.message);
})

app.listen(3000);



