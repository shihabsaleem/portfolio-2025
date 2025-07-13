import React from "react";
import data from "../data/asset";

const skills = data.skills;

const skill = () => {
  return (
    <div>
      {" "}
      <div className="font-display text-lg mb-4">Skill Set</div>
      <div className="flex flex-wrap gap-2 text-xs">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="border border-gray-700 px-3 py-1 rounded-xl"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default skill;
