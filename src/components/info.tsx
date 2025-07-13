import React from "react";
import data from "@/data/asset";

const infos = data.info[0];

const Info = () => {
  return (
    <section aria-label="User introduction">
      <p className="text-xs py-1">Hi, I'm</p>
      <h1 className="font-semibold text-lg py-1">{infos.name}</h1>
      <p className="font-normal text-xs text-neutral-400 py-1 leading-6">{infos.desc}</p>
    </section>
  );
};

export default Info;
