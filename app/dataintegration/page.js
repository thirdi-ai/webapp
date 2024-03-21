"use client";
import Card from "@/components/Card";
import Link from "next/link";
import { useRef } from "react";

export default function DataIntegration() {
  const refCompaignName = useRef();
  const refTargetingDetails = useRef();
  const refCompaignGoal = useRef();
  const refKeyMetric = useRef();
  const refTargetMetric = useRef();
  return (
    <main className="w-full p-[30px]">
      <h1 className="text-3xl mb-6">Upload Compaign Data</h1>
      <div className="w-[560px] mx-auto">
        <Card>
          <form className="text-base flex flex-col gap-6">
            <div className="flex-center">
              <label id="compaign-name">Compaign Name</label>
              <input
                type="text"
                name="compaign-name"
                id="compaign-name"
                placeholder="Write your compaign name"
                className="pl-2 pr-4 py-2 border border-grey text-sm "
                required
              />
            </div>
            <div className="flex-center">
              <label id="target">Targeting Details</label>
              <select name="target" id="target" className="text-sm px-4 py-2 " required>
                <option value="default">Select Option</option>
              </select>
            </div>
            <div className="flex-center">
              <label id="goal">Compaign Goal</label>
              <select name="goal" id="goal" className="text-sm  px-4 py-2 " required>
                <option value="default">Select Option</option>
              </select>
            </div>
            <div className="flex-center">
              <label id="metric">Key Metric</label>
              <select name="metric" id="metric" className="text-sm px-4 py-2 " required>
                <option value="default">Select Option</option>
              </select>
            </div>
            <div className="flex-center">
              <label id="metric">Target Metric</label>
              <input
                type="text"
                name="compaign-name"
                id="compaign-name"
                placeholder="Write your target metric"
                className="pl-2 pr-4 py-2 border border-grey text-sm"
                required
              />
            </div>
            <Link href="/dataintegration/file-upload">
              <button type="submit" className="btn w-full">Next</button>
            </Link>
          </form>
        </Card>
      </div>
    </main>
  );
}
