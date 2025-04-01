
const express=require('express');
const app=express();


const expressSession=require('express-session');
const flash=require('connect-flash');




app.use(expressSession({
 secret:"random stuff",
 resave:false,
 saveUninitialized:false
}));


app.use(flash());
// jo uper name rahega vahi yaha pr rahega ok 



app.get("/error",function(req,res,next){
let message=req.flash('Error hai yaha');
res.send(message);
})


app.get('/',function(req,res,next){
  req.flash("Error hai yaha","Inalid credentials...");
  res.redirect("/error");
})



app.listen(3000);

