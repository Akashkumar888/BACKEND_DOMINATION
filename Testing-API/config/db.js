
const mongoose=require('mongoose');

const dbConnect= async()=>{
try{
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Database connection Successfully...');
}
catch(err){
console.log('Database connection failed...');
process.exit(1);
}
};

module.exports=dbConnect;

