const express = require("express");
const { getUsersForSidebar, getUsersForTable, deleteUserFromTable } = require("../controllers/user.controller.js");
const protectRoute = require("../middleware/protectRoute.js");

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/table", getUsersForTable);
router.delete("/table/:id", deleteUserFromTable)

module.exports =  router;