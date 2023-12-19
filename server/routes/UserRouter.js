const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/refresh-token", userController.refreshToken)
router.get("/getUser/:id", userController.getDetailUser);


module.exports = router;    
