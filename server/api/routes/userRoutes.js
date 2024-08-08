const express = require('express')
const router = express.Router();

const userController = require("../controllers/userController");
const verifyToken = require("../middleware/verifyToken")

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.delete('/', userController.deleteUser);
router.get('/admin/:email', userController.getAdmin);
router.patch('/admin/:id', userController.makeAdmin);

module.exports = router;