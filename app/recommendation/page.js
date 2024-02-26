'use client';
// import { useRouter } from "next/navigation";
import RecommendationContainer from "@/components/RecommendationContainer";

export default function RecommendationsPage() {
  // const router = useRouter();
  // const generateRecommendations = String(router?.query?.generateRecommendations || "");

  return (
    <main className="p-6">
      <h1>No Recommendations</h1>
      <h1 className="text-3xl font-bold mb-5">Recommendations</h1>
      <RecommendationContainer />
    </main>
  );
}
