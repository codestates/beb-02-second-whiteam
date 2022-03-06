const express = require('express');
const router = express.Router();
// 보상토큰
const serveTokenRouter = require('./serveToken');
const signinRouter = require('./signin');
const signupRouter = require('./signup');
const collectionRouter = require('./collectionRouter');
const nftRouter = require('./nftRouter');

router.use('/servetoken', serveTokenRouter);
router.use('/signin', signinRouter);
router.use('/signup', signupRouter);
router.use('/collection', collectionRouter);
router.use('/nft', nftRouter);

module.exports = router;
