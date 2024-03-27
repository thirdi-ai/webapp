import RecommendationCard from "./RecommendationCard";

export default function RecommendationContainer({ data }) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <RecommendationCard cardData = {data} />
      <RecommendationCard cardData = {data} />
      <RecommendationCard cardData = {data} />
      <RecommendationCard cardData = {data} />
    </div>
  );
}
