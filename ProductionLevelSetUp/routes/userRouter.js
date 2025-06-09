
const express = require('express'); 
// Load Express module

const router = express.Router(); 
// Create a new mini-app/router to define routes

const {userController}=require('../controllers/userController');

const isLoggedIn=require('../middlewares/isLoggedIn');


router.get('/',isLoggedIn, userController);
// Define GET route at path "/", which will actually be /user because it's mounted as app.use('/user', userRouter);


module.exports = router; 
// Make this router usable in other files (like app.js)

