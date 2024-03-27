"use client";
import CompanyInfoForm from "@/components/HomePage/CompanyInfoForm";
import HomeOverview from "@/components/HomePage/HomeOverview";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
  // const [recommendationGenerated, setRecommendationGenerated] = useState(false);
  const searchQuery = useSearchParams();
  const recommendationGenerated =
    searchQuery.get("recommendationGenerated") || false;
  return (
    <main className="p-7">
      {recommendationGenerated ? (
        <div>
          <HomeOverview />
        </div>
      ) : (
        <>
          <h1 className="text-[62px] mb-6">Welcome!</h1>
          <div>
            <CompanyInfoForm />
          </div>
        </>
      )}
    </main>
  );
}
