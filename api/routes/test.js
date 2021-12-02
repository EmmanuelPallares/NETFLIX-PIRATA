const express = require("express");
const test = require("../controllers/test");

const router = express.Router();

router.get("/home", test.home);
router.post("/test", test.test);
module.exports = router;
