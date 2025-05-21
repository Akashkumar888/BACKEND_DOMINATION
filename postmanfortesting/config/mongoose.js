

const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testingdb")
.then(function(){
  console.log("Database connected successfully!");
})
.catch(function(err){
  console.log("Database connection failed:", err);
});

const db=mongoose.connection;

db.on('error',function(err){
  console.log(err);
});

db.on('open',function(){
  console.log("connected to the database...");
});

module.exports=db;


