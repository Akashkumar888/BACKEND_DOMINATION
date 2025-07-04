require('dotenv').config();
const express=require('express');
const app=express();
const PORT=process.env.PORT || 3000;
const path=require('path');
const http=require('http');
const dbConnect=require('./config/db');

const socketIO=require('socket.io');

const server=http.createServer(app);

const io=socketIO(server);


// middleware
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


dbConnect();


const indexRouter=require('./routes/indexRouter');
app.get('/',indexRouter);


server.listen(PORT,()=>{
  console.log(`Server is running on PORT: http://localhost:${PORT}`);
});




