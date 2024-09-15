import React from "react";
import Profile from "../assets/profile.jpg";
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <div className="container mx-auto text-center">
      <div>
        <div className="flex">
          <img className="rounded-full w-8 h-8" src={Profile} alt="" />
          <p>Karan Chourasia</p>
        </div>
      </div>
      <hr />
      <div>
        <ul className="flex">
          <li>About</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Certifications</li>
        </ul>
      </div>

      <div>{getCurrentYear()} ©karan</div>

      <div className="items-center">
        <ul className="flex justify-items-center space-x-4 mt-4">
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
