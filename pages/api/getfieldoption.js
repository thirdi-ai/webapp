import db from "@/app/config/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const target1_query =
        "SELECT target_level1, id FROM campaign_targeting_l1_md";
      const target2_query = "SELECT target_level2, targeting_l1_id,id id FROM campaign_targeting_l2_md";
      const keymetric_query = 'SELECT key_metrics FROM campaign_goal_metrics_md';
      const campaigngoal1_query= "SELECT goal,id FROM campaign_goal_md";
      const campaigngoal2_query= "SELECT secondary_goal,id FROM campaign_sec_goal_md";
      const industry_query = "SELECT industry,id FROM brand_metadata";

      const [result1, result2, result3, result4, result5, result6] = await Promise.all([
        db.promise().query(target1_query),
        db.promise().query(target2_query),
        db.promise().query(keymetric_query),
        db.promise().query(campaigngoal1_query),
        db.promise().query(campaigngoal2_query),
        db.promise().query(industry_query),
      ]);
      
      const data = {
        table1: result1[0],
        table2: result2[0],
        table3: result3[0],
        table4: result4[0],
        table5: result5[0],
        table6: result6[0]
      };
    //   const [rows, fields] = await db.promise().query(target1_query);
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json({ message: "Fetch failed", error: err });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
