

const express=require('express');
const app=express();

app.get('/check',function(req,res){
  res.send("Get Hello EveryOne");
})

app.post('/check',function(req,res){
  res.send("Post Hello EveryOne");
})

app.put('/check',function(req,res){
  res.send("Put Hello EveryOne");
})

app.patch('/check',function(req,res){
  res.send("Patch Hello EveryOne");
})

app.delete('/check',function(req,res){
  res.send("Delete Hello EveryOne");
})

// app.head('/check',function(req,res){
//   res.send("Head Hello EveryOne");
// })


// app.options('/check',function(req,res){
//   res.send("Options Hello EveryOne");
// })


app.listen(3000);




