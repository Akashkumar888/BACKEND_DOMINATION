

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
const user = require('./models/user');

// Middleware for req.body

app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/',function(req,res){
  res.send('Hey...');
});


app.post('/createuser', async function(req,res,next){
  let {name,username,email,password}=req.body;

  // userModel.create({
  //   name:name,
  //   username:username,
  //   email:email,
  //   password:password
  // })  jb dono taraf same ho niche likha hai vaise likh sakte ho



  try{
    var createduser=await userModel.create({
      name,
      username,
      email,
      password
    });
    console.log("user created successfully...");
    res.send(createduser);
  }
  catch(err){
    console.log("creation failed...");
    res.status(500).send(err);
  }
});


app.get('/readuser',async function(req,res,next){
  try{
    var readuser=await userModel.find({});// all user read ho jayega 
    console.log("read Successfully...");
    res.send(readuser);
  }
  catch(err){
    console.log("read failed...");
    res.status(500).send(err);
  }
})


app.get('/readOne/:username',async function(req,res,next){
  try{
    var readOneusername=await userModel.findOne({username:req.params.username});
    console.log("readOne-user Successfully...");
    res.send(readOneusername);
  }
  catch(err){
    console.log("readOne-username error...");
    res.status(500).send(err);
  }
});

app.get('/update/:username',async function(req,res,next){
  var {name,username,email}=req.body;
try{
  var updateuser=await userModel.findOneAndUpdate({username:req.params.username},
    {name,username,email},
    {new:true}
  );
  console.log("updation Successfully...");
  res.send(updateuser);
}
catch(err){
  console.log("updation failed...");
  res.status(500).send(err);
}
})

app.get('/delete/:username',async function(req,res,next){
  try{
    var deleteuser=await userModel.findOneAndDelete({username:req.params.username});
    console.log("deletion Successfully...");
    res.send(deleteuser);
  }
  catch(err){
    console.log('deletion failed...');
    res.status(500).send(err);
  }
})


app.listen(3000,function(){
  console.log('Server running on port: http://localhost:3000');
});




