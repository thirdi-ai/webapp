export default function handler(req, res) {
    // Handle GET requests
    if (req.method === "POST") {
      res.status(200).json({ message: "Hello from Next.js API!" });
    } else {
      // Handle other HTTP methods
      res.status(405).json({ error: "Method Not Allowed" });
    }
  }
  