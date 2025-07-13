import React from "react";
import data from "../data/asset";

const skills = data.skills;

const Skill = () => {
  return (
    <div>
      <h2 className="font-display text-lg mb-4 border-b border-gray-700 pb-2">
        Skill Set
      </h2>
      <div className="flex flex-wrap gap-3 text-xs">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="border-2 border-gray-900 px-3 py-1 rounded-sm  text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skill;
