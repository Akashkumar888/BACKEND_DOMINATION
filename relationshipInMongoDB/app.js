



const express=require('express');
const app=express();
const mongoose=require('mongoose');

const path=require('path');
const Joi=require('joi');

const {userModel}=require('./models/user-model');



app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.get('/',function(req,res){
  res.send('Hii...');
})


app.post('/create',async function(req,res){
  const {username,name,age,email,contact}=req.body;
  try{
    const usercreate=await userModel.create({username,name,age,email,contact});
    res.send(usercreate);
    console.log('User creation successfully...');
  }
  catch(err){
    res.status(500).send(err);
    console.log('Creation of user failed...');
  }
})

















app.listen(3000,function(){
  console.log('Server is running on port: http://localhost:3000');
})



