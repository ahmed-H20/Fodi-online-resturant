const express = require('express');
const Menu = require("../models/Menu");
const router = express.Router();

const menuControllers = require("../controllers/menuControllers");
// get all menu items
router.get('/', menuControllers.getAllMenuItems);
//Post a new menu item 
router.post('/', menuControllers.postMenuItem);
//delete menu item
router.delete('/:id', menuControllers.deleteMenuItem)
// get single menu item
router.get('/:id', menuControllers.singleMenuItem);
// update single menu item
router.patch('/:id', menuControllers.updateMenuItem)

module.exports = router;