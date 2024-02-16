import React from "react";
import Card from "./Card";

const RecommendationCard = () => {
  return (
    <Card>
      <div className="card-details">
        <p className="desc">Recommendations</p>
        <h1 className="title">Optimize your compaign</h1>
      </div>
      <div className="grid gap-4">
        <div className="flex items-center">
          <div>Targeting</div>
          <div className="ml-auto">Optimize your campaign</div>
        </div>
        <div className="flex items-center">
          <div>Creatives</div>
          <div className="ml-auto">Use more engaging images</div>
        </div>
        <div className="flex items-center">
          <div>Budget</div>
          <div className="ml-auto">Increase ad spend for better reach</div>
        </div>
      </div>
    </Card>
  );
};

export default RecommendationCard;
