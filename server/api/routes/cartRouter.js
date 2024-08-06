const express = require('express');
const Carts = require("../models/Carts")
const router = express.Router();

// Get all Carts
const cartController = require('../controllers/cartControllers');

// Routers
router.get('/', cartController.getCartByEmail)

module.exports = router;