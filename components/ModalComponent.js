import React from "react";
import Image from "next/image";
import asset19 from "@/assets/asset19.svg";
import asset20 from "@/assets/asset20.svg";
import asset21 from "@/assets/asset21.svg";
import asset22 from "@/assets/asset22.svg";
import Link from "next/link";
import { useState } from "react";
import SpreadsheetComponent from "./SpreadsheetComponent";

export default function ModalComponent({ onBtnClick }) {
  const [fileData, setFileData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      if (Array.isArray(data)) {
        setFileData(data);
      }
      else{
        setErrorMessage(data);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="modal-overlay w-[100vw] h-[100vh] overflow-hidden absolute z-50 top-0 left-0 bg-[#0217238A] bg-opacity-[54%] flex justify-center items-center">
      <div className="modal-wrapper w-[1090px] h-[546px] relative bg-white rounded-md">
        <div className="modal-content font-[500] flex flex-col h-full relative overflow-hidden">
          <div className="modal-header p-5 pl-[30px] pb-4 border-b border-grey-600">
            <div className="flex-center">
              <h1 className="text-[17px] leading-[20.42px] text-grey-500">
                New Data Source
              </h1>
              <button
                className="p-1 bg-white-400 rounded-[4px]"
                onClick={onBtnClick}
              >
                <Image src={asset19} width={12} height={12} alt="cross" />
              </button>
            </div>
            <div className="text-[13px] flex gap-6 mt-4">
              <div className="flex place-items-center border border-blue-600 p-1 pr-3 gap-2 rounded-[4px] text-blue-600">
                <div className="w-[26px] h-[26px] flex justify-center items-center bg-blue-600 bg-opacity-10 rounded-[4px]">
                  1
                </div>
                Upload File
              </div>
              <div className="flex place-items-center p-1 pr-3 gap-2 rounded-[4px] text-grey-400">
                <div className="w-[26px] h-[26px] flex justify-center items-center  border border-grey-600 bg-opacity-10 rounded-[4px]">
                  2
                </div>
                Data
              </div>
            </div>
          </div>
          <div className="modal-grid flex h-full relative">
            <div className="w-2/6 border-r border-grey-600 h-full flex-center flex-col relative">
              <div className="px-5">
                <div className="relative w-full  pt-6 pb-3 flex place-items-center gap-3 border-b border-grey-600">
                  <Image src={asset21} width={50} height={50} alt="csv" />
                  <span>CSV </span>
                </div>
                <div className="text-sm  text-gray-light pt-3">
                  See
                  <Link href="/" className="text-blue-600">
                    our documentation
                  </Link>
                  for more information on how to format your CSV file.
                </div>
              </div>
              <div className="h-[54px] relative border-t border-grey-600 w-full text-sm px-5 flex-center">
                <button>Cancel</button>
                <button className="flex place-items-center bg-grey text-white px-3 rounded-sm py-1">
                  <Image
                    src={asset22}
                    width={14}
                    height={12}
                    className="mr-1"
                    alt="right-arrow"
                  />
                  Next
                </button>
              </div>
            </div>
            <div className="w-4/6 h-full relativebg-white-smoke overflow-x-scroll custom-scrollbar">
              {fileData ? (
                <SpreadsheetComponent data={fileData} />
              ) : (
                <div className="p-6">
                  <p className="mb-3 text-sm text-grey-500">Upload CSV File {errorMessage && <span className="ml-4 text-[10px] text-red-600">{errorMessage.error}</span>}</p>
                  <div className="w-full h-[340px] border border-grey-600 p-2  relative rounded-md bg-white">
                    <div className="w-full h-full rounded-md border border-dashed border-white-500 text-sm flex justify-center items-center flex-col relative">
                      <div className="w-full h-full relative overflow-hidden">
                        <label
                          htmlFor="fileInput"
                          className="w-full h-full rounded-md border border-dashed border-white-500 text-sm flex justify-center items-center flex-col"
                        >
                          <Image
                            src={asset20}
                            width={20}
                            height={20}
                            className="mx-auto pb-2"
                            alt="uploadfile"
                          />
                          <div className="text-grey-500 ">
                            Drag and drop or
                            <span className="text-blue-600 underline font-[500] cursor-pointer mx-1">
                              browse your files
                            </span>
                            to upload
                          </div>
                          <span className="text-xs mt-1 text-gray-light">
                            .csv or .xlsx 1GB max
                          </span>
                          <input
                            type="file"
                            id="fileInput"
                            name="csvFile"
                            className="inputfile hidden"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
