"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import Card from "../Card";

export default function CompanyInfoForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const refIndustryName = useRef();
  const refCompanyDetails = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
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
            <Link href="/dataupload">
              <button className="btn">Add Compaign</button>
            </Link>
          </div>
        ) : (
          <form
            className="flex  flex-col gap-4"
            onSubmit={handleFormSubmit}
          >
            <div className="flex flex-col">
              <label id="industry" className="mb-2">
                Which industry are you in?
              </label>
              <input
                ref={refIndustryName}
                type="text"
                placeholder="Ex: Information and technology"
                name="industry"
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
                ref={refCompanyDetails}
                type="text"
                placeholder="Ex: Information and technology"
                name="company-info"
                id="company-info"
                className="pl-2 pr-4 py-2 border border-grey"
                required
              />
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        )}
      </Card>
    </main>
  );
}
