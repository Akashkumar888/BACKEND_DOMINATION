
const multer=require('multer');

const fbAdmin=require('./firebase.config');
const FirebaseStorage=require('multer-firebase-storage');
const serviceCredentials=require('../e-commerce-41766-firebase-adminsdk-fbsvc-e7b9cf0048.json');


const storage=FirebaseStorage({
  bucketName:"e-commerce.appspot.com",
  credentials:fbAdmin.credential.cert(serviceCredentials),
  unique:true,
  public:true,
})

const upload=multer({
  storage:storage
});

module.exports=upload;

