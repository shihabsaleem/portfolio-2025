import React from "react";
import data from "@/data/asset";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const info = data.info[0];

const contact = () => {
  return (
    <div className="flex">
      <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 justify-center text-white">
        <a href={`tel:${info.phone}`}> Call Me</a>
      </div>
      <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 justify-center text-white">
        <a href={`https://wa.me/${info.phone}`}> Text Me</a>
      </div>{" "}
      <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 justify-center text-white">
        <a href={`https://${info.phone}`}> Download CV</a>
      </div>
      <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 justify-center text-white">
        <a href={`https://${info.linkedin}`}>
          <FaLinkedin className="w-5 h-5 text-white hover:text-green-100" />
        </a>
      </div>
      <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 justify-center text-white">
        <a href={`https://${info.github}`}>
          {" "}
          <FaGithub className="w-5 h-5 hover:text-green-100" />
        </a>
      </div>
    </div>
  );
};

export default contact;
