import React, { useState, useEffect } from 'react';
import NavBar  from "../components/NavBar"
import FooterBox from '../components/FooterBox'
import customLogo from "../assets/AKHRealtyLogoRed.png";
import customFooterLogo from "../assets/AKHRealtyLogo.png";
import redDirectArrow from '../assets/redDirectArrow.svg';
import customMenu from "../assets/hamMenuRed.svg";
import devConstruction1 from '../assets/devConstruction1.png';
import devConstruction2 from '../assets/devConstruction2.png'; 
import devConstruction3 from '../assets/devConstruction3.png';
import devConstruction4 from '../assets/devConstruction4.png';
import devConstruction5 from '../assets/devConstruction5.png';
import devConstruction6 from '../assets/devConstruction6.png';
import devConstruction7 from '../assets/devConstruction7.png';
import devConstruction8 from '../assets/devConstruction8.png';
import devConstruction9 from '../assets/devConstruction9.png';
import devConstruction10 from '../assets/devConstruction10.png';
import devConstruction11 from '../assets/devConstruction11.png';
import devConstruction12 from '../assets/devConstruction12.png';
import devConstruction13 from '../assets/devConstruction13.png';
import devConstruction14 from '../assets/devConstruction14.png';
import { useNavigate } from 'react-router-dom';

const DevUpdatesPage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  const navigate = useNavigate();

  //scroll triggered animation using Intersection Observer API
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('.update-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // AKH1 Layout - 5 images with selective rounded corners and varying sizes
  const AKH1ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="grid grid-cols-2 gap-2 min-h-screen my-auto space-x-2">
        {/* Left Column - Large Images */}
        <div className="grid grid-rows-2 gap-2 h-152 space-y-4">
          {/* Large Image 1 with rounded top-left */}
          <div
            className={`overflow-hidden rounded-tl-4xl transform transition-all duration-700 ${
              isVisible
                ? `translate-y-0 opacity-100 delay-0`
                : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[0]}
              alt="Large Construction Image 1"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          {/* Large Image 2 with rounded-bl (bottom-left) */}
          <div
            className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${
              isVisible
                ? `translate-y-0 opacity-100 delay-100`
                : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[1]}
              alt="Large Construction Image 2"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
          
        {/* Right Column - Small Images */}
        <div className="grid grid-rows-3 gap-2 h-152 space-y-4">
          {/* Small Image 1 with rounded top-right */}
          <div
            className={`overflow-hidden rounded-tr-4xl transform transition-all duration-700  ${
              isVisible
                ? `translate-y-0 opacity-100 delay-200`
                : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[2]}
              alt="Small Construction Image 1"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          {/* Small Image 2 with no rounded corners */}
          <div
            className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${
              isVisible
                ? `translate-y-0 opacity-100 delay-300`
                : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[3]}
              alt="Small Construction Image 2"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          {/* Small Image 3 with rounded bottom-right */}
          <div
            className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 ${
              isVisible
                ? `translate-y-0 opacity-100 delay-400`
                : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[4]}
              alt="Small Construction Image 3"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    );
  };



  // AKH2 Layout - 5 images with specific corner rounding patterns
  const AKH2ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="space-y-2 w-full">
        {/* Top row - 3 images with selective rounded corners */}
        <div className="grid grid-cols-3 gap-2 space-x-2 space-y-2 h-48">
          {/* Top left image with rounded top-left corner */}
          <div
            className={`overflow-hidden h-36 xl:mx-auto mt-10 xl:w-48 xl:ml-20  rounded-tl-3xl transform transition-all duration-700 ${
              isVisible 
                ? `translate-y-0 opacity-100 delay-0` 
                : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[0]}
              alt="Construction update 1"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          {/* Middle top image - no rounded corners */}
          <div
            className={`overflow-hidden transform rounded-tl-3xl xl:mx-auto transition-all xl:w-40 xl:ml-20 duration-700  ${
              isVisible 
                ? `translate-y-0 opacity-100 delay-100` 
                : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[1]}
              alt="Construction update 2"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          {/* Top right image with rounded top-right corner */}
          <div
            className={`overflow-hidden rounded-tr-3xl transform transition-all xl:w-40 xl:ml-12 pb-2 duration-700  ${
              isVisible 
                ? `translate-y-0 opacity-100 delay-200` 
                : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[2]}
              alt="Construction update 3"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        
        {/* Bottom row - 2 larger images */}
        <div className="grid grid-cols-2 gap-2 space-x-2 space-y-2 h-64">
          {/* Bottom left image with rounded bottom-left corner */}
          <div
            className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700  ${
              isVisible 
                ? `translate-y-0 opacity-100 delay-300` 
                : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[3]}
              alt="Construction update 4"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          {/* Bottom right image with rounded bottom-right corner */}
          <div
            className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 ${
              isVisible 
                ? `translate-y-0 opacity-100 delay-400` 
                : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[4]}
              alt="Construction update 5"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    );
  };

  // AKH3 Layout - 4 images with selective rounded corners
  const AKH3ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="grid grid-cols-2 gap-2 h-120 space-x-2 space-y-2">
        {/* Top left image with rounded top-left corner */}
        <div
          className={`overflow-hidden rounded-br-4xl transform transition-all duration-700  ${
            isVisible 
              ? `translate-y-0 opacity-100 delay-0` 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[0]}
            alt="Construction update 1"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        {/* Top right image with rounded top-right corner */}
        <div
          className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700  ${
            isVisible 
              ? `translate-y-0 opacity-100 delay-100` 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[1]}
            alt="Construction update 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        {/* Bottom left image with rounded bottom-left corner */}
        <div
          className={`overflow-hidden rounded-tr-4xl transform transition-all duration-700 ${
            isVisible 
              ? `translate-y-0 opacity-100 delay-200` 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[2]}
            alt="Construction update 3"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        {/* Bottom right image with rounded bottom-right corner */}
        <div
          className={`overflow-hidden rounded-tl-4xl transform transition-all duration-700 pb-2 pr-2 ${
            isVisible 
              ? `translate-y-0 opacity-100 delay-300` 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[3]}
            alt="Construction update 4"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    );
  };

  const TimelineIcon = ({ isVisible, bgColor = 'bg-blue-500' }) => (
    <div
      className={`w-16 h-16 ${bgColor} rounded-full transform transition-all duration-1000 ${
        isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
      }`}
    >
    </div>
  );

  // Updated image arrays to match the layouts
  const constructionImages = [
    devConstruction1,
    devConstruction2,
    devConstruction3,
    devConstruction4,
    devConstruction5,
  ];

  const constructionImages2 = [
    devConstruction6,
    devConstruction7,
    devConstruction8,
    devConstruction9,
    devConstruction10
  ];

  const constructionImages3 = [
    devConstruction11,
    devConstruction12,
    devConstruction13,
    devConstruction14
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <NavBar logo={customLogo} menu={customMenu} shadow='shadow-md'/>

      {/* Header */}
      <div className="text-[#822e27] pt-28 lg:pt-32 px-8 lg:px-24 mb-12 lg:mb-4">
        <h1 className="text-4xl lg:text-7xl font-bold lg:font-semibold mb-2 animate-fade-in">Development Updates</h1>
        <p className="text-2xl lg:text-4xl font-semibold animate-fade-in-delay">As at June 2025</p>
      </div>

      {/* Timeline Updates */}
      <div className="space-y-24 pb-24">
        
        {/* 21st June Update - AKH1 Layout */}
        <div id="update-21" className="update-section flex gap-12 px-8 lg:px-24 py-8 min-h-screen">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-start">
            <div className={`space-y-4 my-auto transform transition-all duration-700 delay-300 text-[#822e27] ${
              visibleSections.has('update-21') ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
                <div className='flex items-start'>
                    <div className='my-auto'>
                        <TimelineIcon 
                          isVisible={visibleSections.has('update-21')} 
                          bgColor="bg-[#6ca2e3]" 
                        />
                    </div>
                    <div className='pl-4 space-y-2'>
                        <h2 className='text-3xl font-bold'>21st June</h2>
                        <p className=" text-lg leading-relaxed">
                          We are casting the roof slab now with treated concrete. Casting 
                          of the roof slab and capping the retainwall beams will be completed 
                          tomorrow.
                        </p>
                        <p className="text-lg leading-relaxed">
                          We will commence the gable walls from next week.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Electrical piping has been completed, mechanical piping still 
                          ongoing almost completed. Gate house/fence and water 
                          treatment room at 50% level.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='my-auto mx-auto'>
                <AKH1ImageGallery 
                  images={constructionImages} 
                  isVisible={visibleSections.has('update-21')}
                />
            </div>
          </div>
        </div>

        {/* 14th June Update - AKH2 Layout */}
        <div id="update-14" className="update-section flex gap-12 bg-[#822e27] text-[#fbfbfb] px-8 lg:px-24 py-8 min-h-screen">
            
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-start">
            <div className={`space-y-4 my-auto transform transition-all duration-700 delay-300 text-[#fbfbfb] ${
              visibleSections.has('update-14') ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
                <div className='flex items-start'>
                    <div className='my-auto'>
                        <TimelineIcon 
                          isVisible={visibleSections.has('update-14')} 
                          bgColor="bg-[#fbfbfb]" 
                        />
                    </div>
                    <div className='pl-4 space-y-2'>
                        <h2 className='text-3xl font-bold'>14th June</h2>
                        <p className="text-lg leading-relaxed">
                          Reinforcements to roof slab completed, cover to concrete 
                          slab ongoing. Services to roof also electrical and 
                          mechanical installations to roof also ongoing and almost 
                          completed for next week.
                        </p>
                        <p className="text-lg leading-relaxed">
                          First fix piping work for electrical and mechanical services 
                          are ongoing for the entire building.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Gate house and water treatment house has commenced 
                          to slab level.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='my-auto mx-auto'>
                <AKH2ImageGallery 
                  images={constructionImages2} 
                  isVisible={visibleSections.has('update-14')}
                />
            </div>
          </div>
        </div>

        {/* 5th June Update - AKH3 Layout */}
        <div id="update-5" className="update-section flex gap-12 px-8 lg:px-24 py-8 min-h-screen">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-start">
            <div className={`space-y-4 my-auto transform transition-all duration-700 delay-300 text-[#822e27] ${
              visibleSections.has('update-5') ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
                <div className='flex items-start'>
                    <div className='my-auto'>
                        <TimelineIcon 
                          isVisible={visibleSections.has('update-5')} 
                          bgColor="bg-[#822e27]" 
                        />
                    </div>
                    <div className='pl-4 space-y-2'>
                        <h2 className='text-3xl font-bold'>5th June</h2>
                        <p className="text-lg leading-relaxed">
                          Reinforcements to roof slab will be completed by weekend. 
                          Service pipes will be installed by next week and casting will be 
                          done before next weekend.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='my-auto mx-auto'>
                <AKH3ImageGallery 
                  images={constructionImages3} 
                  isVisible={visibleSections.has('update-5')}
                />
            </div>
          </div>
        </div>
        
      </div>

      {/* Navigation */}
      <div className='lg:-mt-40 ' onClick={()=>navigate('/realty')}>
        <div className='flex space-x-2 justify-end items-center px-8 lg:px-24 py-4'>
            <span className='w-20 border-b-2 text-[#822e27] font-semibold text-xl border-[#822e27] pb-1'>PREV</span>
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center cursor-pointer">
                <img src={redDirectArrow} alt="red-direct-arrow" />
            </div>
        </div>
      </div>

      {/* Footer */}
      <FooterBox mainBgColor='bg-[#822e27]' mainTextColor='text-white' footerTextColor='text-[#822e27]' footerBgColor='bg-white' logo={customFooterLogo}/>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default DevUpdatesPage;