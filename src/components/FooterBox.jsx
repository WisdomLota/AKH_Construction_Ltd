import React from 'react';
import footerLogoAKH from '../assets/footerLogoAKH.png';

const FooterBox = ({ mainBgColor = 'bg-white', footerBgColor = 'bg-[#822e27]', mainTextColor = 'text-[#822e27]', footerTextColor = 'text-white' }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className={`w-full ${mainBgColor}`}>
      <div className={`mx-auto p-12 md:p-24 py-12 md:py-24 ${mainTextColor}`}>
        <div className="flex flex-col md:flex-row justify-between items-start space-x-8">
          {/* Logo and tagline */}
          <div className="mb-8">
            <img src={footerLogoAKH} alt="AKH Realty Logo" className="h-16 md:h-20"/>
            <p className="mt-3 max-w-xs font-semibold">
              An estate full of modernized homes with beautiful aesthetics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className=" font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" >Home</a></li>
              <li><a href="#" >Explore</a></li>
              <li><a href="#" >About</a></li>
              <li><a href="#" >Contact</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="mb-8">
            <h3 className="font-bold mb-3">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" >Terms of use</a></li>
              <li><a href="#" >Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-3">Contact</h3>
            <ul className="space-y-2">
              <li >+234 803 703 7734</li>
              <li >sesodeno@yahoo.com</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright footer */}
      <div className={`w-full ${footerBgColor} py-4 font-semibold`}>
        <div className="max-w-6xl mx-auto px-4">
          <p className={`${footerTextColor} text-center text-sm`}>
            AKHCON REALTY © Copyright {currentYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBox;