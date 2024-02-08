const express = require('express');
const upload = require("../middlewares/fileupload");
const { downloadFile, sendfilename } = require('../controllers/file_controller');

const router = express.Router();
// uploading file 
router.post("/uploadFile", upload.single('file'), sendfilename);

// downloading file
router.get("/files/:filename", downloadFile);

module.exports = router;