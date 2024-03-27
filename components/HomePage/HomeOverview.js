"use client";
import { useEffect, useState } from "react";
import RecommendationContainer from "../RecommendationContainer";

export default function HomeOverview() {
  const [cardData, setCardData] = useState();
  useEffect(() => {
    fetchCardData();
  }, []);
  const fetchCardData = async () => {
    const response = await fetch("/api/getCardDetails", {
      method: "GET",
    });
    const data = await response.json();
    // console.log(data);
    setCardData(data);
  };

  return (
    <main className="flex flex-col gap-6">
      <div className=" flex flex-col gap-2">
        <p>Campaign Name</p>
        <div className="py-3 px-6 border-grey border inline max-w-[160px]">
          <p>{cardData?.table2[0]?.campaign_name}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>Overview</p>
        <div className="flex gap-6">
          <div className="py-3 px-6 border-grey border inline-block">
            Key Metric
          </div>
          <div className="py-3 px-6 border-grey border inline-block">
            2nd Key Metric
          </div>
        </div>
      </div>
      <div>
        <p className="mb-4 ">Recommendations</p>
        <RecommendationContainer data={cardData} />
      </div>
    </main>
  );
}
