const express = require("express");
const controller = require("./controllers");

const router = express.Router();

router.get("/autocomplete", controller.autocomplete);

router.get("/list", controller.list);

router.get("/", controller.get);

module.exports = router;
