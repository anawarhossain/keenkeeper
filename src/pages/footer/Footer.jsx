import React from "react";
import FooterLogo from "../../assets/logo-xl.png";
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className=" bg-[#244D3F]">
      <footer className="container mx-auto text-white py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Footer Logo */}
          <img
            className="mx-auto mb-3"
            src={FooterLogo}
            alt="KeenKeeper Logo"
          />

          {/* Subtitle */}
          <p className="text-sm text-gray-200 mb-6 max-w-xl mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          {/* Social Links */}
          <div className="mb-8">
            <p className="mb-3 text-lg text-white font-bold">Social Links</p>

            <div className="flex justify-center gap-4">
              <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
                <RiInstagramFill/>
              </div>
              <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
                <RiFacebookFill/>
              </div>
              <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
                <RiTwitterFill/>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 border-t border-gray-500 pt-5">
            <p>© 2026 KeenKeeper. All rights reserved.</p>

            <div className="flex gap-4 mt-3 md:mt-0">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
              <a href="#" className="hover:underline">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
