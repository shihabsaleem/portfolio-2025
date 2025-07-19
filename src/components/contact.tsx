import React from "react";
import data from "@/data/asset";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const info = data.info[0];

const Contact = ({ layout = "row" }) => {
  const isColumn = layout === "column";

  const contactItems = [
    { label: "Call Me", href: `tel:${info.phone}` },
    {
      label: "Text Me",
      href: `https://wa.me/${info.phone.replace(/[^\d]/g, "")}`,
    },
    { label: "Download CV", href: `${info.cv}`, external: true },
  ];

  const iconLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: `https://${info.linkedin}`,
    },
    { icon: <FaGithub className="w-6 h-6" />, href: `https://${info.github}` },
  ];

  return (
    <div
      className={`${
        isColumn
          ? "flex flex-col gap-4"
          : "grid grid-cols-2 sm:grid-cols-3 lg:flex gap-4"
      }`}
    >
      {contactItems.map((item, idx) => (
        <div
          key={idx}
          className={`border-2 border-gray-900 p-4 rounded-xl text-center text-white hover:text-gray-900 hover:bg-white transition ${
            isColumn ? "w-full" : ""
          }`}
        >
          <a
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            {item.label}
          </a>
        </div>
      ))}

      <div className={`${isColumn ? "flex gap-4 w-full" : "flex gap-4"}`}>
        {iconLinks.map((item, idx) => (
          <div
            key={idx}
            className={`flex-1 border-2 border-gray-900 p-4 rounded-xl flex justify-center text-white hover:text-gray-900 hover:bg-white transition`}
          >
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
