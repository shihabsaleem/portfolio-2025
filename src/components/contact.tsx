import React from "react";
import data from "@/data/asset";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const info = data.info[0];

const Contact = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-4">
      <div className="border-2 border-gray-900 p-6 rounded-xl text-center text-white hover:bg-gray-900 transition">
        <a href={`tel:${info.phone}`}>Call Me</a>
      </div>
      <div className="border-2 border-gray-900 p-6 rounded-xl text-center text-white hover:bg-gray-900 transition">
        <a href={`https://wa.me/${info.phone}`}>Text Me</a>
      </div>
      <div className="border-2 border-gray-900 p-6 rounded-xl text-center text-white hover:bg-gray-900 transition">
        <a href={`https://${info.cv}`} target="_blank" rel="noopener noreferrer">Download CV</a>
      </div>
      <div className="border-2 border-gray-900 p-6 rounded-xl flex justify-center text-white hover:bg-gray-900 transition">
        <a href={`https://${info.linkedin}`} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 hover:text-green-100" />
        </a>
      </div>
      <div className="border-2 border-gray-900 p-6 rounded-xl flex justify-center text-white hover:bg-gray-900 transition">
        <a href={`https://${info.github}`} target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6 hover:text-green-100" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
