import React from 'react';
import RealtyCard from '../components/RealtyCard';
import NavBar from '../components/NavBar';
import customLogo from "../assets/AKHRealtyLogoRed.png";
import customMenu from "../assets/hamMenuRed.svg";
import customFooterLogo from "../assets/AKHRealtyLogo.png";
import FooterBox from '../components/FooterBox';
import {properties} from "../data/propertiesData"

const RealtyPage = () => {

  return (
    <div>

        {/**Navigation */}
        <NavBar logo={customLogo} menu={customMenu} shadow='shadow-md'/>

        <div className="bg-white mx-auto grid justify-center items-center min-h-screen p-8 md:p-12 lg:p-16 text-[#822e27]">
          <h1 className=" text-4xl md:text-6xl font-semibold mb-6 lg:mt-16 mt-20 ">REALTY</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {properties.map(property => (
              <RealtyCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        {/**Footer */}
        <FooterBox mainBgColor='bg-[#822e27]' mainTextColor='text-white' footerBgColor='bg-white' footerTextColor='text-[#822e27]' logo={customFooterLogo}/>
    </div>
  );
};

export default RealtyPage;