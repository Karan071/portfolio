import React from "react";
import Profile from "../assets/profile.jpg";
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <div className="container mx-auto text-center">
      <div>
        <div className="flex justify-center items-center space-x-2">
          <img className="rounded-full w-8 h-8" src={Profile} alt="Profile" />
          <p>Karan Chourasia</p>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <Link className="flex justify-center space-x-6">
          <NavLink to="/about">About</NavLink>
          <NavLink>Experience</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink>Projects</NavLink>
          <NavLink>Certifications</NavLink>
        </Link>
      </div>

      <div className="flex justify-center items-center my-4">
        {getCurrentYear()} ©karan
      </div>

      <div className="flex justify-center items-center m-6 p-10">
        <ul className="flex space-x-4 mt-4">
          <li className="text-xl">
            <a href="https://github.com/Karan071" target="_blank">
              <SiGithub />
            </a>
          </li>
          <li className="text-xl">
            <a href="https://instagram.com/Karennnspams" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li className="text-xl">
            <a href="https://linkedin.com/in/karan-chourasia" target="_blank">
              <CiLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
