import React from "react";
import gbera from "../assets/gbera.png";
import jobfinder from "../assets/job-finder.png";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full md:h-screen text-gray-300 md:pt-12 pt-[200px]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Portfolio
          </p>
          <p className="py-6">/Check out some of my recent freelance projects <span className="text-pink-600 italic"> hover for more details</span></p>
        </div>

        <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-4">
        <div
            style={{ backgroundImage: `url(${gbera.src})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Gbera Travel App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://gberaweb.tolulabs.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href= "https://github.com/tolu-og/gbera"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <h1 className="font-bold text-1xl text-white">
                  Technology Used
                </h1>
                <ul>
                  <li>React-Native</li>
                  <li>Tailwind CSS</li>
                  <li> Travel API</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${jobfinder.src})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Job Finder App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://todo-app-rust-eight.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/tolu-og/todo-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <h1 className="font-bold text-1xl text-white">
                  Technology Used
                </h1>
                <ul>
                  <li>ReactJS</li>
                  <li>Tailwind CSS</li>
                  <li>Firebase Firestore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
