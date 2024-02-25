import { Recommendations } from "@/Constants/constant";
import Recommendation from "@/components/Recommendation";

export default function RecommendationsPage() {
  return (
    <main className="p-6 ">
      <h1 className="text-3xl font-bold mb-5">Recommendations</h1>
      <div className="grid grid-cols-3 gap-6">
        {Recommendations.map((recommendation) => {
          return <div key={recommendation.id}>
            <Recommendation {...recommendation}/>
          </div>;
        })}
      </div>
    </main>
  );
}
