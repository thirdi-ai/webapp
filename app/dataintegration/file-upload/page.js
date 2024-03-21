"use client";
import { useState } from "react";
import Image from "next/image";
import asset11 from "@/assets/asset11.svg";
import { Connectors } from "@/Constants/constant";
import Card from "@/components/Card";
import ConnectorsCard from "@/components/ConnectorsCard";
import ModalComponent from "@/components/ModalComponent";

export default function FileUpload() {
  const [showModalComponent, setShowModalComponent] = useState(false);

  return (
    <main className="data-upload w-full flex flex-col z-30 p-[30px] pr-0 h-full">
      <div className="mr-[30px]">
        <span className="text-base text-grey-800 mb-1 font-[500]">
          22 Feb, 2024
        </span>
        <h1 className="text-3xl text-black-400 font-[500]">Integrations</h1>
        <div className="w-full min-h-[183px] relative mt-[40px] font-[500]">
          <Card>
            <div className="w-full cursor-pointer h-full flex place-items-center relative gap-7">
              <div className="card-image min-w-[101px] min-h-[97.84px] bg-white-400 relative flex rounded-[18px] ">
                <Image
                  src={asset11}
                  alt="csv file"
                  className="w-[60px] h-[60px] object-contain mx-auto"
                />
              </div>
              <div className="card-text w-full flex flex-col gap-2 relative">
                <h3 className="text-base text-black-400">CSV data connector</h3>
                <p className="text-[12px] leading-[14.64px] text-black-600 w-[260px]">
                  Maximize ROI across your campaigns by using a portfolio
                  strategy with a shared budget
                </p>
                <div className="flex-center w-full relative">
                  <p className="text-[12px] leading-[14.64px] text-grey-400 w-[380px]">
                    Recommended because you have campaigns that share a bid
                    strategy but have separate budgets
                  </p>
                  <button
                    className="btn w-[168px]"
                    onClick={() => {
                      setShowModalComponent(true);
                    }}
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
        {showModalComponent && (
          <ModalComponent
            onBtnClick={() => {
              setShowModalComponent(false);
            }}
          />
        )}
      </div>
      <div className="mt-8 mr-3">
        <h2 className="text-base text-black-400 font-semibold">Connectors</h2>
        <div className="flex flex-col gap-5 mt-9 h-[430px] pr-3 overflow-y-scroll custom-scrollbar-2">
          {Connectors.map((connector, index) => {
            return (
              <div key={index}>
                <ConnectorsCard {...connector} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
