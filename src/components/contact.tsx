import React from "react";
import data from "@/data/asset";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const info = data.info[0];

const Contact = () => {
  return (
    <div className="grid justify-between grid-cols-2 sm:grid-cols-3 lg:flex gap-4">
      <div className="border-2 border-gray-900 p-4 rounded-xl  text-white hover:text-gray-900 hover:bg-white transition">
        <a href={`tel:${info.phone}`}>Call Me</a>
      </div>
      <div className="border-2 border-gray-900 p-4 rounded-xl  text-white hover:text-gray-900 font hover:bg-white transition">
        <a href={`https://wa.me/${info.phone}`}>Text Me</a>
      </div>
      <div className="border-2 border-gray-900 p-4 rounded-xl text-white hover:text-gray-900 hover:bg-white transition">
        <a href={`${info.cv}`} target="_blank" rel="noopener noreferrer">
          Download CV
        </a>
      </div>
      <div className="border-2 border-gray-900 p-4 rounded-xl flex justify-center text-white hover:text-gray-900 hover:bg-white transition">
        <a
          href={`https://${info.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-6 h-6 hover:text-gray-900" />
        </a>
      </div>
      <div className="border-2 border-gray-900 p-4 rounded-xl flex justify-center text-white hover:text-gray-900 hover:bg-white transition">
        <a
          href={`https://${info.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-6 h-6 hover:text-gray-900" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
