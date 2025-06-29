
const userModel=require('../models/userModel');
const bcrypt=require('bcrypt');
const generateToken=require('../utils/generateToken');
const { token } = require('morgan');



module.exports.registerUser=async function(req,res){
  try{
    const {name,email,password}=req.body;
    let user=await userModel.findOne({email});
    if(user)return res.status(400).send('Your account already exist, please login..');
    let salt=await bcrypt.genSalt(10);
    let hash=await bcrypt.hash(password,salt);

    user=await userModel.create({
      name,
      email,
      password:hash
    });

    let token=generateToken({email});
    res.cookie("token",token,{
      httpOnly:true,
      maxAge:30*24*60*60*1000,
    })
    res.status(201).send(user);
  }
  catch(err){
    res.status(500).send("Somethings went wrong...");
  }
}


module.exports.loginUser=async function(req,res){
  try{
    const {email,password}=req.body;
    const user=await userModel.findOne({email});
    if(!user)return res.status(400).send("Email or password incorrect...");
    const isMatch=await bcrypt.compare(password,user.password);
    if (!isMatch) return res.status(400).send("Email or password incorrect...");
    

    let token=generateToken({email});

    res.cookie("token",token,{
      httpOnly:true,
      maxAge:30*24*60*60*1000,
    })
    res.status(201).send("Logged in successfully...");

  }
  catch(err){
    res.status(500).send('Somethings went wrong...');
  }
}


module.exports.logoutUser=async function(req,res){
  try{
      res.cookie("token","",{
        httpOnly:true,
      })
      res.status(201).send("Logged out successfully...");
  }
  catch(err){
    res.status(500).send("Somethings went wrong...");
  }
}



module.exports.getUserprofile=async function(req,res){
  try{
    res.send("Logged in ho aap...");
    console.log(req.user);
  }
  catch(err){
    res.status(500).send("somethings went wrong...");
  }
}



