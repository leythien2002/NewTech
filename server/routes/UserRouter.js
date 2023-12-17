const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/refresh-token", userController.refreshToken)


module.exports = router;    
