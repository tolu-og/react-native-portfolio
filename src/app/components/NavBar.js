"use client"
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.jpg"
import { Link } from "react-scroll";
import Resume from "../assets/Tolu-OG.pdf"
import Image from "next/image";
import cv from "../../../public/Tolu-OG.pdf"

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 border-b-2 border-gray-500">
      <div>
        <Image src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>
      {/* menu*/}
      <ul className="hidden md:flex">
        <li className="hover:bg-pink-600 rounded">
          {" "}
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        
        <li className="hover:bg-pink-600 rounded">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:bg-pink-600 rounded">
          <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className="hover:bg-pink-600 rounded">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu*/}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <div>
          <Image
            src={Logo}
            alt="Logo"
            style={{ width: "50px", borderRadius: "full" }}
          />
        </div>
        <li className="py-6 text-4xl ">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
    


        <li className="py-6 text-4xl ">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            to="portfolio"
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons*/}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px]  opacity-60 lg:opacity-100 hover:opacity-100 duration-300 bg-blue-600 ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/ogunnusi-tolulope/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] opacity-60 lg:opacity-100 hover:opacity-100 duration-300 bg-[#333333] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/tolu-og"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] opacity-60 lg:opacity-100 hover:opacity-100 duration-300 bg-[#6fc2b0] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:ogunnusitolulope1@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] opacity-60 lg:opacity-100 hover:opacity-100 duration-300 bg-[#565f69] ">

            <a
              className="flex justify-between items-center w-full text-gray-300"
              href= "/Tolu-OG.pdf"
              download="ToluOG-Resume.pdf"
              
            >
              Resumé <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default NavBar;