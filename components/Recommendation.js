import Image from "next/image";
import Card from "./Card";
import google from "@/assets/google.png";

export default function Recommendation({ title, desc }) {
  return (
    <Card>
      <div className="flex flex-col">
        <div>
          <div className="w-full mb-4">
            <div className="flex gap-2">
              <Image src={google.src} alt="googleicon" width={20} height={20} />
              <p className="text-sm">Google Ads</p>
            </div>
            <div></div>
          </div>
          <h4 className="font-bold text-base mb-2">{title}</h4>
          <p className="text-sm">{desc}</p>
        </div>
        <div>
          <button className="btn"> Apply</button>
        </div>
      </div>
    </Card>
  );
}
