"use client";
import React from "react";

const CV = () => {
  const handleCVDownload = () => {
    console.log("clicked");
    const cvUrl = "/CV_Academic.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_Sunny.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="bg-white">
      <div className="container grid grid-cols-1 px-10 md:px-0  md:flex justify-center gap-4 py-16">
        <a
          target="_blank"
          href={
            "https://drive.google.com/file/d/13A7lyMn_rSqdx8IKD--SXGimAmkrj1Ch/view"
          }
          className="bg-slate-900 px-10 py-4 rounded cursor-pointer text-white"
        >
          Academic CV (View Online)
        </a>
        <button
          onClick={handleCVDownload}
          className="bg-slate-900 px-10 py-4 rounded text-white"
        >
          Academic CV (PDF Download)
        </button>
      </div>
    </div>
  );
};

export default CV;
