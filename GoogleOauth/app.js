require('dotenv').config();



const expressSession=require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const express=require('express');
const app=express();
const path=require('path');
const PORT=process.env.PORT || 3000;

const connectDB=require('./config/mongooseConnection');
connectDB();

require('./config/googleStrategy');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());


// ✅ Session middleware first
app.use(
  expressSession({
    secret: process.env.EXPRESS_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// ✅ Then passport
app.use(passport.initialize());
app.use(passport.session());


const authRouter=require('./routes/auth');


app.use('/auth',authRouter);



app.listen(PORT,function(){
 console.log(`Server is running on port: http://localhost:${PORT}`);
})

