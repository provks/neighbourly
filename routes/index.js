const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
const usersController = require('../controllers/users_controller');

console.log(`Router Index is loaded!`);

router.get('/', homeController.home);
router.get('/users', usersController.profile);

module.exports = router;