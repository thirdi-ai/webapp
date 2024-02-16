import React from 'react';
import CompaignDetails from "../CompaignDetails";
import RecommendationCard from "../RecommendationCard";
import AudienceSegmentationCard from "../AudienceSegmentationCard";
import CompetitorAnalysis from "../CompetitorAnalysis";

const Home = () => {
  return (
    <div>
      <div className="container p-6 flex flex-col gap-8">
        <CompaignDetails />
        <RecommendationCard />
        <AudienceSegmentationCard />
        <CompetitorAnalysis />
      </div>
    </div>
  )
}

export default Home
