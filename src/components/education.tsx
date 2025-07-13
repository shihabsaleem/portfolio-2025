import React from "react";
import data from "../data/asset";

const educations = data.education;

const education = () => {
  return (
    <div>
      <div className="font-display text-lg mb-4">Education</div>
      <ul className="text-sm space-y-4">
        {educations.map((edu, index) => (
          <li key={edu.id}>
            <div className="font-semibold">{edu.qualification}</div>
            <div className="text-xs text-neutral-400">{edu.College}</div>
            <div className="text-xs text-neutral-400">
              {edu.start} - {edu.end}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default education;
