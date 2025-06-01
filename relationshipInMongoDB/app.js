

// Method-1: Create user with embedded post schema
// (Handled inside user-model.js under embedded schema example - see below)

// const express=require('express');
// const app=express();
// const mongoose=require('mongoose');

// const path=require('path');
// const Joi=require('joi');

// const {userModel}=require('./models/user-model');


// app.set('view engine','ejs');
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,'public')));


// app.get('/',function(req,res){
//   res.send('Hii...');
// })


// app.post('/create',async function(req,res){
//   const {username,email,password}=req.body;
//   try{
//     const createduser=await userModel.create({username,email,password});
//     res.send(createduser);
//     console.log('User creation successfully...');
//   }
//   catch(err){
//     res.status(500).send(err);
//     console.log('Creation of user failed...');
//   }
// })


// app.post('/create/post/:username',async function(req,res){
//  try{
//    const userfind=await userModel.findOne({username: req.params.username});
//    userfind.posts.push({content:'Hello dosto yah mera tisra post hai...'});
//    await userfind.save();
//    res.send(userfind);
//    console.log('user find successfully...');
//  }
//  catch(err){
//   console.log("find user failed....");
//   res.status(500).send(err);
//  }
// });














// app.listen(3000,function(){
//   console.log('Server is running on port: http://localhost:3000');
// })



// referencing code here 



const express=require('express');
const app=express();
const mongoose=require('mongoose');

const path=require('path');
const Joi=require('joi');

const {userModel}=require('./models/user-model');
const {postModel}=require('./models/post-model');


app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.get('/',function(req,res){
  res.send('Hii...');
})


app.post('/create',async function(req,res){
  const {username,email,password}=req.body;
  try{
    const createduser=await userModel.create({username,email,password});
    res.send(createduser);
    console.log('User creation successfully...');
  }
  catch(err){
    res.status(500).send(err);
    console.log('Creation of user failed...');
  }
})

app.post('/create/post/:username',async function(req,res){
  try{
    const user=await userModel.findOne({username: req.params.username});
    if (!user) return res.status(404).send('User not found.');

   const createdPost=await postModel.create({
      content:'Hello dosto yah mai hu aur ye mera dost chiku hai...',
      user:user._id
    });
    user.posts.push(createdPost._id);
    await user.save();
    res.send({user,createdPost});

    console.log('find User successfully...');
  }
  catch(err){
    res.status(500).send(err);
    console.log('find user failed...');
  }
})


app.get('/posts',async function(req,res){

try{
  // const posts=await postModel.find(); // finding all post here 
  const posts=await postModel.find().populate('user'); // populate user data 
  res.send(posts);
}
catch(err){
  res.status(500).send(err);
  console.log("finding posts is failed...");
}
});


app.get('/users',async function(req,res){

try{
  // const users=await userModel.find(); // finding all user here 
  const users=await userModel.find().populate('posts'); // populate post data 
  res.send(users);
}
catch(err){
  res.status(500).send(err);
  console.log("finding users is failed...");
}
});






app.listen(3000,function(){
  console.log('Server is running on port: http://localhost:3000');
})



