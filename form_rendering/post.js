


const express=require('express');
const app=express();

app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({
  extended:true
}));

app.get('/',function(req,res){
  res.render("indexpost");
})

app.post('/check',function(req,res){
  console.log(req.body);
  res.send("Working...");
})

app.listen(3000);




