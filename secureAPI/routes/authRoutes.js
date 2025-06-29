

const express=require('express');
const router=express.Router();

const {registerUser,loginUser,logoutUser,getUserprofile}=require('../controllers/authControllers');

const {protect}=require('../middleware/protect');

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/logout',logoutUser)
router.get('/profile',protect , getUserprofile)



module.exports=router;



