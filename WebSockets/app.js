require('dotenv').config();

const express=require('express');
const path = require('path');
const app=express();

const socketIO=require('socket.io');

socketIO();

const PORT=process.env.PORT || 3000;

const dbConnect=require('./config/db');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

dbConnect();


app.get('/',function(req,res){
  res.send('Hello dosto yh mai hu aur ye mera dost chiku...');
})



app.listen(PORT,()=>{
  console.log(`Server is running on Port: http://localhost:${PORT}`);
})


