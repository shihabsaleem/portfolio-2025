import React from "react";
import data from "../data/asset";
import Dp from "@/components/dp";
import Infos from "@/components/info";
import Contact from "@/components/contact";

const info = data.info[0];

const bio = () => {
  return (
    <div>
      <div className="w-4/12 border-2 h-fit border-gray-900 p-6 rounded-3xl ">
        <Dp />
      </div>
      <div className="w-8/12 space-y-4 h-full">
        <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 ">
          <Infos />
        </div>
    <Contact/>
      </div>
    </div>
  );
};

export default bio;
