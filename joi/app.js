

const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const { userModel,validateModel} = require('./models/user');  // ✅ Destructuring import


const Joi=require('joi');


app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));



app.get('/',function(req,res){
  res.send('hii');
});

app.post('/create',async function(req,res){
const {username,name,age,email,contact}=req.body;

  const error=validateModel({username,name,email,contact,age});
  if(error)return res.status(400).send(error.details[0].message);

  try{
    const createuser=await userModel.create({ name,username,age,contact,email
    });
    console.log("user succesfully created...");
    res.send(createuser);
  }
  catch(err){
    console.log('creation of user failed...');
    res.status(500).send(err);
  }
})






























app.listen(3000,function(){
  console.log('server listining on port: http://localhost:3000');
});



