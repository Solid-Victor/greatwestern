"use client"
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-[100vw] pt-20 pb-10 bg-[rgba(17,24,39,1)]" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Great Western</h3>
            <p className="text-gray-400 mb-4">
              Excellence in construction and engineering solutions since 1995.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[rgba(25,32,47,1)] hover:bg-yellow-500 transition-colors duration-300"
                >
                  <img src={info.img} alt="social" width={20} height={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-yellow-500">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-yellow-500">Services</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-yellow-500">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="text-yellow-500">Address:</span><br />
                123 Construction Ave,<br />
                City, State 12345
              </li>
              <li className="text-gray-400">
                <span className="text-yellow-500">Phone:</span><br />
                (123) 456-7890
              </li>
              <li className="text-gray-400">
                <span className="text-yellow-500">Email:</span><br />
                info@greatwestern.com
              </li>
            </ul>
      </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-[rgba(25,32,47,1)] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
              <button 
                type="submit"
                className="absolute right-1 top-1 bg-yellow-500 text-black px-4 py-1 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
      </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Great Western Engineering and Construction Ltd. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-yellow-500 text-sm">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-yellow-500 text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
