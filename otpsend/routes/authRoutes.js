const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/authController');

router.get('/', ctrl.showLogin);
router.post('/send-otp', ctrl.sendOTP);
router.post('/verify-otp', ctrl.verifyOTP);

module.exports = router;
