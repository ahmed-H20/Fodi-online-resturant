const express = require('express');
const Carts = require("../models/Carts")
const router = express.Router();

// Get all Carts
const cartController = require('../controllers/cartControllers');

// Routers
router.get('/', cartController.getCartByEmail);
router.post('/', cartController.addToCart);
router.delete('/:id', cartController.deleteCart);
router.put('/:id', cartController.updateCart);
router.get('/:id', cartController.getSingleCart);
router.put('/:id', cartController.updateQuantity);

module.exports = router;