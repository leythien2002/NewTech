const express = require("express");
const router = express.Router();
const adminController = require("../controller/AdminController");
const { authMiddleWare,authAdminMiddleWare } = require("../middleware/authMiddleware");

router.post("/add",authMiddleWare, adminController.add);
router.put("/update/:id",authMiddleWare, adminController.update);
router.delete("/delete/:id", authMiddleWare, adminController.deleteUser);
router.get("/getAll", authMiddleWare, adminController.getAll);
router.get("/getUser/:id", authAdminMiddleWare, adminController.getDetailUser);
module.exports = router;    