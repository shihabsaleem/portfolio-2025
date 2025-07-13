import React from "react";
import data from "../data/asset";

const experiences = data.experience;

const experience = () => {
  return (
    <div>
      <div className="font-display text-lg mb-4">Experience</div>
      <ul className="text-sm space-y-4">
        {experiences.map((exp, index) => (
          <li key={index}>
            <div className="font-semibold">{exp.Designation}</div>
            <div className="text-xs text-neutral-400">{exp.Company}</div>
            <div className="text-xs text-neutral-400">
              {exp.start} - {exp.end}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default experience;
