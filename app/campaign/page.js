"use client";
import { useState, useEffect, useRef } from "react";
import Card from "@/components/Card";
import { useRouter, useSearchParams } from "next/navigation";

export default function CampaignPage() {
  const [campaignId, setCampaignId] = useState();
  const [target1FieldOptions, setTarget1FieldOptions] = useState([]);
  const [target2FieldOptions, setTarget2FieldOptions] = useState([]);
  const [keyMetricsOptions, setKeyMetricsOptions] = useState([]);
  const [campaignGoal1Options, setCampaignGoal1Options] = useState([]);
  const [campaignGoal2Options, setCampaignGoal2Options] = useState([]);
  const [showTarget2, setShowTarget2] = useState(false);
  const [targetPairs, setTargetPairs] = useState([
    { target1: null, target2: null },
  ]);
  const [secGoalState, setSecGoalState] = useState(false);
  const router = useRouter();
  const search = useSearchParams();
  const brandId = search.get("brandId");
  const [filteredTarget2Options, setFilteredTarget2Options] = useState([]);
  const refCampaignName = useRef();
  const refCampaignGoal = useRef();
  const refCampaignKeyMetric = useRef();
  const refCampaignSecGoal = useRef();
  const refCampaignTargetMetric = useRef();

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
      setCampaignGoal1Options(data.table4);
      setCampaignGoal2Options(data.table5);
    } catch (error) {
      console.log("Error fetching field options:", error);
    }
  };

  const handleTarget1Change = (index, e) => {
    const selectedTargetId = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    // Filter the options for the second target field based on the selected options in the first target field
    const filteredTarget2Options = target2FieldOptions.filter(
      (option) => selectedTargetId == option.targeting_l1_id
    );
    console.log(filteredTarget2Options);
    console.log(selectedTargetId);
    setFilteredTarget2Options(filteredTarget2Options);

    const updatedTargetPairs = [...targetPairs];
    updatedTargetPairs[index].target1 = selectedTargetId;
    updatedTargetPairs[index].target2 = null; // Reset selected options for the second field
    setTargetPairs(updatedTargetPairs);

    setShowTarget2(true);
  };
  const handleTarget2Change = (index, e) => {
    const selectedTargetIds = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    const updatedTargetPairs = [...targetPairs];
    updatedTargetPairs[index].target2 = selectedTargetIds;
    setTargetPairs(updatedTargetPairs);
  };
  console.log(targetPairs);
  const addTargetPair = () => {
    setTargetPairs([...targetPairs, { target1: null, target2: null }]);
    setFilteredTarget2Options(target2FieldOptions);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      campaignName: refCampaignName.current.value,
      campaignGoal: refCampaignGoal.current.value,
      campaignKeyMetric: refCampaignKeyMetric.current.value,
      campaignTargetMetric: refCampaignTargetMetric.current.value,
      brandid: brandId,
      targetPairs: targetPairs,
    };
  
    // Add campaignSecGoal to formData only if it's not empty
    const campaignSecGoalValue = refCampaignSecGoal?.current?.value?.trim();
    if (campaignSecGoalValue !== "") {
      formData.campaignSecGoal = campaignSecGoalValue;
    }
    try {
      const response = await fetch("/api/campaigndetailsupload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("campaign id" + data?.campaign_id);
      router.push(`/campaign/dataintegration?campaign_id=${data?.campaign_id}`);
    } catch (error) {
      console.log("Error uploading campaign details:", error);
    }
  };

  return (
    <main className="w-full p-[30px]">
      <h1 className="text-3xl mb-6">Upload Campaign Data</h1>
      <div className="w-[560px] mx-auto">
        <Card>
          <form
            className="text-base flex flex-col gap-6"
            onSubmit={handleFormSubmit}
          >
            <div className="flex-center">
              <label id="campaign-name">Campaign Name</label>
              <input
                ref={refCampaignName}
                type="text"
                name="campaign-name"
                id="campaign-name"
                placeholder="Write your campaign name"
                className="pl-2 pr-4 py-2 border border-grey text-sm"
                required
              />
            </div>
            {targetPairs.map((pair, index) => (
              <div key={index} className="flex-center">
                <label>Targeting Details {index + 1}</label>
                <select
                  onChange={(e) => handleTarget1Change(index, e)}
                  className="text-sm px-4 py-2"
                  required
                >
                  {target1FieldOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.target_level1}
                    </option>
                  ))}
                </select>
                {showTarget2 && (
                  <select
                    onChange={(e) => handleTarget2Change(index, e)}
                    className="text-sm px-4 py-2"
                    required
                  >
                    {filteredTarget2Options.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.target_level2}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            ))}
            <button type="button" onClick={addTargetPair}>
              Add More Targets
            </button>
            <div className="flex-center">
              <label id="campaign-goal">Campaign Goal</label>
              <select
                ref={refCampaignGoal}
                className="text-sm px-4 py-2 border border-grey"
                required
              >
                <option value="">Select Campaign Goal</option>
                {campaignGoal1Options.map((option) => (
                  <option key={option.id} value={option.goal}>
                    {option.goal}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-center">
              <label id="campaign-key-metric">Key Metric</label>
              <select
                ref={refCampaignKeyMetric}
                className="text-sm px-4 py-2 border border-grey"
                required
              >
                <option value="">Select Key Metric</option>
                {keyMetricsOptions.map((option, index) => (
                  <option key={index} value={option.key_metrics}>
                    {option.key_metrics}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-center">
              <label id="campaign-target-metric">Target Metric</label>
              <input
                ref={refCampaignTargetMetric}
                type="text"
                name="campaign-target-metric"
                id="campaign-target-metric"
                className="pl-2 pr-4 py-2 border border-grey text-sm"
                placeholder="Enter Target Metric"
              />
            </div>
            {secGoalState ? (
              <div className="flex-center">
                <label id="campaign-sec-goal">Secondary Goal</label>
                <select
                  ref={refCampaignSecGoal}
                  className="text-sm px-4 py-2 border border-grey"
                >
                  <option value="default">Select Sec Goal</option>
                  {campaignGoal2Options.map((option, index) => (
                    <option key={index} value={option.secondary_goal}>
                      {option.secondary_goal}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <p
                onClick={() => {
                  setSecGoalState(true);
                }}
                className="text-xs cursor-pointer"
              >
                + Add Secondary Goal
              </p>
            )}
            <button type="submit" className="btn w-full">
              Next
            </button>
          </form>
        </Card>
      </div>
    </main>
  );
}
