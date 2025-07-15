"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Dp from "@/components/dp";
import ContactInfo from "@/components/contact";

const Contact = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    tl.fromTo(
      leftRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0 }
    ).fromTo(
      rightRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0 },
      "-=0.7"
    );
  }, []);

  return (
    <div className="flex flex-col font-sans p-4 sm:p-6 md:p-10 gap-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div
          ref={leftRef}
          className="w-full lg:w-4/12 border-2 border-gray-900 p-6 rounded-3xl"
        >
          <Dp />
        </div>

        <div
          ref={rightRef}
          className="w-full lg:w-8/12 border-2 border-gray-900 p-6 rounded-3xl flex flex-col justify-center gap-4"
        >
          <ContactInfo layout="column" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
