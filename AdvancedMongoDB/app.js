
const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');

const userModel=require('./models/user');


app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));


const dummyData = [
  {
    name: 'Surya Pratap Singh',
    username: 'skpratap',
    email: 'surya.2201254cs@iiitbh.ac.in',
    password: '88888888',
    age: 22,
    isMarried: false
  },
  {
    name: 'Akash Kumar',
    username: 'akashkumar',
    email: 'akash.2201216cs@iiitbh.ac.in',
    password: '12345678',
    age: 21,
    isMarried: false
  },
  {
    name: 'Deepak Nishad',
    username: 'deepakn',
    email: 'deepak.2201232cs@iiitbh.ac.in',
    password: 'abcdef12',
    age: 23,
    isMarried: false
  },
  {
    name: 'Mahendra Kapoor Kol',
    username: 'mahendra',
    email: 'mahendra.2201221cs@iiitbh.ac.in',
    password: 'mah123456',
    age: 22,
    isMarried: false
  },
  {
    name: 'Aditya Raj',
    username: 'adityaraj',
    email: 'aditya.2201222cs@iiitbh.ac.in',
    password: 'rajpassword',
    age: 21,
    isMarried: true
  },
  {
    name: 'Kumar Ankit',
    username: 'ankitk',
    email: 'ankit.2201244cs@iiitbh.ac.in',
    password: 'ankitpass',
    age: 22,
    isMarried: false
  },
  {
    name: 'Vivek Gautam',
    username: 'vivekg',
    email: 'vivek.2201226cs@iiitbh.ac.in',
    password: 'vivek888',
    age: 21,
    isMarried: true
  },
  {
    name: 'Imam Hassnain Khan',
    username: 'imamkhan',
    email: 'imam.2201228cs@iiitbh.ac.in',
    password: 'imam1234',
    age: 22,
    isMarried: true
  },
  {
    name: 'Aakash Meena',
    username: 'aakashm',
    email: 'aakash.2201227cs@iiitbh.ac.in',
    password: 'meena2025',
    age: 23,
    isMarried: true
  },
  {
    name: 'Karan Sundariya',
    username: 'karans',
    email: 'karan.2201223cs@iiitbh.ac.in',
    password: 'karan@123',
    age: 22,
    isMarried: true
  },
  {
    name: 'Aman Chaudhary',
    username: 'amanc',
    email: 'aman.2201225cs@iiitbh.ac.in',
    password: 'amanpass',
    age: 21,
    isMarried: false
  },
  {
    name: 'Varshit Badera',
    username: 'varshitb',
    email: 'varshit.2201245cs@iiitbh.ac.in',
    password: 'varshit321',
    age: 22,
    isMarried: false
  },
  {
    name: 'Ravi Sharma',
    username: 'ravis',
    email: 'ravi.2201250cs@iiitbh.ac.in',
    password: 'ravi4567',
    age: 21,
    isMarried: true
  },
  {
    name: 'Priya Yadav',
    username: 'priyas',
    email: 'priya.2201251cs@iiitbh.ac.in',
    password: 'priya999',
    age: 19,
    isMarried: false
  },
  {
    name: 'Sakshi Verma',
    username: 'sakshiv',
    email: 'sakshi.2201252cs@iiitbh.ac.in',
    password: 'sakshi321',
    age: 21,
    isMarried: false
  }
];



app.get('/',function(req,res,next){
  res.send('Hey');
});



app.get('/createmany',async function(req,res,next){
  try{
    const insertManyData=await userModel.insertMany(dummyData);
    console.log("Insertion of data Successfully...");
    res.send(insertManyData);
  }
  catch(err){
    console.log("Insertion od data failed...");
    res.status(500).send(err);
  }
});


app.get('/deleteall', async function(req, res, next) {
  try {
    const result = await userModel.deleteMany({});
    console.log('All users deleted successfully...');
    res.send(result);
  } catch (err) {
    console.log('Delete all operation failed...');
    res.status(500).send(err);
  }
});




app.get('/usereq',async function(req,res,next){
  try{
    const users=await userModel.find({age: {$eq: 19}});
    console.log('eq operation successfully...');
    res.send(users);
  }
  catch(err){
    console.log("eq operation failed...");
    res.status(500).send(err);
  }
})

app.get('/userne',async function(req,res,next){
  try{
    const usersne=await userModel.find({age: {$ne: 21}});
    console.log('ne operation successfully...');
    res.send(usersne);
  }
  catch(err){
    console.log("ne operation failed...");
    res.status(500).send(err);
  }
})

app.get('/userlt',async function(req,res,next){
  try{
    const lessthanusers=await userModel.find({age: {$lt: 21}});
    console.log('lt operation successfully...');
    res.send(lessthanusers);
  }
  catch(err){
    console.log("lt operation failed...");
    res.status(500).send(err);
  }
})

app.get('/userlte',async function(req,res,next){
  try{
    const lessthanAndEqualusers=await userModel.find({age: {$lte: 21}});
    console.log('lte operation successfully...');
    res.send(lessthanAndEqualusers);
  }
  catch(err){
    console.log("lte operation failed...");
    res.status(500).send(err);
  }
})


app.get('/usergt',async function(req,res,next){
  try{
    const greaterthanusers=await userModel.find({age: {$gt: 21}});
    console.log('gt operation successfully...');
    res.send(greaterthanusers);
  }
  catch(err){
    console.log("gt operation failed...");
    res.status(500).send(err);
  }
})


app.get('/usergte',async function(req,res,next){
  try{
    const greaterthanAndEqualusers=await userModel.find({age: {$gte: 21}});
    console.log('gte operation successfully...');
    res.send(greaterthanAndEqualusers);
  }
  catch(err){
    console.log("gte operation failed...");
    res.status(500).send(err);
  }
})

app.get('/userin',async function(req,res,next){
  try{
    const inmesekoiusers=await userModel.find({age: {$in: [18,19,20]}});
    console.log('in operation successfully...');
    res.send(inmesekoiusers);
  }
  catch(err){
    console.log("in operation failed...");
    res.status(500).send(err);
  }
})

app.get('/usernin',async function(req,res,next){
  try{
    const notinmesekoiusers=await userModel.find({age: {$nin: [21,22,23]}});
    console.log('nin operation successfully...');
    res.send(notinmesekoiusers);
  }
  catch(err){
    console.log("nin operation failed...");
    res.status(500).send(err);
  }
})


app.get('/userexist',async function(req,res,next){
  try{
    const existusers=await userModel.find({isAdmin: {$exists: true}});
    console.log('exists operation successfully...');
    res.send(existusers);
  }
  catch(err){
    console.log("exists operation failed...");
    res.status(500).send(err);
  }
})

app.get('/userand',async function(req,res,next){
  try{
    const Andoperatorusers=await userModel.find({$and: [{isMarried:false},{age:{$gte :22}}]});
    console.log('And operation successfully...');
    res.send(Andoperatorusers);
  }
  catch(err){
    console.log("And operation failed...");
    res.status(500).send(err);
  }
})

app.get('/useror',async function(req,res,next){
  try{
    const Oroperatorusers=await userModel.find({$or: [{isMarried:false},{age:{$gte :22}}]});
    console.log('Or operation successfully...');
    res.send(Oroperatorusers);
  }
  catch(err){
    console.log("Or operation failed...");
    res.status(500).send(err);
  }
})

app.get('/userregex',async function(req,res,next){
  try{
    const regexusers=await userModel.find({name: {$regex: /^a.*r$/i }});
    console.log('regex operation successfully...');
    res.send(regexusers);
  }
  catch(err){
    console.log("regex operation failed...");
    res.status(500).send(err);
  }
})



app.listen(3000,function(req,res,next){
  console.log('Server running on port: http://localhost:3000');
});



