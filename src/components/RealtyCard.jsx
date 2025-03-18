import React from 'react';
import { useNavigate } from 'react-router-dom';
import blueDirectArrow from '../assets/blueDirectArrow.svg';
import bedIcon from "../assets/bedIcon.svg";
import bathIcon from "../assets/bathIcon.svg";
import size from "../assets/sizeIcon.svg";

const RealtyCard = ({ property }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/property/${property.id}`);
  };
  
  return (
    <div 
      className="bg-white rounded-br-4xl rounded-tl-4xl shadow-lg overflow-hidden cursor-pointer max-w-sm text-[#822e27]"
      onClick={handleClick}
    >
      <div className="relative mb-4">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="px-8 py-4 space-y-8">
        <h3 className="text-2xl font-bold">{property.title}</h3>
        
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
        
        <p className="text-sm">{property.description}</p>
        
        <div className="flex justify-end items-center mt-2 group cursor-pointer text-[#6ca2e3]">
          <span className="mr-2 font-medium text-sm border-b-2 border-[#6ca2e3] w-16 pb-1">EXPLORE</span>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <img src={blueDirectArrow} alt="arrow-direction" className="w-full"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtyCard;