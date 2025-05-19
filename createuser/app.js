

const express=require('express');
const app=express();

const mongooseconnection=require('./config/mongoose');

// mongoose.connect('')
// .then(function(){
//   console.log("database connected successfully...");
// })
// .catch(function(err){
//   console.log("database connection error...")
// });

const userModel=require('./models/user');


app.get('/',function(req,res){
  res.send('Hey...');
});



app.get("/create",async function(req,res,next){
  let createdUser=await userModel.create({
    username:'Akash kumar',
    name:'ankit',
    password:'12345678',
    email:'asdfgh@gmail.com'
  })
  console.log("createdUser...");
  res.send(createdUser);
});


app.get('/read',async function(req,res,next) {
  try{
    const user=await userModel.findOne({
      username:'Akash kumar'
    });
    console.log("readed...");
    res.send(user);
  }
  catch(err){
    console.error("Error while reading user:", err);
    res.status(500).send(err);
  }
})


app.get('/readall',async function(req,res,next) {
  const users=await userModel.find();
  console.log("readedAll...");
  res.send(users);
})





app.listen(3000,function(){
  console.log("Server running on port: http://localhost:3000");
});




