export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    res.status(200).json({ message: "Hello from Next.js API!" });
  } else {
    // Handle other HTTP methods
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
