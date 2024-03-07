export default function handler(req, res) {
  if (req.method === "POST") {
    // // Check if a file was uploaded
    // if (!req.body.file) {
    //   return res.status(400).json({ error: "No file uploaded" });
    // }

    // Process the file data
    // const fileData = req.body.file;

    // Perform actions with the file data
    // For example, you can save the file to disk, process it, etc.

    // Send a response indicating successful file upload
    res.status(200).json({ message: "File uploaded successfully"+ req.body});
  } else {
    // Handle other HTTP methods
    res.status(405).json({ error: "Method Not Allowed" });
  }
}


