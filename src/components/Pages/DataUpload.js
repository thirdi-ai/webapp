import React, { useState } from "react";
import asset8 from "../../assets/asset8.png";
import { ReactComponent as FileIcon } from "../../assets/asset9.svg";

const DataUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [displayFileName, setDisplayFileName] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setDisplayFileName(false);
    setShowLoader(true);
    setTimeout(() => {
      setDisplayFileName(true);
      setShowLoader(false);
      // Show file name after 3 seconds
    }, 2000);
  };

  return (
    <div className="upload w-full relative flex-center">
      <div className="w-[460px] relative m-auto border-2 border-dashed flex-center flex-col mt-28 px-8 py-16 rounded-md">
        <img src={asset8} alt="datauploadIllustration" className="w-[300px]" />
        <div className="w-full relative mt-6">
          <div
            className={`h-2 bg-purple-500 transition-all duration-[2s] ${
              showLoader ? "w-full" : "w-0"
            }`}
          ></div>
        </div>
        {displayFileName && selectedFile && (
          <div className="mt-4 text-sm flex gap-2 bg-purple-100 py-2 px-5 mb-1 rounded-md">
            <FileIcon className="w-4 h-4 object-contain" />
            {selectedFile.name}
          </div>
        )}
        <input
          type="file"
          id="fileInput"
          name="csvFile"
          accept=".csv, .pdf"
          className="inputfile hidden"
          onChange={handleFileChange}
        />
        {!showLoader &&<label
          for="fileInput"
          className="bg-violet text-white px-5 py-2 rounded-full font-[500] mt-2 cursor-pointer text-[15px]"
        >
          {displayFileName && selectedFile ? "Upload" : "Choose a File"}
        </label> }
        {!selectedFile && (
          <p className="mt-2 text-center text-sm">or drop files here</p>
        )}
      </div>
    </div>
  );
};

export default DataUpload;
