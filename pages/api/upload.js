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
import { parse } from 'csv-parse';
import fs from 'fs';

const upload = multer({ dest: 'uploads/' });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    upload.single('file')(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const csvFilePath = req.file.path;
      const csvFileContent = fs.readFileSync(csvFilePath, 'utf-8');

      parse(csvFileContent, { columns: true }, (err, data) => {
        if (err) {
          res.status(500).json({ error: 'Error parsing CSV file' });
        } else {
          // Return first 10 rows of CSV data
          res.status(200).json(data.slice(0, 10));
        }
      });           
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};


