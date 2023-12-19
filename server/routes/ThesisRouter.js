const express = require("express");
const router = express.Router();
const thesisController = require("../controller/ThesisController");
const { authMiddleWare,authAdminMiddleWare } = require("../middleware/authMiddleware");

router.post("/add", thesisController.add);
router.put("/update/:id", thesisController.update);
router.delete("/delete/:id", thesisController.deleteThesis);
router.get("/getAll", thesisController.getAll);
router.get("/get/:id", thesisController.getDetailUser); 
module.exports = router;        