require('dotenv').config();

const express=require('express');
const app=express();
const path=require('path');

const PORT=process.env.PORT || 3000;
const dbConnect=require('./config/db');


app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));




const apiRouter=require('./routes/apiRouter');
app.use('/api',apiRouter);


dbConnect();

app.listen(PORT,()=>{
  console.log(`Server is running on PORT: http://localhost:${PORT}`)
});


