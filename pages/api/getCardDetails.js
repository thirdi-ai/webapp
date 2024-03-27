import db from "@/app/config/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const getFromRecomSummaryQuery =
        "SELECT orig_opt_ideas,orig_rationale, orig_assets FROM recommendation_summary";
      const getFromCampaignTable =
        "SELECT campaign_name, metric, metric_target FROM campaign";
      const [result1, result2] = await Promise.all([
        db.promise().query(getFromRecomSummaryQuery),
        db.promise().query(getFromCampaignTable),
      ]);
      const data = {
        table1: result1[0],
        table2: result2[0],
      };

      res.status(200).json(data);
    } catch (err) {
      res.status(400).json({ message: "Fetch failed", error: err });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
