import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-[200px] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. I am Tolu, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              I am deeply passionate about crafting exceptional software
              solutions using React Native, aimed at enhancing user experiences
              and making a tangible difference in peoples lives. Specializing
              in developing mobile applications, I channel my creativity and
              expertise to deliver intuitive and impactful solutions across
              various platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
