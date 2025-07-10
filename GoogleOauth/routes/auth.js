
// yaha pr sare routes creates hote hai 

const express=require('express');
const router=express.Router();

const {googleOauth}=require('../controllers/authController');
const passport = require('passport');

router.get('/google',passport.authenticate("google",{scope: ["profile"] }));


// ✅ Step 2: Google redirects here after login
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    console.log('✅ Login Success:', req.user);
    // res.redirect('/');
    res.send(req.user);
  }
);



module.exports=router;


