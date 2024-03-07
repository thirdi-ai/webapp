// export default function handler(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;
//     res.status(200).json({ message: "Hello from Next.js API!" });
//   } else {
//     // Handle other HTTP methods
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// }

// import multer from 'multer';
// import { NextApiRequest, NextApiResponse } from 'next';
// import { Storage } from '@google-cloud/storage';
// import csvParser from 'csv-parser';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now());
//   },
// });

// const upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     const allowedMimes = ['text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
//     if (allowedMimes.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error('Invalid file format. Only CSV and Excel files are allowed.'));
//     }
//   },
// });

// const handler = async (req, res) => {
//   if (req.method === 'POST') {
//     upload.single('csvFile')(req, res, async (err) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: err.message });
//       }

//       if (!req.file) {
//         return res.status(400).json({ error: 'No file uploaded.' });
//       }

//       const storage = new Storage();
//       const bucketName = 'your-bucket-name'; // Replace with your bucket name
//       const bucket = storage.bucket(bucketName);
//       const blob = bucket.file(req.file.originalname);
//       const blobStream = blob.createWriteStream();

//       blobStream.on('finish', () => {
//         res.status(200).json({ message: 'File uploaded successfully.' });
//       });

//       blobStream.write(req.file.buffer);
//       blobStream.end();
//     });
//   } else {
//     res.status(405).json({ error: 'Method not allowed.' });
//   }
// };

// export default handler;

// import multer from 'multer';
// import { NextApiRequest, NextApiResponse } from 'next';
// import { Storage } from '@google-cloud/storage';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now());
//   },
// });

// const upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     const allowedMimes = ['text/csv', 'application/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
//     if (allowedMimes.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error('Invalid file format. Only CSV and Excel files are allowed.'));
//     }
//   },
// });

// const handler = async (req, res) => {
//   if (req.method === 'POST') {
//     upload.single('csvFile')(req, res, async (err) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: err.message });
//       }

//       if (!req.file) {
//         return res.status(400).json({ error: 'No file uploaded.' });
//       }

//       const storage = new Storage();
//       const bucketName = 'grow-data-files-repo'; // Replace with your bucket name
//       const bucket = storage.bucket(bucketName);
//       const blob = bucket.file(req.file.originalname);
//       const blobStream = blob.createWriteStream();

//       blobStream.on('finish', () => {
//         console.log("file uploaded")
//         res.status(200).json({ message: 'File uploaded successfully.' });
//       });

//       blobStream.write(req.file.buffer);
//       blobStream.end();
//     });
//   } else {
//     res.status(405).json({ error: 'Method not allowed.' });
//   }
// };

// export default handler;

import multer from 'multer';
import XLSX from 'xlsx';

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype === 'text/csv' ||
      file.mimetype === 'application/vnd.ms-excel' ||
      file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
      cb(null, true);
    } else {
      cb(new Error('Please upload a CSV or Excel file.'));
    }
  },
}).single('file');

export default function handler(req, res) {
  if (req.method === 'POST') {
    upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded.' });
      }

      let rows = [];

      if (req.file.mimetype === 'text/csv') {
        req.file.buffer.toString('utf8').split(/\r?\n/).slice(0, 10).forEach((row, index) => {
          rows.push(row.split(','));
        });
      } else if (req.file.mimetype === 'application/vnd.ms-excel' || req.file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        const workbook = XLSX.read(req.file.buffer);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        for (let i = 0; i < Math.min(10, sheetData.length); i++) {
          rows.push(sheetData[i]);
        }
      }

      // Return success message
      res.status(200).json({ message: 'Success', data: rows });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}

