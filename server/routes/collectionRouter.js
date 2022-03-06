const router = require('express').Router();
const { collection } = require('../controllers/collectionController');

router.get('/', collection.get);
router.post('/', collection.post);

module.exports = router;
