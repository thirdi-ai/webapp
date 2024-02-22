import CompetitorAnalysisCard from "@/components/CompaignDetailsCard";
import RecommendationCard from "@/components/RecommendationCard";
import CompaignDetailsCard from "@/components/CompaignDetailsCard";
import AudienceSegmentationCard from "@/components/AudienceSegmentationCard";

export default function HomePage() {
  return (
    <main>
      <div className="container p-6 flex flex-col gap-8">
        <CompaignDetailsCard />
        <RecommendationCard />
        <AudienceSegmentationCard />
        <CompetitorAnalysisCard />
      </div>
    </main>
  );
}
