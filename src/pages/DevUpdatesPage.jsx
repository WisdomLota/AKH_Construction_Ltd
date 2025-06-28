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

  const ImageGallery = ({ images, isVisible, layout = 'grid' }) => {
    if (layout === 'grid') {
      return (
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                isVisible 
                  ? `translate-y-0 opacity-100 delay-${index * 150}` 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Construction update ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      );
    }

    // Staggered layout for middle section
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4 h-32">
          {images.slice(0, 3).map((img, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                isVisible 
                  ? `translate-x-0 opacity-100 delay-${index * 100}` 
                  : index === 1 ? 'translate-x-8 opacity-0' : 'translate-x-(-8) opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Construction update ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {images.slice(3).map((img, index) => (
            <div
              key={index + 3}
              className={`overflow-hidden rounded-lg shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                isVisible 
                  ? `translate-y-0 opacity-100 delay-${(index + 3) * 100}` 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Construction update ${index + 4}`}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
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

  // Sample construction images (using placeholder images)
  const constructionImages = [
    devConstruction1,
    devConstruction2,
    devConstruction3,
    devConstruction4,
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
      <NavBar logo={customLogo} menu={customMenu} shadow='shadow-xs'/>

      {/* Header */}
      <div className="text-[#822e27] pt-28 lg:pt-32 px-8 lg:px-24 mb-12 lg:mb-4">
        <h1 className="text-4xl lg:text-7xl font-bold lg:font-semibold mb-2 animate-fade-in">Development Updates</h1>
        <p className="text-2xl lg:text-4xl font-semibold animate-fade-in-delay">As at June 2025</p>
      </div>

      {/* Timeline Updates */}
      <div className="space-y-24 pb-24">
        
        {/* 21st June Update */}
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
                <ImageGallery 
                  images={constructionImages} 
                  isVisible={visibleSections.has('update-21')}
                  layout="grid"
                />
            </div>
          </div>
        </div>

        {/* 14th June Update */}
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
                <ImageGallery 
                  images={constructionImages2} 
                  isVisible={visibleSections.has('update-14')}
                  layout="staggered"
                />
            </div>
          </div>
        </div>

        {/* 5th June Update */}
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
                <ImageGallery 
                  images={constructionImages3} 
                  isVisible={visibleSections.has('update-5')}
                  layout="grid"
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