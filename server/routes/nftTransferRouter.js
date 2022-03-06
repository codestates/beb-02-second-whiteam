const router = require('express').Router();
const { nftTransfer } = require('../controllers/nftController');

router.post('/', nftTransfer.post);

module.exports = router;
