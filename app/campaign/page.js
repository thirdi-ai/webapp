"use client";
import CampaignForm from "@/components/CampaignForm";
import CampaignsListPage from "@/components/CampaignsListPage";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CampaignPage() {
  const [campaignsList, setCampaignsList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const search = useSearchParams();
  const brandId = search.get("brand_id");
  console.log(brandId);

  useEffect(() => {
    fetchCampaigns();
  }, []);
  const fetchCampaigns = async () => {
    const formData = {
      brand_id: brandId,
    };
    const response = await fetch("/api/fetchcampaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    setCampaignsList(data.campaign_list);
  };
  return (
    <div>
      {campaignsList && campaignsList.length > 0 && showForm === false ? (
        <CampaignsListPage
          campaigns={campaignsList}
          showCampaignForm={() => {
            setShowForm(true);
          }}
        />
      ) : (
        <CampaignForm />
      )}
    </div>
  );
}
