import React from 'react';
import profilePic from '../assets/profile.jpg';
import { Link, NavLink } from 'react-router-dom';

const handleDownload = () => {
  console.log("Button is pressed")
const link = document.createElement('a');
  link.href = '/ResumeKaran.pdf';  
  link.download = 'ResumeKaran.pdf';  
  link.click();
};


const Navbar = () => {
  return (
    <div className='mx-auto px-8 z-20 max-w-5xl flex p-2 items-center justify-between bg-black-theme text-white rounded-lg drop-shadow-2x font-poppins'>
      {/* Profile part */}
      <div className='flex items-center space-x-4'>
        <img className="w-10 h-10 rounded-full object-cover" src={profilePic} alt="profile-pic" />
        <p className="text-lg font-semibold">
          <NavLink to="/" >Karan</NavLink>
        </p>
      </div>

      {/* Nav items */}
      <div className='flex space-x-6'>
        <ul className='flex space-x-6'>
          <li className="hover:bg-gray-700 px-3 py-2 rounded-md transition ">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:bg-gray-700 px-3 py-2 rounded-md transition">
            <NavLink to="/experience">Experience</NavLink>
          </li>
          <li className="hover:bg-gray-700 px-3 py-2 rounded-md transition">
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li className="hover:bg-gray-700 px-3 py-2 rounded-md transition">
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li className="hover:bg-gray-700 px-3 py-2 rounded-md transition">
            <NavLink to="/certifications">Certifications</NavLink>
          </li>
         </ul>
      </div>

      {/* CV download button */}
      <button onClick={handleDownload} className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-1 rounded-md transition">
        View CV
      </button>
    </div>
  );
};

export default Navbar;
