import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex flex-col items-center p-6 gradient-bg-footer text-white">
    <div className="w-full max-w-screen-lg flex flex-col sm:flex-row justify-between items-center mb-6">
      <div className="flex justify-center items-center mb-4 sm:mb-0">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-4 sm:space-y-0 text-center">
        <a href="#market" className="text-lg font-medium hover:text-gray-300 transition-colors">Market</a>
        <a href="#exchange" className="text-lg font-medium hover:text-gray-300 transition-colors">Exchange</a>
        <a href="#tutorials" className="text-lg font-medium hover:text-gray-300 transition-colors">Tutorials</a>
        <a href="#wallets" className="text-lg font-medium hover:text-gray-300 transition-colors">Wallets</a>
      </div>
    </div>

    <div className="flex flex-col items-center mb-6">
      <p className="text-base md:text-lg mb-2 text-center">Join us for the latest updates and news</p>
      <p className="text-sm md:text-base font-medium text-center">info@kryptomastery.com</p>
    </div>

    <div className="w-full max-w-screen-lg h-px bg-gray-600 my-4" />

    <div className="w-full max-w-screen-lg flex justify-between items-center text-sm">
      <p className="text-left">© 2024 Kryptomastery. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="https://facebook.com" className="text-white hover:text-gray-300 transition-colors">
          <FaFacebookF size={20} />
        </a>
        <a href="https://twitter.com" className="text-white hover:text-gray-300 transition-colors">
          <FaTwitter size={20} />
        </a>
        <a href="https://instagram.com" className="text-white hover:text-gray-300 transition-colors">
          <FaInstagram size={20} />
        </a>
        <a href="https://linkedin.com" className="text-white hover:text-gray-300 transition-colors">
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
