import React from "react";
import askvce from "../assets/portfolio/ASKVCE.png";
import collegedunia from "../assets/portfolio/collegedunia.png";
import landingpage from "../assets/portfolio/landingpage.png";
import spaceshooters from "../assets/portfolio/spaceshooters.png";
import todoo from "../assets/portfolio/Todoo.png";
import varunshop from "../assets/portfolio/varunshop.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: askvce,
      lin: "https://github.com/VARUNvk1729/ASK-VCE",
    },
    {
      id: 2,
      src: varunshop,
      lin: "https://github.com/VARUNvk1729/Varun-s-Shop",
    },
    {
      id: 3,
      src: spaceshooters,
      lin: "https://github.com/VARUNvk1729/Space_Shooters",
    },
    {
      id: 4,
      src: collegedunia,
      lin: "https://github.com/VARUNvk1729/College-Dunia",
    },
    {
      id: 5,
      src: todoo,
      lin: "https://github.com/VARUNvk1729/TODOmatic",
    },
    {
      id: 6,
      src: landingpage,
      lin: "https://github.com/VARUNvk1729/Landing-page",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, lin }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}
                <button
                  className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(lin, "_blank")}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
