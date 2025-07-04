

const express=require('express');
const router=express.Router();

const userModel=require('../models/userModels');

// retrive all users 
router.get('/users',async function(req,res){
  try{
    const users=await userModel.find();
    res.json(users);
  }
  catch(err){
    res.status(500).json({success:false ,message:'Internal Server Error'});
  }
});

//  Creates a new user 
router.post('/users',async function(req,res){
  const {name,username}=req.body;
  try{
    const user=await userModel.create({
      name:name,
      username:username
    });
    res.status(201).json(user); // for POST success
  }
  catch(err){
     res.status(500).json({success:false ,message:'Internal Server Error'});
  }
});

//get one user by ID
router.get('/users/:id',async function(req,res){
  try{
    // const user=await userModel.findOne({_id:req.params.id});
  const user=await userModel.findById(req.params.id);
  if(!user)return res.status(404).json({ success: false, message: 'User not found' });
  res.status(200).json(user);
  }
  catch(err){
  res.status(500).json({success:false ,message:'Internal Server Error'});
  }
});


// update a user
router.put('/users/:id',async function(req,res){
  try{
//     const updatedUser = await userModel.findByIdAndUpdate(
//   req.params.id,
//   { name: req.body.name },
//   { new: true }
// );

  const updatedUser=await userModel.findOneAndUpdate(
    {
      _id:req.params.id
    },
    {
      name:req.body.name
    },
    {
      new:true
    }
  );
  res.status(200).json(updatedUser);
  }
  catch(err){
  res.status(500).json({success:false ,message:'Internal Server Error'});
  }

});

//delete a user
router.delete('/users/:id',async function(req,res){
  try{
   const deletedUser=await userModel.deleteOne(
    {
      _id:req.params.id
    }
   );
   if (deletedUser.deletedCount === 0) {
  return res.status(404).json({ success: false, message: 'User not found' });
  }
  res.status(200).json({ success: true, message: 'User deleted successfully' });
  }
  catch(err){
    res.status(500).json({success:false ,message:'Internal Server Error'});
  }
});




module.exports=router;


