const express = require("express");
const router = express.Router();
const studentController = require("../controller/StudentController");
const { authAdminMiddleWare } = require("../middleware/authMiddleware");

router.put("/update/:id",authAdminMiddleWare, studentController.update);
router.get("/getUser/:id", authAdminMiddleWare, studentController.getDetailUser);
module.exports = router;    