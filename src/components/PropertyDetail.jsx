import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from "../components/NavBar"
import customLogo from "../assets/AKHRealtyLogoRed.png";
import customMenu from "../assets/hamMenuRed.svg";
import bedIcon from "../assets/bedIcon.svg";
import bathIcon from "../assets/bathIcon.svg";
import size from "../assets/sizeIcon.svg";
import blueDirectArrow from '../assets/blueDirectArrow.svg';
import FooterBox from '../components/FooterBox';
import customFooterLogo from "../assets/AKHRealtyLogo.png";
import { formatPrice } from '../utils/FormatPrice';
import { PropertyContext } from '../App'; // Importing the context for data sharing between App Component

const PropertyDetail = () => {
  const { id } = useParams();
  
  // Get properties from context
  const properties = useContext(PropertyContext);
  
  // Find the property with the matching ID
  const property = properties.find(p => p.id === id);
  
  // If property not found, show error message
  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8 text-center  text-[#822e27]">
        <h2 className="text-2xl font-bold">Property not found</h2>
        <p className="mt-4">The property you're looking for does not exist.</p>
        <Link to="/realty" className="mt-4 inline-block bg-[#6ca2e3] text-white px-4 py-2 rounded">
          Back to Realty Page
        </Link>
      </div>
    );
  }
  
  return (
    <div>
        {/**Navigation */}
        <NavBar logo={customLogo} menu={customMenu} shadow="shadow-xs"/>

        <div className="bg-white min-h-screen p-8 md:p-12 lg:p-24 text-[#822e27]">
          <div className="bg-white overflow-hidden mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-auto object-cover"
                />

                <div className="flex space-x-4 mt-4 ">
                  {property.galleryImages && property.galleryImages.map((img, index) => (
                    <img 
                      key={index}
                      src={img} 
                      alt={`${property.title} - ${index}`} 
                      className={`h-24 w-36 object-cover cursor-pointer`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-3xl font-semibold mb-4">{property.title}</h2>
                <div className="flex justify-between items-start pt-2">
                  <h3 className="text-lg font-semibold">Overview</h3>
                  <div className="bg-[#822e27] text-white text-sm py-2 px-6 rounded-bl-3xl">
                    {property.unitsLeft} units left
                  </div>
                </div>
              
                <div className="flex justify-between my-4 mb-8">
                  <div className="items-center">
                    <p className='text-center font-semibold'>Bedrooms</p>
                    <div className='flex justify-between'>
                        <img src={bedIcon} alt="bed-icon" />
                        <span>{property.bedrooms}</span>
                    </div>
                  </div>
                  
                  <div className="items-center">
                    <p className='text-center font-semibold'>Size</p>
                    <div className='flex justify-between'>
                        <img src={size} alt="size-icon" />
                        <span>{property.size}</span>
                    </div>
                  </div>
                  
                  <div className="items-center">
                    <p className='text-center font-semibold'>Bathrooms</p>
                    <div className='flex justify-between'>
                        <img src={bathIcon} alt="bath-icon" />
                        <span>{property.bathrooms}</span>
                    </div>
                  </div>
                </div>
              
                <p>{property.description}</p>
              
                <div className="flex justify-end items-center mt-2 group cursor-pointer text-[#6ca2e3]">
                  <span className="mr-2 font-medium text-sm border-b-2 border-[#6ca2e3] w-16 pb-1">EXPLORE</span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <img src={blueDirectArrow} alt="arrow-direction" className="w-full"/>
                  </div>
                </div>
              
                <div className="mt-6 text-md font-bold">
                  NOTICE: All houses are delivered without internal furnishing
                </div>
              </div>
            </div>
            
            {/**Map Section */}
            <div className="mb-8 mt-24">
                <h2 className="text-xl font-bold mb-4">Location</h2>
                <div className="h-64 rounded-bl-4xl">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.45932733244!2d3.1191195!3d6.524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1708386001056!5m2!1sen!2sng"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
            </div>
              
            <div className="mt-24 mb-8">
              <h3 className="text-xl font-bold">Pricing</h3>
              <div className="flex justify-end">
                <div className="bg-[#822e27] text-white text-sm py-2 px-4 rounded-bl-2xl">
                  ₦{property.price.toLocaleString()}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="px-8 py-2 max-w-lg">
                  <h4><span className="font-bold">Full payment:</span> at the time of signing the contract 
                    attracts a discount of 5% reducing the price to {formatPrice(property.discountedPrice.toLocaleString())} million naira</h4>
                  <div className="flex justify-end items-center mt-2 group cursor-pointer text-[#6ca2e3]">
                    <span className="mr-2 font-medium text-sm border-b-2 border-[#6ca2e3] w-28 pb-1">MAKE PAYMENT</span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <img src={blueDirectArrow} alt="arrow-direction" className="w-full"/>
                    </div>
                  </div>
                </div>
              
                <div className="px-8 py-2 max-w-lg">
                  <h4><span className="font-bold">Installmental payment:</span> in the case of installmental payments, 
                    it should be completed over a period of 18 months starting with the first installment of 25%.</h4>
                  <p className="text-sm mt-2">
                    
                  </p>
                  <div className="flex justify-end items-center mt-2 group cursor-pointer text-[#6ca2e3]">
                    <span className="mr-2 font-medium text-sm border-b-2 border-[#6ca2e3] w-28 pb-1">MAKE PAYMENT</span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <img src={blueDirectArrow} alt="arrow-direction" className="w-full"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
              
          <div className="mt-6">
            <Link to="/realty" className="text-[#6ca2e3] font-semibold flex items-center space-x-2">
              <img src={blueDirectArrow} alt="arrow-direction" className="w-8 h-8"/>
              <p>Back to listings</p>
            </Link>
          </div>
        </div>

        {/**Footer */}
        <FooterBox mainBgColor='bg-[#822e27]' mainTextColor='text-white' footerBgColor='bg-white' footerTextColor='text-[#822e27]' logo={customFooterLogo}/>
    </div>
  );
};

export default PropertyDetail;