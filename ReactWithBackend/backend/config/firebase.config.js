
const fbAdmin=require('firebase-admin');

const serviceCredentials=require('../e-commerce-41766-firebase-adminsdk-fbsvc-e7b9cf0048.json');

fbAdmin.initializeApp({
  credential:fbAdmin.credential.cert(serviceCredentials),
  storageBucket:"e-commerce.appspot.com"
});

module.exports=fbAdmin;


