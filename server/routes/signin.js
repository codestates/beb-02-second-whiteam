const router = require('express').Router();
const { signin } = require('../controllers/loginContoller');

router.post('/', signin.post);

module.exports = router;
