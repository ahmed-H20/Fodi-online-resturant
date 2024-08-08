const express = require('express');
const Menu = require("../models/Menu");
const router = express.Router();

const menuControllers = require("../controllers/menuControllers");
// get all menu items
router.get('/', menuControllers.getAllMenuItems);
//Post a new menu item 
router.post('/', menuControllers.postMenuItem);

module.exports = router;