import React from "react";
import Card from "./Card";

const CompaignDetails = () => {
  return (
    <Card>
      <div className="card-details">
        <p className="desc">Compaign Performance</p>
        <h1 className="title">Acme Summer Sale</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium">Impressions</div>
          <div className="text-2xl font-bold">3,456</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            +12% last 30 days
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium">Clicks</div>
          <div className="text-2xl font-bold">1,234</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            -5% last 30 days
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CompaignDetails;
