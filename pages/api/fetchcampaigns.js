import db from "@/app/config/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log(req.body.brand_id);

      // Using parameterized query to safely include brand_id
      const checkCampaignQuery =
        "SELECT campaign_name, goal, status FROM campaign WHERE brand_id = ?";
      
      // Executing the query with brand_id as a parameter
      const [campaignLists] = await db.promise().query(checkCampaignQuery, req.body.brand_id);

      res.status(200).json({
        message: "Campaigns Fetched Successfully",
        campaign_list: campaignLists,
      });
    } catch (err) {
      res.status(400).json({ message: "Campaign List Fetch Failed. Error: " + err });
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
