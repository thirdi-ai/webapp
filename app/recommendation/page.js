import RecommendationContainer from "@/components/RecommendationContainer";
import Link from "next/link";

export default function RecommendationsPage({ searchParams }) {
  const recommendation = searchParams.showRecommendation;

  return (
    <main className="p-6">
      {recommendation ? (
        <>
          <h1 className="text-3xl font-bold mb-5">Recommendations</h1>
          <RecommendationContainer />
          <h1>hey</h1>
        </>
      ) : (
        <>
          <h1 className="text-lg">No Recommendations</h1>
          <Link href="/dataupload">
            <button className="btn">Upload Data</button>
          </Link>
        </>
      )}
    </main>
  );
}
