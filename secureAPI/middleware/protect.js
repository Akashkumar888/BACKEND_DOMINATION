
const jwt=require('jsonwebtoken');
const userModel = require('../models/userModel');

module.exports.protect=async function(req,res,next){
 if(req.cookies.token){
  try{
   const data=jwt.verify(req.cookies.token,process.env.JWT_SECRET);
   const user=await userModel.findOne({email:data.email}).select("-password");
   req.user=user;
   next();
  }
  catch(err){
  res.status(500).send("Not Authorized...");
  }
 }
 else{
 res.status(500).send("Not Authorised,you don't have permission to access ...");
 }
}

