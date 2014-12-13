var express = require('express');
var router = express.Router();
var controller = require('../controllers/user');
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/login', controller.login);
router.get('/comu', controller.comu);
module.exports = router;
