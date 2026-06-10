# File Upload & Management - Documentation

**INTERN ID:** CITS1119  **FULL NAME:** Anjalo Mathew  
**DOMAIN:** Backend Web Development  **DURATION:** 4 weeks  **COMPANY:** CODTECH IT SOLUTIONS

---

## Project Overview

A backend REST API for File Upload & Management built with Node.js, Express, MongoDB, and Multer.
Supports uploading, downloading, updating, and deleting files with type and size validation.

---

## Technologies Used

| Technology | Purpose                        |
| ---------- | ------------------------------ |
| Node.js    | Runtime environment            |
| Express.js | Web framework                  |
| MongoDB    | Database                       |
| Mongoose   | ODM for MongoDB                |
| Multer     | File upload handling           |
| UUID       | Unique filename generation     |
| dotenv     | Environment variables          |
| nodemon    | Development server             |

---

## Project Structure

```
file-upload-management/
├── config/
│   └── db.js                    # MongoDB connection
├── controllers/
│   └── fileController.js        # File CRUD logic
├── middleware/
│   └── uploadMiddleware.js      # Multer upload config
├── models/
│   └── File.js                  # File schema
├── routes/
│   └── fileRoutes.js            # File endpoints
├── uploads/                     # Uploaded files stored here
├── screenshots/                 # API testing screenshots
├── .env                         # Environment variables
├── .gitignore
├── package.json
├── server.js                    # Main entry point
├── README.md
└── DOCUMENTATION.md
```

---

## API Endpoints

| Method | Endpoint                | Description           | Body/Params              |
| ------ | ----------------------- | --------------------- | ------------------------ |
| POST   | /api/files/upload       | Upload a file         | form-data: file          |
| GET    | /api/files              | Get all files         | -                        |
| GET    | /api/files/:id          | Get single file       | params: id               |
| GET    | /api/files/download/:id | Download a file       | params: id               |
| PUT    | /api/files/:id          | Update file details   | body: uploadedBy         |
| DELETE | /api/files/:id          | Delete a file         | params: id               |

---

## Key Features

- **Multer Integration** - Handles multipart/form-data file uploads
- **UUID Filenames** - Every file gets a unique name to avoid conflicts
- **File Type Validation** - Only allows jpeg, jpg, png, gif, pdf, doc, docx, txt
- **File Size Limit** - Maximum 5MB per file
- **Disk Cleanup** - Deleting a file removes it from both database and disk
- **Static File Serving** - Uploaded files accessible via /uploads URL
