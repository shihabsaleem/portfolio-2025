import Image from "next/image";
import data from "../data/asset";

const works = data.works;

export default function Home() {
  return (
    <div className="flex flex-col font-sans p-8 sm:p-10 gap-10">
      {works.map((work) => (
        <div
          key={work.id}
          className={`flex gap-4 max-w-screen w-full px-4 ${
            work.id % 2 === 0 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="w-2/3 border-2 border-gray-900 p-6 rounded-3xl">
            <Image
              src={work.image}
              alt={work.name}
              className="w-full h-auto rounded-xl"
              width={600}
              height={400}
            />
          </div>

          <div className="w-1/3 border-2 border-gray-900 p-6 rounded-3xl space-y-2">
            <div className="font-semibold text-lg text-white">{work.name}</div>
            <div className="font-semibold text-sm text-neutral-400">
              {work.shortdesc}
            </div>
            <div className="font-normal text-sm text-neutral-400 leading-relaxed">
              {work.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
