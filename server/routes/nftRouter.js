const router = require('express').Router();
const { nft, transfer } = require('../controllers/nftController');

router.get('/', nft.get);
router.post('/', nft.post);
router.post('/transfer', transfer.post);

module.exports = router;
