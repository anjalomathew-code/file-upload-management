const File = require('../models/File');
const fs = require('fs');
const path = require('path');

// @desc   Upload a file
// @route  POST /api/files/upload
const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const file = new File({
      originalName: req.file.originalname,
      fileName: req.file.filename,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
      uploadedBy: req.body.uploadedBy || 'anonymous'
    });

    const savedFile = await file.save();
    res.status(201).json({
      message: 'File uploaded successfully',
      file: savedFile
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Get all files
// @route  GET /api/files
const getAllFiles = async (req, res) => {
  try {
    const files = await File.find({});
    res.json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Get single file by ID
// @route  GET /api/files/:id
const getFileById = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: 'File not found' });
    res.json(file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Download a file
// @route  GET /api/files/download/:id
const downloadFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: 'File not found' });

    const filePath = path.join(__dirname, '..', file.filePath);
    res.download(filePath, file.originalName);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Delete a file
// @route  DELETE /api/files/:id
const deleteFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: 'File not found' });

    // Delete file from disk
    const filePath = path.join(__dirname, '..', file.filePath);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await File.findByIdAndDelete(req.params.id);
    res.json({ message: 'File deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Update file details
// @route  PUT /api/files/:id
const updateFile = async (req, res) => {
  try {
    const file = await File.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!file) return res.status(404).json({ message: 'File not found' });
    res.json({ message: 'File updated successfully', file });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { uploadFile, getAllFiles, getFileById, downloadFile, deleteFile, updateFile };
