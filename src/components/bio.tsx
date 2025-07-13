import React from "react";
import data from "../data/asset";
import Dp from "@/components/dp";
import Infos from "@/components/info";
import Contact from "@/components/contact";

const info = data.info[0];

const Bio = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-4/12 border-2 border-gray-900 p-6 rounded-3xl">
        <Dp />
      </div>
      <div className="w-full lg:w-8/12 border-2 border-gray-900 p-6 rounded-3xl space-y-4 flex flex-col justify-between">
        <Infos />
        <Contact />
      </div>
    </div>
  );
};

export default Bio;
