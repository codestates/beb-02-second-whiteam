const express = require("express");
const router = express.Router();
// 보상토큰
const serveTokenRouter = require("./serveToken");

router.use("/servetoken", serveTokenRouter);

module.exports = router;
