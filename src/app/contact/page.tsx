import React from "react";
import data from "@/data/asset";
import Dp from "@/components/dp";
import ContactInfo from "@/components/contact";

const info = data.info[0];

const Contact = () => {
  return (
    <div className="flex flex-col font-sans p-4 sm:p-6 md:p-10 gap-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-4/12 border-2 border-gray-900 p-6 rounded-3xl">
          <Dp />
        </div>

        <div className="w-full lg:w-8/12 border-2 border-gray-900 p-6 rounded-3xl flex flex-col justify-center gap-4">
          <ContactInfo layout="column" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
