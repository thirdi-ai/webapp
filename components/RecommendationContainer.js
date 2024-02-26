import { Recommendations } from "@/Constants/constant";
import RecommendationCard from "./RecommendationCard";

export default function RecommendationContainer () {
    return (
      <div className="grid grid-cols-3 gap-6">
      {Recommendations.map((recommendation) => {
        return <div key={recommendation.id}>
          <RecommendationCard {...recommendation}/>
        </div>;
      })}
    </div>
    );
  };