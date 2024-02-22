'use client';
import { useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";
import asset8 from "@/assets/asset8.png";
import Image from "next/image";
import DataTable from "@/components/DataTable";

export default function DataUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [displayFileName, setDisplayFileName] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [csvData, setCsvData] = useState([]);
    const [showBtn, setShowBtn] = useState(false);
    const [genereateRecommendations, setGenerateRecommendations] =
      useState(false);
  
    // parseCSV function
    const parseCSV = (csvText) => {
      const lines = csvText.split("\n");
      const headers = lines[0].split(",");
      const parsedData = [];
  
      for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i].split(",");
        console.log(lines[i]);
  
        if (currentLine.length === headers.length) {
          const row = {};
          for (let j = 0; j < headers.length; j++) {
            row[headers[j].trim()] = currentLine[j].trim();
          }
          parsedData.push(row);
        }
      }
      setCsvData(parsedData);
    };
  
    const handleButtonClick = () => {
      setShowBtn(true);
    };
    const handleRecommendations = () => {
      setGenerateRecommendations(true);
    };
    // FileChangeHandler
    const handleFileChange = (e) => {
      let file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (e) => {
          const csvText = e.target.result;
          parseCSV(csvText);
        };
  
        reader.readAsText(file);
      }
      setSelectedFile(e.target.files[0]);
      setDisplayFileName(false);
      setShowLoader(true);
      setTimeout(() => {
        setDisplayFileName(true);
        setShowLoader(false);
        // Show file name after 3 seconds
      }, 3000);
    };
  
    return (
      <div className="upload w-full relative flex-center p-6">
        <Card>
          <div className="flex-center flex-col w-[440px] mt-6 p-8 border-2 border-dashed m-auto">
            <Image
              src={asset8}
              alt="datauploadIllustration"
              className="w-[300px]"
            />
            <div className="w-full relative mt-6">
              <div
                className={`h-2 bg-purple-500 transition-all duration-[3s] ${
                  showLoader ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
            {displayFileName && selectedFile && (
              <div className="mt-4 text-sm flex gap-2 bg-purple-100 py-2 px-5 mb-1 rounded-md">
                {/* <FileIcon className="w-4 h-4 object-contain" /> */}
                {selectedFile.name}
              </div>
            )}
            <input
              type="file"
              id="fileInput"
              name="csvFile"
              accept=".csv, .xls, .xlsx"
              className="inputfile hidden"
              onChange={handleFileChange}
            />
            {!showLoader && (
              <label
                htmlFor="fileInput"
                className="bg-violet text-white px-5 py-2 rounded-full font-[500] mt-2 cursor-pointer text-[15px]"
              >
                Choose a File
              </label>
            )}
            {!selectedFile && (
              <p className="mt-2 text-center text-sm">or drop files here</p>
            )}
          </div>
          {!showLoader && (
            <DataTable data={csvData} onButtonClick={handleButtonClick} />
          )}
          {showBtn && (
            <div className="flex-center relative flex-col w-[600px] m-auto gap-4">
              {genereateRecommendations && (
                <div>
                  <textarea
                    rows={10}
                    placeholder="Output will be displayed here"
                    className=" w-[580px] p-6 text-sm border border-slate-400 border-opacity-40 outline-none"
                  ></textarea>
                </div>
              )}
              {genereateRecommendations ? (
                <Link href="/recommendation">
                  <button className={`btn`} onClick={handleRecommendations}>
                    View Recommendations
                  </button>
                </Link>
              ) : (
                <button className={`btn`} onClick={handleRecommendations}>
                  Generate Recommendations
                </button>
              )}
            </div>
          )}
        </Card>
      </div>
    );
  };
