import Image from "next/image";
import data from "@/data/asset";

const works = data.works;

export default function Home() {
  return (
    <div className="flex flex-col font-sans p-4 sm:p-6 md:p-10 gap-10">
      {works.map((work) => (
        <div
          key={work.id}
          className={`flex flex-col-reverse lg:flex-row ${
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
