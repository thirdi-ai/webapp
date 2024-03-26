"use client";
import Card from "@/components/Card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";

export default function CampaignPage() {
  const [target1FieldOptions, setTarget1FieldOptions] = useState([]);
  const [target2FieldOptions, setTarget2FieldOptions] = useState([]);
  const [keyMetricsOptions, setKeyMetricsOptions] = useState([]);
  const [campaignGoal1Options, setcampaignGoal1Options] = useState([]);
  const [campaignGoal2Options, setcampaignGoal2Options] = useState([]);
  // const [target1ValueId, setTarget1ValueId] = useState(null);
  const [showTarget2, setShowTarget2] = useState(false);
  const refCampaignName = useRef();
  const refTargetingDetails1 = useRef();
  const refTargetingDetails2 = useRef();
  const refCampaignGoal = useRef();
  const refCampaignKeyMetric = useRef();
  const refCampaignSecGoal = useRef();
  const refCampaignTargetMetric = useRef();
const searchParams = useSearchParams();
const brandid = searchParams.get('brandId')

  useEffect(() => {
    fetchFieldOptions();
  }, []);

  const fetchFieldOptions = async () => {
    try {
      const response = await fetch("/api/getfieldoption", {
        method: "GET",
      });
      const data = await response.json();
      setTarget1FieldOptions(data.table1);
      setTarget2FieldOptions(data.table2);
      setKeyMetricsOptions(data.table3);
      setcampaignGoal1Options(data.table4);
      setcampaignGoal2Options(data.table5);
    } catch (error) {
      console.log("Error uploading form:", error);
    }
  };

  const handleTarget1Change = (selectedOptions) => {
    // const selectedValueIds = selectedOptions.map((option) => option.id);

    // const target = target2FieldOptions.filter((option) =>
    //   selectedValueIds.includes(option.targeting_l1_id)
    // );
    // console.log(target);
    // setTarget1ValueId(selectedValueId);

    setShowTarget2(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      campaignName: refCampaignName.current.value,
      campaignTarget1: refTargetingDetails1.current.value,
      campaignTarget2: refTargetingDetails2.current.value,
      campaignGoal: refCampaignGoal.current.value,
      campaignSecGoal: refCampaignSecGoal.current.value,
      campaignKeyMetric: refCampaignKeyMetric.current.value,
      campaignTargetMetric: refCampaignTargetMetric.current.value,
      brandid : brandid
    };
    try {
      const response = await fetch("/api/campaigndetailsupload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error uploading campaign details:", error);
    }
  };

  return (
    <main className="w-full p-[30px]">
      <h1 className="text-3xl mb-6">Upload Compaign Data</h1>
      <div className="w-[560px] mx-auto">
        <Card>
          <form
            className="text-base flex flex-col gap-6"
            onSubmit={handleFormSubmit}
          >
            <div className="flex-center">
              <label id="compaign-name">Campaign Name</label>
              <input
                ref={refCampaignName}
                type="text"
                name="campaign-name"
                id="campaign-name"
                placeholder="Write your campaign name"
                className="pl-2 pr-4 py-2 border border-grey text-sm "
                required
              />
            </div>
            <div className="flex-center">
              <label id="target">Targeting Details 1</label>
              <Select
                ref={refTargetingDetails1}
                onChange={handleTarget1Change}
                options={target1FieldOptions.map((option) => ({
                  value: option.target_level1,
                  label: option.target_level1,
                  id: option.id,
                }))}
                isMulti
                className="text-sm px-4 py-2 "
                required
              />
            </div>
            {showTarget2 && (
              <div className="flex-center">
                <label id="target-2">Targeting Details 2</label>
                <Select
                  ref={refTargetingDetails2}
                  onChange={handleTarget1Change}
                  options={target2FieldOptions.map((option) => ({
                    value: option.target_level2,
                    label: option.target_level2,
                  }))}
                  isMulti
                  className="text-sm px-4 py-2 "
                  required
                />
              </div>
            )}
            <div className="flex-center">
              <label id="goal">Campaign Goal</label>
              <select
                name="goal"
                id="goal"
                className="text-sm  px-4 py-2 "
                required
                ref={refCampaignGoal}
              >
                <option value="default">Select Option</option>
                {campaignGoal1Options.map((fieldOption) => (
                  <option value={fieldOption.goal} key={fieldOption.id}>
                    {fieldOption.goal}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex relative justify-between">
              <label id="metric">Key Metric</label>
              <div className="flex flex-col gap-2">
                <select
                  name="metric"
                  id="metric"
                  className="text-sm px-4 py-2 "
                  required
                  ref={refCampaignKeyMetric}
                >
                  <option value="default">Select Option</option>
                  {keyMetricsOptions.map((fieldOption, index) => (
                    <option value={fieldOption.key_metrics} key={index}>
                      {fieldOption.key_metrics}
                    </option>
                  ))}
                </select>
                <select
                  name="metric"
                  id="metric"
                  className="text-[12px] px-4 py-2 bg-white "
                  ref={refCampaignSecGoal}
                >
                  <option value="default">Add Secondary Goal</option>
                  {campaignGoal2Options.map((fieldOption) => (
                    <option
                      value={fieldOption.secondary_goal}
                      key={fieldOption.id}
                    >
                      {fieldOption.secondary_goal}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex-center">
              <label id="metric">Target Metric</label>
              <input
                type="text"
                name="compaign-name"
                id="compaign-name"
                placeholder="Write your target metric"
                className="pl-2 pr-4 py-2 border border-grey text-sm"
                ref={refCampaignTargetMetric}
              />
            </div>
            {/* <Link href="/campaign/dataintegration"> */}
            <button type="submit" className="btn w-full">
              Next
            </button>
            {/* </Link> */}
          </form>
        </Card>
      </div>
    </main>
  );
}
