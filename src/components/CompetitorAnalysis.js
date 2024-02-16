import React from "react";
import Card from "./Card";

const CompetitorAnalysis = () => {
  return (
    <Card>
      <div className="card-details">
        <p className="desc">Competitor Analysis</p>
        <h1 className="title">Top Referrers</h1>
      </div>
      <div className="grid gap-4">
        <div className="flex-center">
          <div>google.com</div>
          <div>3K</div>
        </div>
        <div className="flex-center">
          <div>Creatives</div>
          <div >1.2K</div>
        </div>
        <div className="flex-center">
          <div>Budget</div>
          <div>1.1K</div>
        </div>
      </div>
    </Card>
  );
};

export default CompetitorAnalysis;
