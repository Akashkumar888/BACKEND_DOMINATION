
require('dotenv');
const express=require('express');
const { func } = require('joi');
const path=require('path');
const app=express();
const bcrypt=require('bcrypt');
const { error } = require('console');
const PORT=process.env.PORT || 3000;
const jwt=require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());


app.get('/',function(req,res){
  res.send('Hello dost yah mai  aur ye mera dost chiku....');
})

// 🔐 BCRYPT – Password Hashing and Verification 
app.post('/encrypt1',async function(req,res){
   try{
   const salt=await bcrypt.genSalt(10);
   const encrypt=await bcrypt.hash('iloveyou',salt);
   res.send(encrypt);
   }
   catch(error){
   console.error("Encryption Error:", error);
   res.status(500).json({ error: 'Internal Server Error' });
   }
})


app.post('/encrypt2',async function(req,res){
  try{
    const {password}=req.body;
    if(!password)
    return res.status(400).json({ error: 'Password is required' });
  const saltRounds=await bcrypt.genSalt(10);
  const hashedPassword=await bcrypt.hash(password,saltRounds);
  res.json({hashedPassword});

  }
  catch(error){
  console.error("Encryption Error...",error);
  res.status(404).json({error:'Interval Server Error'})
  }
})


app.post('/checkpassword1',async function(req,res){
  try{
  const result=await bcrypt.compare("iloveyou",
    "$2b$10$ZAlJqKB2aP7cDv22DUAFFuLD0mNJ/9lAbEDUQagQCSurzUBn4dkjC"
  );
  res.send(result);
  }
  catch(error){
  console.error("Decryption Error:",error);
  res.status(500).json({ error: 'Internal Server Error' });
  }
})


app.post('/checkpassword2',async function(req,res){
  try{
  const {password,hashedPassword}=req.body;
  if (!password || !hashedPassword)
      return res.status(400).json({ error: 'Password and hashedPassword are required' });
    const result=await bcrypt.compare(password,hashedPassword);
    res.json({result});
  }
  catch(error){
    console.error("Decryption Error:",error);
    res.status(500).json({error:'Internal Server Error'});
  }
})

// 🔑 JWT – Token Creation and Decoding

app.get('/tokenmaker',function(req,res){
  try{
    const token =jwt.sign({ email:'test@test.com'},"huihui",{ expiresIn:'1h'});
    res.send(token);
  }
  catch(error){
    res.status(404).send(error);
  }
})

app.get('/datafetch',function(req,res){
  try{
    const data=jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE3NDk4MTg3MzB9.8sXgWWELJoTPT3cjc4iFHX1b37xmS3u-lhdmP_qU-ao" ,
    "huihui");
    res.send(data);
  }
  catch(error){
    res.status(404).send(error);
  }
})


// 🍪 COOKIE PARSER – Set, Read, Check Cookies

app.get('/setcookieParser',function(req,res){
  try{
  res.cookie("age","21",{
    maxAge: 3000,
    httpOnly:true,
    secure:true // for security follow https 
  });
  res.send('cookie set ho gayi hai...');
  }
  catch(error){
    res.status(404).send(error);
  }
})



app.get('/readcookieParser',function(req,res){
  try{
    res.send(req.cookies.age);
  }
  catch(error){
    res.status(404).send(error);
  }
})



app.get('/checkcookieParser',function(req,res){
  try{
  res.send(`Cookie value: ${req.cookies.age}`);
  }
  catch(error){
    res.status(404).send(error);
  }
})



app.listen(PORT,function(){
  console.log(`Server is running on: http://localhost:${PORT}`);
})

