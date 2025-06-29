
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const { ensureAuth } = require('../middleware/auth');

router.get('/', homeController.getHome);
router.get('/dashboard', ensureAuth, homeController.getDashboard);

module.exports = router;
