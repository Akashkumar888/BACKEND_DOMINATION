
const productModel=require('../models/product.model');

module.exports.createProduct=async(req,res,next)=>{
 try{
  const {name,description,seller}=req.body;
  if(!name || !description || !seller){
    return res.status(401).json({message:"All field are required"});
  }
  // req.files.forEach((file) => {
  // console.log(file);
  // });

  const images=req.files.map((file)=> file.publicUrl).filter((url)=>url?true:false);


  const product=await productModel.create({
  name,
  description,
  price,
  images,
  seller:req.user._id,
 });
 
 res.status(201).json({
  message:"product createdSuccessfully"
 })
 }
 catch(err){
  next(err);
 }
}

