const express = require("express");
const { getMessages, sendMessage } = require("../controllers/message.controller.js");
const protectRoute = require("../middleware/protectRoute.js");

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

module.exports =  router;