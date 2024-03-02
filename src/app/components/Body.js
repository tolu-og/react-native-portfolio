import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";

const Body = () => {
  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen">
        <p className="text-pink-600 text-2xl"> Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          {" "}
          Tolulope Ogunnusi
        </h1>

        <ReactTyped
          className="text-3xl sm:text-7xl font-bold text-[#8892b0]"
          strings={["A Mobile App Developer", "A Front-end Developer 💻"]}
          typeSpeed={100}
          backSpeed={50}
          loop
        />

        <p className="text-gray-600 py-4 max-w-[700px]">
          I specialize in mobile app development, with a focus on creating
          intuitive and user-friendly experiences. My expertise lies in
          designing, developing, and optimizing mobile applications to meet user
          needs and business goals. Currently, I am dedicated to crafting
          innovative solutions using{" "}
          <span className="text-pink-600">React Native</span> for seamless
          cross-platform development.
        </p>

        <div>
          <button
            className="text-white group border-2 px-6 py-3 my-2 flex items-center rounded-md hover:bg-pink-600
                hover:border-pink-600 ease-in-out duration-300"
          >
            <Link to="portfolio" smooth={true} duration={500}>
              View Portfolio
            </Link>

            <span className="group-hover:rotate-90 duration-300">
              <HiArrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
