const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const {
  uploadFile,
  getAllFiles,
  getFileById,
  downloadFile,
  deleteFile,
  updateFile
} = require('../controllers/fileController');

router.post('/upload', upload.single('file'), uploadFile);
router.get('/download/:id', downloadFile);
router.get('/:id', getFileById);
router.get('/', getAllFiles);
router.put('/:id', updateFile);
router.delete('/:id', deleteFile);

module.exports = router;