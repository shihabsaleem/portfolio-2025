import React from "react";
import Image from "next/image";
import data from "@/data/asset";

const info = data.info[0];

const dp = () => {
  return (
    <div>
      <Image
        src={info.dp}
        alt={info.name}
        className="h-auto rounded-xl "
        width={600}
        height={400}
      />
    </div>
  );
};

export default dp;
