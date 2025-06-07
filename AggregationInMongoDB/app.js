
const express=require('express');
const app=express();
const path=require('path');


app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'Public')));


const {userModel}=require('./models/user-model');
const {postModel}=require('./models/post-model');
const { title } = require('process');

app.post('/create',async function(req,res){
  const {name,age,email}=req.body;
  try{
    const createdUser=await userModel.create({name,age,email});
    res.send(createdUser);
    console.log('user created successfully...');
  }
  catch(err){
    res.status(500).send(err);
    console.log('crwation of user failed...');
  }
})



app.post('/create/post/:username',async function(req,res){
  
  try{
    const user=await userModel.findOne({name:req.params.username}); // yaha pr vahi name jo upper :username pr hai usi ke base pr find kr rahe hai user 

    if(!user)return res.status(400).send('User not found');
    const createdPost=await postModel.create({
      title:'Hello dosto yah mai hu aur ye meri dost Imam hai...',
      content:'yah mera fifth post hai...',
      author:user._id
      
    })
    res.send({user,createdPost});
    console.log('post creation successfully....');
  }
  catch(err){
    res.status(500).send(err);
    console.log('post creation failed...');
  }
})


//Method -1 for finding user

app.get('/test1',async function(req,res){
  try{
    const user=await userModel.find({name:'Akash'});
    res.send(user);
  }
  catch(err){
    res.status(400).send(err);
    console.log('finding user failed...');
  }
})

//Method -2 for finding user

app.get('/test1/:name',async function(req,res){
  try{
    const user=await userModel.find({name:req.params.name});
    res.send(user);
  }
  catch(err){
    res.status(400).send(err);
    console.log('finding user failed...');
  }
})

//Method -3 for finding user

app.get('/test3',async function(req,res){
  try{
    const user=await userModel.aggregate([
    {$match:{age:22}}
    ]);
    res.send(user);
  }
  catch(err){
    res.status(400).send(err);
    console.log('finding user failed...');
  }
})

//Method -4 for finding user

app.get('/test3/:age',async function(req,res){
  try{
    const user=await userModel.aggregate([
    {$match:{age: parseInt(req.params.age)}}
    ]);
    res.send(user);
  }
  catch(err){
    res.status(400).send(err);
    console.log('finding user failed...');
  }
})


app.get('/test4',async function(req,res){
  try{
    const user=await userModel.aggregate([
      { $group :
        {
        _id:'$age',
        users:{
          $push:'$name'
          // $push: "$$ROOT"  // 'users' will be an array of full user objects
        }
      }

     }
    ])
    res.send(user);
  }
  catch(err){
    res.status(500).send(err);
  }
})


app.get('/test5',async function(req,res){
  try{
    const posts=await postModel.find().populate('author');

    res.send(posts);
  }
  catch(err){
    res.status(400).send(err);
  }
})

app.get('/test6', async function(req, res) {
  try {
    const posts = await postModel.aggregate([
      {
        $lookup: {
          from: 'users',            // 👈 The name of the collection to join with (it should match the MongoDB **collection name**, NOT model name).
          localField: 'author',     // 👈 Field in the **postModel** documents (usually an ObjectId referring to the user).
          foreignField: '_id',      // 👈 Field in the **users** collection that matches `author` field.
          as: 'authordata'          // 👈 Output field name in result — will contain an array of matched user objects.
        }
      }
    ]);
    res.send(posts);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/test7',async function(req,res){
  try{
    const users=await userModel.aggregate([
      {
        $project:{
          name:1,
          // age:0, // jo nhi chahiye don't include it 
          email:1,
          fullname :'$name'
        }
      }
    ]);
    res.send(users);
  }
  catch(err){
    res.status(400).send(err);
  }
})


app.get("/update-tags", async function (req, res) {
  try {
    const users = await userModel.find();

    const tagSets = [
      ["node.js", "javascript"],
      ["cpp", "c"],
      ["java", "python"],
      ["html", "css"],
      ["mongodb", "express"]
    ];

    for (let i = 0; i < users.length && i < tagSets.length; i++) {
      await userModel.updateOne(
        { _id: users[i]._id },
        { 
          $set: { 
          tags: tagSets[i] 
        }
         }
      );
    }

    res.send("✅ Tags updated for each user.");
    console.log("✅ Each user updated with unique tags");
  }
   catch (err) {
    res.status(500).send(err);
    console.log("❌ Tag update failed");
  }
});




app.get('/test8',async function(req,res){
  try{
  const users=await userModel.aggregate([
    {
      $unwind:'$tags'
    }
  ]);
  res.send(users);
  }
  catch(err){
    res.status(400).send(err);
  }
})

//Question number -1
// find all the post authorised by user with the name Akash

app.get('/test9',async function(req,res){
  try{
    const posts=await postModel.aggregate([
    { $lookup:{
      from: 'users', // name of the referenced collection
      localField: 'author', // field in postModel
      foreignField: '_id',  // field in users collection
      as: 'authordata'  // output array
    }
  },
  {
    $unwind:'$authordata' // convert array to object
  },
  {
    $match:{
      'authordata.name' : 'Akash' // filter where author's name is Akash
    }
  }
    ])
    res.send(posts);
  }
  catch(err){
    res.status(400).send(err);
  }
})

// question -2
// get a list of posts with the author's name and email included in the result 
app.get('/test10',async function(req,res){
  try{
  const posts=await postModel.aggregate([
    {
      $lookup:{
        from:'users',
        localField:'author',
        foreignField:'_id',
        as:'authorInfo'
      }
    },
    {
      $unwind:'$authorInfo'
    },
    {
      $project:{
        title:1,
        content:1,
        'authorInfo.name':1,
        'authorInfo.email':1
      }
    }
  ])
  res.send(posts);
  }
  catch(err){
    res.status(400).send(err);
  }
})


app.get("/",function(req,res){
  res.send('Hello dost yah mai hu aur ye mera dost chiku...');
})
















app.listen(3000,function(){
  console.log('Server is running on Port: http://localhost:3000');
})
