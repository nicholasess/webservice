var express = require('express');
var router = express.Router();
var controller = require('../controllers/user');

router.post('/login', controller.login);

module.exports = router;
