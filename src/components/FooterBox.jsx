import React from 'react';
import { useNavigate } from 'react-router-dom';
import defaultLogo from '../assets/footerLogoAKH.png';

const FooterBox = ({ 
  mainBgColor = 'bg-white',
  footerBgColor = 'bg-[#822e27]', 
  mainTextColor = 'text-[#822e27]', 
  footerTextColor = 'text-white',
  logo = defaultLogo }) => {

  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  
  return (
    <div className={`w-full ${mainBgColor}`}>
      <div className={`mx-auto p-12 md:p-24 py-12 md:py-24 ${mainTextColor}`}>
        <div className="flex flex-col md:flex-row justify-between items-start space-x-8">
          {/* Logo and tagline */}
          <div className="mb-8">
            <img src={logo} alt="AKH Realty Logo" className="h-16 md:h-20"/>
            <p className="mt-3 max-w-xs font-semibold">
              An estate full of modernized homes with beautiful aesthetics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 cursor-pointer">
              <li><a onClick={()=>navigate('/')} >Home</a></li>
              <li><a onClick={()=>navigate('/realty')}>Explore</a></li>
              <li><a onClick={()=>navigate('/about')}>About</a></li>
              <li><a onClick={()=>navigate('/contact')}>Contact</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="mb-8">
            <h3 className="font-bold mb-3">Information</h3>
            <ul className="space-y-2 cursor-pointer">
              <li><a onClick={()=>navigate('/terms-of-use')}>Terms of use</a></li>
              <li><a onClick={()=>navigate('/privacy-policy')} >Privacy Policy</a></li>
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