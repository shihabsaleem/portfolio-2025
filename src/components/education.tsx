import React from "react";
import data from "../data/asset";

const educations = data.education;

const Education = () => {
  return (
    <div className="w-full">
      <h2 className="font-display text-xl mb-6 border-b border-gray-700 pb-2">
        Education
      </h2>
      <ul className="space-y-6">
        {educations.map((edu) => (
          <li key={edu.id} className=" p-4 rounded-lg">
            <div className="font-semibold ">{edu.qualification}</div>
            <div className="text-sm text-gray-400">{edu.College}</div>
            <div className="text-sm text-gray-400">{edu.Aff}</div>
            <div className="text-xs text-gray-500 mt-1">
              {edu.start} - {edu.end}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
