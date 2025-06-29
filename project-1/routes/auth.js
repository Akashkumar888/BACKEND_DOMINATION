const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authController');

// Local Auth
router.get('/register', (req, res) =>
  res.render('auth/register', {
    title: 'Register',
    user: req.user
  })
);

router.post('/register', authController.register);

router.get('/login', (req, res) =>
  res.render('auth/login', {
    title: 'Login',
    user: req.user
  })
);

router.post('/login', authController.login);

router.get('/logout', authController.logout);

// Email verification
router.get('/verify/:token', (req, res) =>
  res.render('verify', {
    title: 'Verify Email',
    user: req.user
  })
);

// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/login' }),
  (req, res) => res.redirect('/dashboard')
);

module.exports = router;

