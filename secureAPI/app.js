
require('dotenv').config();
const express=require('express');
const app=express();
const path=require('path');
const cookieParser=require('cookie-parser');
const PORT = process.env.PORT || 3000;

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());

const connectDB=require('./config/mongooseConnection');

connectDB();

// app.get('/',function(req,res){
//   res.send('Hello dosto yh mai hu aur ye mera dost chiku...');
// })

const authRoutes=require('./routes/authRoutes');

app.use("/api/auth",authRoutes);


app.listen(PORT,function(){
  console.log(`Server is running on PORT: http://localhost:${PORT}`);
})

