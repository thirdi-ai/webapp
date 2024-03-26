import db from "@/app/config/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { companyEmail, companyName, companyIndustry, companyDesc } =
        req.body;
      //   console.log("Data received:", req.body);

      const clientName = companyEmail.slice(0, 8);
      const checkQueryClientTable =
        "SELECT client_id FROM client WHERE client_name = ?";
      const [existingClient] = await db
        .promise()
        .query(checkQueryClientTable, [clientName]);

      let clientId;
      if (existingClient.length > 0) {
        clientId = existingClient[0].client_id;
      } else {
        const insertQueryClientTable =
          "INSERT INTO client (client_name) VALUES (?)";
        const [clientResult] = await db
          .promise()
          .query(insertQueryClientTable, [clientName]);
        clientId = clientResult.insertId;
      }

      const insertQueryBrandTable =
        "INSERT INTO brand (client_id, brand_name, email, industry, description) VALUES (?,?,?,?,?)";
      await db
        .promise()
        .query(insertQueryBrandTable, [
          clientId,
          companyName,
          companyEmail,
          companyIndustry,
          companyDesc,
        ]);
      const getBrandIdQuery = "SELECT brand_id FROM brand WHERE brand_name = ?";
      const brandId = await db.promise().query(getBrandIdQuery, [companyName]);
      res
        .status(200)
        .json({ message: "Company Details uploaded successfully", id: brandId });
    } catch (err) {
      res.status(400).json({ message: "Upload failed" });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};
