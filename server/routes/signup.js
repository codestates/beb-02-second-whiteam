const router = require('express').Router();
const { signup } = require('../controllers/loginContoller');

router.post('/', signup.post);

module.exports = router;
