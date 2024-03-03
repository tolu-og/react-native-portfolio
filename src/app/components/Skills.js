import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen text-gray-300 pb-12 md:pt-12 pt-[300px]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies i work with <span className="text-pink-600 italic ">Open to learning more </span></p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8">
          <div className="shadow-md shadow-orange-500 hover:scale-110 duration-500 ">
            <Image unoptimized className="w-20 mx-auto mt-3" src="/html.png" width={20} height={20} alt="HTML Icon" />
            <p className="my-4"> HTML</p>
          </div>
          <div className="shadow-md shadow-[#07b6d5] hover:scale-110 duration-500 ">
            <Image className="w-20 mx-auto mt-3" src="/tailwind.png" width={20} height={20} unoptimized alt="HTML Icon" />
            <p className="my-4"> TailWind CSS</p>
          </div>

          <div className="shadow-md shadow-yellow-500 hover:scale-110 duration-500">
            <Image
              className="w-20 mx-auto mt-3"
              src="/react.png" width={20} height={20} unoptimized
              alt="HTML Icon"
            />
            <p className="my-4"> React-Native</p>
          </div>
          <div className="shadow-md shadow-yellow-500 hover:scale-110 duration-500">
            <Image
              className="w-20 mx-auto mt-3"
              src="javascript.png" width={20} height={20} unoptimized
              alt="HTML Icon"
            />
            <p className="my-4"> JavaScript</p>
          </div>
         
          <div className="shadow-md shadow-yellow-500 hover:scale-110 duration-500">
            <Image
              className="w-20 mx-auto mt-3"
              src="python.png" width={20} height={20} unoptimized
              alt="HTML Icon"
            />
            <p className="my-4"> Python</p>
          </div>

          <div className="shadow-md shadow-yellow-500 hover:scale-110 duration-500">
            <Image
              className="w-20 mx-auto mt-3"
              src="type.png" width={20} height={20} unoptimized
              alt="HTML Icon"
            />
            <p className="my-4"> TypeScript</p>
          </div>
         

        </div>
      </div>
    </div>
  );
};

export default Skills;