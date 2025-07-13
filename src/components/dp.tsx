import React from "react";
import Image from "next/image";
import data from "@/data/asset";

const info = data.info[0];

const Dp = () => {
  return (
    <div className="w-full h-auto rounded-xl overflow-hidden">
      <Image
        src={info.dp}
        alt={info.name}
        width={600}
        height={400}
        className="w-full h-auto object-cover rounded-xl"
        priority
      />
    </div>
  );
};

export default Dp;
