import multer from "multer";
import { parse } from "csv-parse";
import fs from "fs";
import xlsx from "xlsx";

const upload = multer({ dest: "uploads/" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    upload.single("file")(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }

      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const filePath = req.file.path;

      // Check if file's mimetype is CSV/Excel
      if (
        req.file.mimetype !== "text/csv" &&
        req.file.mimetype !==
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" && // xlsx
        req.file.mimetype !== "application/vnd.ms-excel"
      ) {
        fs.unlinkSync(filePath); // Delete the file
        return res
          .status(400)
          .json({
            error: "The file uploaded should be either a CSV or an Excel file.",
          });
      }

      if (
        req.file.mimetype ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || // xlsx
        req.file.mimetype === "application/vnd.ms-excel" // xls
      ) {
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

        // Convert array of arrays to array of objects
        const headerRow = data[0]; // Assume the first row contains headers
        const objectsArray = data.slice(1).map((row) => {
          const obj = {};
          headerRow.forEach((header, index) => {
            obj[header] = row[index];
          });
          return obj;
        });

        return res.status(200).json(objectsArray.slice(0, 10));
      }

      const csvFileContent = fs.readFileSync(filePath, "utf-8");
      parse(csvFileContent, { columns: true }, (err, data) => {
        if (err) {
          res.status(500).json({ error: "Error parsing CSV file" });
        } else {
          // Return first 10 rows of CSV data
          res.status(200).json(data.slice(0, 10));
        }
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}
