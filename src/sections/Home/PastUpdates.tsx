"use client";
import React, { useState } from "react";
import { pastUpdate } from "@/data/pastUpdate";
import { ChevronDown, ChevronUp } from "lucide-react";

const PastUpdates = () => {
  const [toggleUpdate, setToggleUpdate] = useState(false);

  const handleToggle = () => {
    setToggleUpdate(!toggleUpdate);
  };
  return (
    <div className="bg-slate-700 ">
      <div className="container py-10 relative">
        <h3
          onClick={handleToggle}
          className="text-center text-4xl md:text-5xl font-bold mb-5 cursor-pointer"
        >
          Past Updates
        </h3>
        <button className="hidden md:block  absolute top-14 right-0">
          {toggleUpdate ? <ChevronUp size={40} /> : <ChevronDown size={40} />}
        </button>

        <p className="border-b mb-5 space-y-5"></p>

        {toggleUpdate && (
          <div className="px-14 md:pl-32 text-lg md:text-xl">
            <ul className="list-disc space-y-3">
              {pastUpdate.map((update) => (
                <li key={update.id}>{update.updates}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PastUpdates;
