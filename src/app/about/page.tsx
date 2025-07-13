import React from "react";
import data from "../../data/asset";

import Skill from "@/components/skill";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Bio from "@/components/bio";

const About = () => {
  const info = data.info[0];

 return (
  <div className="flex flex-row font-sans p-8 sm:p-10 gap-10">
    {/* LEFT COLUMN */}
    <div className="flex flex-col gap-4 w-8/12">
      <div>
        <Bio />
      </div>

      <div className="flex gap-6 w-full">
        <div className="flex-1 border-2 border-gray-900 p-6 rounded-3xl text-white">
          <Experience />
        </div>
        <div className="flex-1 border-2 border-gray-900 p-6 rounded-3xl text-white">
          <Education />
        </div>
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="w-4/12 border-2 border-gray-900 p-6 rounded-3xl text-white">
      <Skill />
    </div>
  </div>
);

};

export default About;
