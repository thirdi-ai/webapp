import Image from "next/image";
import Card from "./Card";

export default function ConnectorsCard({ imgUrl, name, desc }) {
  return (
      <Card>
        <div className="w-full h-full flex place-items-center relative gap-7 cursor-pointer">
          <div className="card-image bg-white-400 rounded-[12px] min-w-[68px] min-h-[66px] flex relative">
            <Image
              src={imgUrl}
              alt="csv file"
              fill
              className="object-contain p-1 mx-auto"
            />
          </div>
          <div className="card-text w-full flex flex-col gap-2">
            <span className="bg-yellow-300 rounded-full py-1 leading-[12px] px-2 text-[10px] max-w-max">
              Coming Soon
            </span>
            <h1 className="text-base text-black-400">{name}</h1>
            <p className="text-[12px] leading-[14.64px]  text-black-600 w-[340px]">
              {desc}
            </p>
            <div className="flex text-[12px] leading-[14.64px] font-[500] justify-end gap-8 w-full absolute -right-4 -bottom-4">
              <button className=" text-blue-400">
                View Documentation
              </button>
              <button className="rounded-full px-[13.7px] py-[6.85px] w-[106.29px]  bg-blue-400 text-white">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </Card>
  );
}
