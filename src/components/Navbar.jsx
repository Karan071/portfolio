import React from 'react';
import profilePic from '../assets/profile.jpg';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className='mx-auto px-8  max-w-5xl flex p-2 items-center justify-between bg-theme-black text-white rounded-lg drop-shadow-2x font-poppins'>
      {/* Profile part */}
      <div className='flex items-center space-x-4'>
        <img className="w-10 h-10 rounded-full" src={profilePic} alt="profile-pic" />
        <p className="text-lg font-semibold">Karan</p>
      </div>

      {/* Nav items */}
      <div className='flex space-x-6'>
        <ul className='flex space-x-6'>
          <li className="hover:bg-gray-700 px-3 py-2 rounded-md transition">
            <Link to= "/about">About</Link>
          </li>
          <li className="hover:bg-gray-700 px-3 py-2 rounded-md transition">Experience</li>
          <li className="hover:bg-gray-700 px-3 py-2 rounded-md transition">Skills</li>
          <li className="hover:bg-gray-700 px-3 py-2 rounded-md transition">Projects</li>
          <li className="hover:bg-gray-700 px-3 py-2 rounded-md transition">Certifications</li>
          <li className="hover:bg-gray-700 px-3 py-2 rounded-md transition">Coding Profiles</li>
        </ul>
      </div>

      {/* CV download button */}
      <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-1 rounded-md transition">
        View CV
      </button>
    </div>
  );
};

export default Navbar;
