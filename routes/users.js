const router = require('express').Router()
const userController = require('../controllers/userController');
const bodyParser = require('body-parser');

router.post('/register', bodyParser.json({}), userController.register);
router.post('/login', bodyParser.json({}),userController.login);

module.exports = router;