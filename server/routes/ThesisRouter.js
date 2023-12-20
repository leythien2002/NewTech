const express = require("express");
const multer = require('multer');
const router = express.Router();
const thesisController = require("../controller/ThesisController");
const { authThesisMiddleWare} = require("../middleware/authMiddleware");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/add", authThesisMiddleWare,thesisController.add);
router.put("/update/:id",authThesisMiddleWare, thesisController.update);    
router.delete("/delete/:id",authThesisMiddleWare, thesisController.deleteThesis);
router.get("/getAll", thesisController.getAll);
router.get("/get/:id",authThesisMiddleWare, thesisController.getDetailUser); 
router.post("/addfile", upload.single('file_pdf'), thesisController.uploadFile); 
router.get("/getfile/:id",authThesisMiddleWare, thesisController.getFileById); 

module.exports = router;        