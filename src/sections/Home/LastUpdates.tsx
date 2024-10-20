import React from "react";

const LastUpdates = () => {
  return (
    <div className="bg-white">
      <div className="container text-black  py-10">
        <h3 className="text-center text-4xl md:text-5xl font-bold mb-5">
          Latest Updates
        </h3>
        <ul className="list-disc px-14 md:pl-32 space-y-3 text-lg md:text-xl">
          <li>
            June 27, 2024: Journal Published in Journal of Applied Physics.
          </li>
          <li>May 20, 2024: Journal Published in Optics Express (Q1).</li>
          <li>August 22, 2023: Joined E-Snail.</li>
          <li>August 22, 2023: Started class at UVA.</li>
          <li>August 09, 2023: Moved to the USA.</li>
        </ul>
      </div>
    </div>
  );
};

export default LastUpdates;
