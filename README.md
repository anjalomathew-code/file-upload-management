# File Upload & Management

**INTERN ID:** CITS1119
**FULL NAME:** Anjalo Mathew
**NO. OF WEEKS:** 4 WEEKS
**PROJECT NAME:** File Upload & Management
**PROJECT SCOPE:** Backend REST API for File Upload and Management

## Description

A complete File Upload & Management REST API built with Node.js, Express, MongoDB, and Multer featuring:

- Upload files (images, PDFs, documents)
- View all uploaded files
- Get single file details by ID
- Download files
- Update file details
- Delete files from server and database
- File type validation (jpeg, jpg, png, gif, pdf, doc, docx, txt)
- File size limit (5MB max)
- Unique filename generation using UUID

## Technologies Used

- Node.js
- Express.js
- MongoDB (Local)
- Mongoose
- Multer (File Upload)
- UUID
- dotenv

## API Endpoints

| Method | Endpoint                    | Description              |
| ------ | --------------------------- | ------------------------ |
| POST   | /api/files/upload           | Upload a file            |
| GET    | /api/files                  | Get all files            |
| GET    | /api/files/:id              | Get single file by ID    |
| GET    | /api/files/download/:id     | Download a file          |
| PUT    | /api/files/:id              | Update file details      |
| DELETE | /api/files/:id              | Delete a file            |

## How to Run

```
npm install
npm run dev
```
