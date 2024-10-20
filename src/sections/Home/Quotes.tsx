import React from "react";
import { kaushan } from "../../../app/layout";

const Quotes = () => {
  return (
    <div className="bg-white">
      <div className="container py-10">
        <p
          className={` text-black text-center text-2xl md:text-4xl ${kaushan.className}`}
        >
          &quot;It Always Seems Impossible Until It&quot;s Done.&quot; - Nelson
          Mandela
        </p>
      </div>
    </div>
  );
};

export default Quotes;
