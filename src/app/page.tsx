"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "@/data/asset";

gsap.registerPlugin(ScrollTrigger);

const works = data.works;

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".work");

    elements?.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col font-sans p-4 sm:p-6 md:p-10 gap-10"
    >
      {works.map((work) => (
        <div
          key={work.id}
          className={`work flex flex-col lg:flex-row ${
            work.id % 2 === 0 ? "lg:flex-row-reverse" : ""
          } gap-6 max-w-screen w-full`}
        >
          <div className="w-full lg:w-2/3 border-2 border-gray-900 p-4 rounded-3xl">
            <Image
              src={work.image}
              alt={work.name}
              className="w-full h-auto rounded-xl"
              width={600}
              height={400}
              priority
            />
          </div>

          <div className="w-full lg:w-1/3 border-2 border-gray-900 p-6 rounded-3xl space-y-3">
            <div className="font-semibold text-lg text-white">{work.name}</div>
            <div className="font-semibold text-sm text-neutral-400">
              {work.shortdesc}
            </div>
            <p className="font-normal text-sm text-neutral-400 leading-relaxed">
              {work.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
