

require('dotenv').config();
// isko sabse upper rakho hamesha

const express=require('express');
const app=express();
const path=require('path');

console.log(process.env.EXPRESS_KEY);

const PORT=process.env.PORT || 3000;

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


const indexRouter=require('./routes/indexRouter');
const userRouter=require('./routes/userRouter');
const db=require('./config/mongooseConnection');
const config=require('config');


app.use('/',indexRouter);
app.use('/user',userRouter);


// // start server
// app.listen(PORT,function(){
//   console.log(`Server is running on: http://localhost:${PORT}`);
// });





app.listen(config.get('PORT'));

