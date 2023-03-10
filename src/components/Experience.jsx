import React from "react";

import Clang from "../assets/Clang.png";
import Cpplang from "../assets/Cpplang.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import javascript from "../assets/javascript.png";
import firebase from "../assets/firebase.png";
import sql from "../assets/sqldb.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Clang,
      title: "C",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: Cpplang,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 4,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 9,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-500",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 11,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-400",
    },
    {
      id: 12,
      src: sql,
      title: "My SQL",
      style: "shadow-blue-100",
    },
    {
      id: 13,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <br />
        <br />
        <br />
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500  inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-4 sm:grid-cols-6 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
