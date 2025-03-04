import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import Logo from '../../assets/Img/sharaco_white_Logo.png'

const Footer = () => {
  return (
    <div className="flex flex-col p-14 md:p-14 ">
      {/* Main Header Section */}
      <div className="flex flex-col items-center justifyce md:items-start">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-left max-w-full md:max-w-[440px]">
          Ready to grow your business? Start with Sharaco Technologies, become faster every second.
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-4 md:mt-6">
          <button className="bg-[#01B379] text-white py-2 px-7 rounded-lg shadow-sm text-sm md:text-base hover:bg-[#01b378a5] transition">
            Contact Us Now
          </button>
          <img src={Logo} alt="LOGO" className="mt-4 md:mt-0 md:ml-6 w-64  object-contain" />
        </div>
      </div>

      {/* Navigation and Social Media */}
      <div className="p-6 md:p-9 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Navigation Links */}
        <ul className="flex gap-4 text-sm md:text-base">
          <li><a href="#" className="hover:text-[#01B379] transition">About</a></li>
          <li><a href="#" className="hover:text-[#01B379] transition">Features</a></li>
          <li><a href="#" className="hover:text-[#01B379] transition">Works</a></li>
          <li><a href="#" className="hover:text-[#01B379] transition">Support</a></li>
        </ul>
        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="#" className="text-gray-600 hover:text-[#01B379] transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-[#01B379] transition">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-[#01B379] transition">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full h-[1.5px] bg-gray-300" />

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-4 text-base">
        <small>© Copyright 2024, All Rights Reserved</small>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#01B379] transition">Privacy Policy</a>
          <a href="#" className="hover:text-[#01B379] transition">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
