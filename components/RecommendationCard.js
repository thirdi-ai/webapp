import Image from "next/image";
import Card from "./Card";
import google from "@/assets/google.png";

export default function RecommendationCard({ title, desc, cpr, cr, roas }) {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Image src={google.src} alt="googleicon" width={20} height={20} />
            <p className="text-sm">Google Ads</p>
          </div>
            <button className="px-4 py-2 text-sm bg-black text-white rounded-full"> Apply</button>
        </div>
        <div>
          <h4 className="font-[600] text-lg mb-2">{title}</h4>
          <p className="text-sm text-black text-opacity-50">{desc}</p>
        </div>
        <div className="flex gap-2 text-xs">
          <div className="bg-green-400 bg-opacity-60 text-green-800 rounded-full px-3 py-1">
            CPR: {cpr + "%"}
          </div>
          <div className="bg-pink-400 bg-opacity-60 text-pink-800 rounded-full px-3 py-1">
            CR: {cr + "%"}
          </div>
          <div className="bg-purple-400 bg-opacity-60 text-purple-800 rounded-full px-3 py-1">
            ROAS: {roas + "%"}
          </div>
        </div>
      </div>
    </Card>
  );
}
