"use client";
import React from "react";
import Image from "next/image";
import asset19 from "@/assets/asset19.svg";
import asset20 from "@/assets/asset20.svg";
import asset21 from "@/assets/asset21.svg";
import asset22 from "@/assets/asset22.svg";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import SpreadsheetComponent from "./SpreadsheetComponent";

export default function ModalComponent({ onBtnClick }) {
  const [fileData, setFileData] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [files, setFiles] = useState([]);
  const router = useRouter();
  // const [confirmData, setConfirmData] = useState(false);
  // const [showPromptPage, setShowPromptPage] = useState(false);

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
      console.log("CSV file upload"+ data);
      if (Array.isArray(data)) {
        setFileData(data);
        setFileUploaded(true);
        setErrorMessage("File Uploaded Successfully");
        setFiles([...files, selectedFile]);
      } else {
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
                <Image src={asset19} width={12} alt="cross" />
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
            <div
              className="w-2/6
              border-r border-grey-600 h-full flex-center flex-col relative"
            >
              <div className="px-5">
                <div className="border-b border-grey-600 py-4">
                  {fileUploaded ? (
                    <>
                      <p className="text-sm font-semibold">Files Uploaded</p>
                      <div className="flex flex-col gap-3 text-sm mt-4">
                        {files.map((file, index) => {
                          return (
                            <div
                              key={index}
                              className="relative w-full flex place-items-center gap-3"
                            >
                              <Image src={asset21} width={30} alt="fileicon" />
                              <span>{file.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <p className="text-sm font-semibold">No Files Uploaded</p>
                  )}
                </div>

                <div className="text-sm  text-gray-light pt-3">
                  See
                  <Link href="/" className="text-blue-600 mx-1">
                    our documentation
                  </Link>
                  for more information on how to format your CSV file.
                </div>
              </div>
              <div className="h-[54px] relative border-t border-grey-600 w-full text-sm px-5 flex-center">
                <div className="flex-center w-full">
                  <button>Cancel</button>
                  <Link href="/?recommendationGenerated=true">
                    <button
                      className={`flex place-items-center   text-white px-3 rounded-sm py-1 ${
                        fileUploaded ? "bg-blue-400" : "bg-grey"
                      }`}
                      disabled={!fileUploaded}
                    >
                      <Image
                        src={asset22}
                        className="mr-1 w-[14px] h-[12px] "
                        alt="right-arrow"
                      />
                      Generate Recommendations
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-4/6 h-full relativebg-white-smoke overflow-x-scroll custom-scrollbar">
              {/* {showPromptPage ? (
                <div className="p-6 w-full relative">
                  <textarea
                    rows={8}
                    name="prompt"
                    placeholder="Write your prompt here..."
                    className="w-full bg-grey bg-opacity-35 rounded-md p-3 text-sm"
                  ></textarea>
                </div>
              ) : fileData ? (
                <SpreadsheetComponent data={fileData} />
              ) : ( */}
              <div className="p-6">
                <p className="mb-3 text-sm text-grey-500">
                  {fileUploaded ? "Add More File" : " Upload New File"}
                  {errorMessage && (
                    <span className="ml-4 text-[10px] text-red-600">
                      {errorMessage.error}
                    </span>
                  )}
                </p>
                <div className="w-full h-[340px] border border-grey-600 p-2  relative rounded-md bg-white">
                  <div className="w-full h-full rounded-md border border-dashed border-white-500 text-sm flex justify-center items-center flex-col relative">
                    <div className="w-full h-full relative overflow-hidden">
                      <label
                        htmlFor="fileInput"
                        className="w-full h-full rounded-md border border-dashed border-white-500 text-sm flex justify-center items-center flex-col"
                      >
                        <Image
                          src={asset20}
                          className="mx-auto w-[20px] pb-2"
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
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
