import React from "react";
import data from "../../data/asset";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Skill from "@/components/skill";
import Experience from "@/components/experience";
import Education from "@/components/education";




const About = () => {
  const info = data.info[0];

  return (
    // <div className="flex font-sans gap-6 ">
    //   <div className="flex flex-col gap-4 max-w-screen w-8/12 ">
    //     <div className="flex">
    //       <div className="w-4/12 border-2 h-fit border-gray-900 p-6 rounded-3xl ">
    //         <Image
    //           src={info.dp}
    //           alt={info.name}
    //           className="h-auto rounded-xl "
    //           width={600}
    //           height={400}
    //         />
    //       </div>
    //       <div className="w-8/12 space-y-4 h-full">
    //         <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 ">
    //           <div className="text-xs">Hi, I'm</div>
    //           <div className="font-semibold text-lg">{info.name}</div>
    //           <div className="font-normal text-xs text-neutral-400 ">
    //             {info.desc}
    //           </div>
    //         </div>
    //         <div className="flex justify-between gap-2">
    //           <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 justify-center text-white">
    //             <a href={`tel:${info.phone}`}> Call Me</a>
    //           </div>
    //           <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 justify-center text-white">
    //             <a href={`https://wa.me/${info.phone}`}> Text Me</a>
    //           </div>{" "}
    //           <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 justify-center text-white">
    //             <a href={`https://${info.phone}`}> Download CV</a>
    //           </div>
    //           <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 justify-center text-white">
    //             <a href={`https://${info.linkedin}`}>
    //               <FaLinkedin className="w-5 h-5 text-white hover:text-green-100" />
    //             </a>
    //           </div>
    //           <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 justify-center text-white">
    //             <a href={`https://${info.github}`}>
    //               {" "}
    //               <FaGithub className="w-5 h-5 hover:text-green-100" />
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex w-full">
    //       <div className="flex gap-6">
    //         {/* Experience */}
    //         <div className="border-2 w-full border-gray-900 p-6 rounded-3xl text-white">
    //           <div className="font-display text-lg mb-2">Experience</div>
    //           {/* You can map your experience data here */}
    //           <ul className="text-sm space-y-2">
    //             <li>
    //               <strong>L1 - Full Stack Developer</strong>
    //               <br />
    //               Saasyway · 01/25 - 06/25
    //             </li>
    //             <li>
    //               <strong>Angular Developer Intern</strong>
    //               <br />
    //               PDS - EY GDS · 03/24 - 08/24
    //             </li>
    //             <li>
    //               <strong>Web Designer</strong>
    //               <br />
    //               GJ Infotech · 05/18 - 06/19
    //             </li>
    //           </ul>
    //         </div>

    //         {/* Education */}
    //         <div className=" w-full  border-2 border-gray-900 p-6 rounded-3xl text-white">
    //           <div className="font-display text-lg mb-2">Education</div>
    //           <ul className="text-sm space-y-4">
    //             <li>
    //               <strong>B.Tech in Computer Science & Engineering</strong>
    //               <br />
    //               College of Engineering Munnar / APJAKTU
    //               <br />
    //               Nov 2020 - May 2023
    //             </li>
    //             <li>
    //               <strong>Diploma in Computer Engineering</strong>
    //               <br />
    //               St. Marys Polytechnic College / BTE
    //               <br />
    //               July 2015 - May 2018
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="w-4/12 border-2 border-gray-900 p-6 rounded-3xl text-white">
    //     <div className="font-display text-lg mb-4">Skill Set</div>

    //     <div className="flex flex-wrap gap-2 text-xs">
    //       {[
    //         "UI / UX",
    //         "Design Thinking",
    //         "Wireframing & Prototyping",
    //         "Usability Test",
    //         "A/B Testing",
    //         "Problem Solving",
    //         "Figma",
    //         "Adobe Photoshop & Illustrator",
    //         "ReactJS & Angular (Basic)",
    //         "HTML + CSS",
    //         "TailwindCSS",
    //         "Bootstrap",
    //         "Javascript",
    //         "Git & GitHub",
    //         "WordPress",
    //         "Beaver Builder + Elementor",
    //       ].map((skill) => (
    //         <span
    //           key={skill}
    //           className="border border-gray-700 px-3 py-1 rounded-xl"
    //         >
    //           {skill}
    //         </span>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="flex font-sans gap-6 ">
      <div className="flex flex-col gap-4 max-w-screen w-8/12 ">
        <div className="flex">
          <div className="w-4/12 border-2 h-fit border-gray-900 p-6 rounded-3xl ">
            <Image
              src={info.dp}
              alt={info.name}
              className="h-auto rounded-xl "
              width={600}
              height={400}
            />
          </div>
          <div className="w-8/12 space-y-4 h-full">
            <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 ">
              <div className="text-xs">Hi, I'm</div>
              <div className="font-semibold text-lg">{info.name}</div>
              <div className="font-normal text-xs text-neutral-400 ">
                {info.desc}
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 justify-center text-white">
                <a href={`tel:${info.phone}`}> Call Me</a>
              </div>
              <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 justify-center text-white">
                <a href={`https://wa.me/${info.phone}`}> Text Me</a>
              </div>{" "}
              <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 justify-center text-white">
                <a href={`https://${info.phone}`}> Download CV</a>
              </div>
              <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 justify-center text-white">
                <a href={`https://${info.linkedin}`}>
                  <FaLinkedin className="w-5 h-5 text-white hover:text-green-100" />
                </a>
              </div>
              <div className="border-2 border-gray-900 p-6 rounded-3xl space-y-2 justify-center text-white">
                <a href={`https://${info.github}`}>
                  {" "}
                  <FaGithub className="w-5 h-5 hover:text-green-100" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full">
          <div className="flex gap-6">
            {/* Experience */}
            <div className="border-2 w-full border-gray-900 p-6 rounded-3xl text-white">
              <Experience />
            </div>

            {/* Education */}
            <div className=" w-full  border-2 border-gray-900 p-6 rounded-3xl text-white">
              <Education />
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/12 border-2 border-gray-900 p-6 rounded-3xl text-white">
       <Skill/>
      </div>
    </div>
  );
};

export default About;
