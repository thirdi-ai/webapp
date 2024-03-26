import db from "@/app/config/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("campaign details");
    try {
      const {
        campaignName,
        campaignTarget1,
        campaignTarget2,
        campaignGoal,
        campaignSecGoal,
        campaignTargetMetric,
        campaignKeyMetric,
        brandid,
      } = req.body;

      // const insertQueryTargetTable =
      //   "INSERT INTO campaign_targeting (target_level_1, target_level_2) VALUES (?,?)";
      // await db
      //   .promise()
      //   .query(insertQueryTargetTable, [campaignTarget1, campaignTarget2]);

      const insertQueryCampaignTable =
        "INSERT INTO campaign (campaign_name, goal, metric, metric_target, secondary_goal, brand_id) VALUES (?,?,?,?,?,?)";
      await db
        .promise()
        .query(insertQueryCampaignTable, [
          campaignName,
          campaignGoal,
          campaignKeyMetric,
          campaignTargetMetric,
          campaignSecGoal,
          brandid,
        ]);
      res
        .status(200)
        .json({ message: "Campaign Details uploaded successfully" });
    } catch (err) {
      res.status(400).json({ message: "Upload failed" + err });
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
