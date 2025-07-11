import Image from "next/image";
import works from "../../public/assets/asset"; // or correct path if updated

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
          <div className="w-2/3 border-2 border-gray-700 p-4 rounded-2xl">
            <Image
              src={work.filename}
              alt={work.alt}
              className="w-full h-auto rounded-xl"
              width={600}
              height={400}
            />
          </div>

          <div className="w-1/3 border-2 border-gray-700 p-4 rounded-2xl space-y-2">
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
