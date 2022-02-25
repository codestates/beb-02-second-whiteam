const router = require("express").Router();
const controller = require("./../controllers");

// Get
router.get("/", controller.serveToken.get);

module.exports = router;
