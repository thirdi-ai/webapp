"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import Card from "../Card";

export default function CompanyInfoForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const refIndustryName = useRef();
  const refCompanyDesc = useRef();
  const refCompanyName = useRef();
  const refCompanyEmail = useRef();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      companyName: refCompanyName.current.value,
      companyDesc: refCompanyDesc.current.value,
      companyEmail: refCompanyEmail.current.value,
      companyIndustry: refIndustryName.current.value,
    };
    try {
      const response = await fetch("/api/companydetailsupload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      setFormSubmitted(true);
    } catch (error) {
      console.log("Error uploading form:", error);
    }
  };

  return (
    <main className="w-[460px] mx-auto text-sm">
      <Card>
        {formSubmitted ? (
          <div className="flex flex-col gap-4">
            <p>
              We see that you haven't uploaded any data yet. Click here to
              upload your compaign data.
            </p>
            <Link href="/dataintegration">
              <button className="btn">Add Compaign</button>
            </Link>
          </div>
        ) : (
          <form className="flex  flex-col gap-4" onSubmit={handleFormSubmit}>
            <div className="flex flex-col">
              <label id="company-name" className="mb-2">
                What is your company name?
              </label>
              <input
                ref={refCompanyName}
                type="text"
                placeholder="Ex: ThirdI"
                name="companyName"
                id="company-name"
                required
                className="pl-2 pr-4 py-2 border border-grey"
              />
            </div>
            <div className="flex flex-col">
              <label id="industry" className="mb-2">
                Which industry are you in?
              </label>
              <input
                ref={refIndustryName}
                type="text"
                placeholder="Ex: Information and technology"
                name="companyIndustry"
                id="industry"
                required
                className="pl-2 pr-4 py-2 border border-grey"
              />
            </div>
            <div className="flex flex-col">
              <label id="company-info" className="mb-2">
                What does your company do?
              </label>
              <input
                ref={refCompanyDesc}
                type="text"
                placeholder="Ex: Information and technology"
                name="companyDesc"
                id="company-info"
                className="pl-2 pr-4 py-2 border border-grey"
                required
              />
            </div>
            <div className="flex flex-col">
              <label id="company-email" className="mb-2">
                What is your email address?
              </label>
              <input
                ref={refCompanyEmail}
                type="email"
                placeholder="Ex: companyxyz@gmail.com"
                name="companyEmail"
                id="company-email"
                className="pl-2 pr-4 py-2 border border-grey"
                required
              />
            </div>
            <button
              type="submit"
              className="btn"
            >
              Submit
            </button>
          </form>
        )}
      </Card>
    </main>
  );
}
