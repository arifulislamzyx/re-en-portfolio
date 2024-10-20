"use client";
import React from "react";

const CvDownload = () => {
  const handleAcademicCV = () => {
    console.log("clicked");
    const cvUrl = "/CV_Academic.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_Sunny.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDetailedCV = () => {
    console.log("clicked");
    const cvUrl = "/CV_Detailed.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_Sunny.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className=" bg-slate-500">
      <div className="container px-5 md:px-10 py-10 flex flex-col md:flex-row items-center gap-5">
        <div className="w-full md:w-1/2">
          <p
            onClick={handleAcademicCV}
            className="bg-white  text-black w-full mb-5 py-2 rounded text-center cursor-pointer"
          >
            (Academic) Download in PDF Format
          </p>
          <iframe
            src="https://drive.google.com/file/d/13A7lyMn_rSqdx8IKD--SXGimAmkrj1Ch/preview"
            width="100%"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>

        <div className="w-full md:w-1/2">
          <p
            onClick={handleDetailedCV}
            className="bg-white  text-black w-full mt-5 md:mt-0 mb-5 py-2 rounded text-center cursor-pointer"
          >
            (Detailed) Download in PDF Format
          </p>

          <iframe
            src="https://drive.google.com/file/d/1RdZBjS_CZQy80P-v_mgC6Z-0z7kqasot/preview"
            width="100%"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CvDownload;
