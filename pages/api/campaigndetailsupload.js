import db from "@/app/config/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("campaign details");
    try {
      const {
        campaignName,
        targetPairs,
        campaignGoal,
        campaignSecGoal,
        campaignTargetMetric,
        campaignKeyMetric,
        brandid,
      } = req.body;

      // Fetch target_level1 value from campaign_targeting_l1_md
      const [targetValue] = await db.promise().query(
        "SELECT target_level1 FROM campaign_targeting_l1_md WHERE id = ?",
        [targetPairs[0].target1]
      );
      const targetValue1 = targetValue[0].target_level1;

      // Fetch target_level2 value from campaign_targeting_l2_md
      const [target2Value] = await db.promise().query(
        "SELECT target_level2 FROM campaign_targeting_l2_md WHERE id = ?",
        [targetPairs[0].target2]
      );
      const targetValue2 = target2Value[0].target_level2;

      // Insert campaign details into the campaign table
      const insertQueryCampaignTable =
        "INSERT INTO campaign (campaign_name, goal, metric, metric_target,  secondary_goal, brand_id) VALUES (?,?,?,?,?,?)";
      await db.promise().query(insertQueryCampaignTable, [
        campaignName,
        campaignGoal,
        campaignKeyMetric,
        campaignTargetMetric,
        campaignSecGoal,
        brandid,
      ]);

      // Retrieve the campaign ID
      const [campaignIdRows] = await db.promise().query(
        "SELECT campaign_id FROM campaign WHERE brand_id = ?",
        [brandid]
      );
      const campaignId = campaignIdRows[0].campaign_id;

      // Insert target details into the campaign_targeting table
      const campaignTargetId = Math.floor(100000 + Math.random() * 900000);
      const insertQueryTargetTable =
        "INSERT INTO campaign_targeting (campaign_target_id, campaign_id, target_level1, target_level2) VALUES (?,?,?,?)";
      await db.promise().query(insertQueryTargetTable, [
        campaignTargetId,
        campaignId,
        targetValue1,
        targetValue2,
      ]);

      res.status(200).json({ message: "Campaign Details uploaded successfully", campaign_id : campaignId});
    } catch (err) {
      console.error("Error uploading campaign details:", err);
      res.status(400).json({ message: "Upload failed: " + err.message });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
      externalResolver: true,
    },
  },
};
