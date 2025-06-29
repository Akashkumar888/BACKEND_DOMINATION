require('dotenv').config(); // ✅ Load .env values into process.env

const express=require('express');
const app=express();

const path=require('path');
const redis=require('redis');

const PORT=process.env.PORT || 3000;

const dbConnect=require('./config/db');

const userModel=require('./models/userModel');


app.set('view engine','ejs');
app.use(express.json());// ✅ Required to parse JSON body
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));




  const client = redis.createClient({
     username: 'default',
     password: process.env.CLIENT_PASSWORD,
     socket: {
         host: process.env.CLIENT_HOST,
         port: Number(process.env.CLIENT_PORT)
// ✅ 2. port: process.env.CLIENT_PORT in Redis client
// This is used in Redis client's socket.port, which expects a number explicitly:
// Redis does NOT automatically convert strings to numbers like Express does.
    }
 });

client.on('error', (err) => {
    console.log('❌ Redis Client Error:', err);
  });

  client.on('connect', () => {
    console.log('✅ Redis client connected');
  });

 // Connect redis
client.connect();


// Connect MongoDB
dbConnect();
app.get('/',function(req,res){
  res.send('Hello dost yh mai hu aur ye mera dost chiku...');
})


app.post('/create',async function(req,res){
  const {name,email}=req.body;
  try{
  const UserCreated=await userModel.create(
    {
      name:name,
      email:email
    }
  )
  res.send(UserCreated);
  }
  catch(err){
    console.log('Error',err);
    res.status(404).send('Bad gateway');
  }
})

app.get('/users/:id',async function(req,res){
  try{
  const key=`user:profile:${req.params.id}`;
   // ✅ Try fetching from Redis first
   const cachedUser=await client.get(key);
   
   if(cachedUser){
    // console.log(`Data cached hai: ${cachedUser}`);
    //  // ✅ Must return to stop further execution
    // return res.send(JSON.parse(cachedUser));  // Return from cache
    return res.send('Data cached hai:');
   }
  

  const user=await userModel.findOne({_id : req.params.id});
  if (!user) return res.status(404).send('User not found.');

//   // ✅ Cache user in Redis as a string
//   await client.set(key,JSON.stringify(user),
//   {
//     EX:3600 // Cache for 1 hour
//   }
// );


//  // ✅ Cache user in Redis as a string
//  await client.setEx(key,5,JSON.stringify(user)); // expires in 10 seconds

if(key) await client.del(key); // delete data from cache memory 

  res.send(user);
  }
  catch(err){
   console.log('Error',err);
   res.status(404).send('Not find User...');
  }
});


app.listen(PORT,()=>{
  console.log(`Server is running on: http://localhost:${PORT}`)
});


// Here, even if PORT is a string ("3000"), app.listen() automatically converts it to a number internally.
// So both "3000" and 3000 work fine.

