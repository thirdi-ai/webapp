import Image from "next/image";
import Card from "./Card";
import google from "@/assets/google.png";

export default function RecommendationCard({ cardData }) {
  console.log(cardData?.table1[0]?.orig_assets);
  return (
    <Card>
      <div className="flex flex-col gap-4 relative">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Image src={google.src} alt="googleicon" width={20} height={20} />
            <p className="text-sm">Google Ads</p>
          </div>
          <button className="px-4 py-2 text-sm bg-black text-white rounded-full">
            Apply
          </button>
        </div>
        <p className="text-[10px]">ASSETID: {cardData?.table1[0]?.orig_assets}</p>
        <div className="flex gap-6">
          <div className=" flex flex-col gap-2">
            <span className="text-2xl">{cardData?.table2[0]?.metric_target}%</span>
            <p>{cardData?.table2[0]?.metric}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p>{cardData?.table1[0]?.orig_opt_ideas}</p>
            <p>{cardData?.table1[0]?.orig_rationale}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
