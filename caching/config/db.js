
const mongoose=require('mongoose');

const dbConnect=()=>{
  mongoose.connect(process.env.MONGO_URI)
.then(function(){
  console.log('Database successfully connected...');
})
.catch(function(err){
  console.log('Database connection failed...');
  process.exit(1);
})
}   

module.exports=dbConnect;

