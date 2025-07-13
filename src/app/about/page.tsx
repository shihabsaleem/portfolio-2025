import React from "react";
import data from "../../data/asset";

import Skill from "@/components/skill";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Bio from "@/components/bio";

const About = () => {
  const info = data.info[0];

  return (
    <div className="flex font-sans gap-6 ">
      <div className="flex flex-col gap-4 max-w-screen w-8/12 ">
        <div className="flex">
          <Bio />
        </div>

        <div className="flex w-full">
          <div className="flex gap-6">
            <div className="border-2 w-full border-gray-900 p-6 rounded-3xl text-white">
              <Experience />
            </div>

            <div className=" w-full  border-2 border-gray-900 p-6 rounded-3xl text-white">
              <Education />
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/12 border-2 border-gray-900 p-6 rounded-3xl text-white">
        <Skill />
      </div>
    </div>
  );
};

export default About;
