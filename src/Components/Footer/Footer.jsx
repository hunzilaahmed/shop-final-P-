import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const getYear=new Date().getFullYear()
  return (
    <footer className="bg-slate-800 text-white py-12 mt-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Company</h2>
            <ul>
              <li>
                <button className="text-gray-400 hover:text-gray-300 transition duration-300">
                  About Us
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-gray-300 transition duration-300">
                  Careers
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-gray-300 transition duration-300">
                  Press
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-gray-300 transition duration-300">
                  Blog
                </button>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Customer Service</h2>
            <ul>
              <li>
                <button className="text-gray-400 hover:text-gray-300 transition duration-300">
                  Contact Us
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-gray-300 transition duration-300">
                  Returns & Exchanges
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-gray-300 transition duration-300">
                  Order Tracking
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-gray-300 transition duration-300">
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                <FaFacebookF size={24} />
              </span>
              <span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                <FaTwitter size={24} />
              </span>
              <span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                <FaInstagram size={24} />
              </span>
              <span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                <FaLinkedinIn size={24} />
              </span>
              <span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                <FaGithub size={24} />
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-4">
          <p className="text-center text-gray-400">
            © {getYear} Shop All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
