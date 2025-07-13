import React from "react";
import data from "@/data/asset";

const infos = data.info[0];

const info = () => {
  return (
    <div>
      <div className="text-xs">Hi, I'm</div>
      <div className="font-semibold text-lg">{infos.name}</div>
      <div className="font-normal text-xs text-neutral-400 ">{infos.desc}</div>
    </div>
  );
};

export default info;
