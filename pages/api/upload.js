export default function handler(req, res) {
    // Handle GET requests
    if (req.method === "POST") {
      res.status(200).json({ message: "Hello from Next.js API!" });
    } else {
      // Handle other HTTP methods
      res.status(405).json({ error: "Method Not Allowed" });
    }
  }
  
// File Format type
  const express = require('express');
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');
const { v4: uuidv4 } = require('uuid');
const { parse } = require('csv-parse/sync');
const XLSX = require('xlsx');

const app = express();
const bucket = new Storage().bucket('grow-data-files-repo');

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'text/csv' || file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      cb(null, true);
    } else {
      cb(new Error('Please upload a CSV or Excel file.'));
    }
  },
});

app.post('/upload', upload.single('csvFile'), async (req, res) => {
  try {
    if (req.file) {
      const blob = bucket.file(req.file.originalname);
      const blobStream = blob.createWriteStream();

      blobStream.on('finish', async () => {
        if (req.file.mimetype === 'text/csv') {
          const csvData = req.file.buffer.toString();
          const data = parse(csvData, { columns: true });
          res.status(200).json({
            message: 'Success',
            data: data.slice(0, 10),
          });
        } else if (req.file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
          const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
          const sheetName = workbook.SheetNames[0];
          const sheetData = workbook.Sheets[sheetName];
          const csvData = XLSX.utils.sheet_to_csv(sheetData);
          const data = parse(csvData, { columns: true });
          res.status(200).json({
            message: 'Success',
            data: data.slice(0, 10),
          });
        }
      });

      blobStream.end(req.file.buffer);
    }
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});