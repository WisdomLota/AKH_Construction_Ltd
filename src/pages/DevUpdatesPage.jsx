import { useState, useEffect } from 'react';
import NavBar  from "../components/NavBar"
import FooterBox from '../components/FooterBox'
import customLogo from "../assets/AKHRealtyLogoRed.png";
import customFooterLogo from "../assets/AKHRealtyLogo.png";
import redDirectArrow from '../assets/redDirectArrow.svg';
import redDirectArrow2 from '../assets/redDirectArrow2.svg';
import customMenu from "../assets/hamMenuRed.svg";
import May1ImageGallery from "../ImageGalleries/May1ImageGallery.jsx"
import May2ImageGallery from "../ImageGalleries/May2ImageGallery.jsx"
import May3ImageGallery from "../ImageGalleries/May3ImageGallery.jsx"
import May4ImageGallery from "../ImageGalleries/May4ImageGallery.jsx"
import April1ImageGallery from '../ImageGalleries/April1ImageGallery.jsx';
import April2ImageGallery from '../ImageGalleries/April2ImageGallery.jsx';
import April3ImageGallery from '../ImageGalleries/April3ImageGallery.jsx';
import June1ImageGallery from '../ImageGalleries/June1ImageGallery.jsx';
import June2ImageGallery from '../ImageGalleries/June2ImageGallery.jsx';
import June3ImageGallery from '../ImageGalleries/June3ImageGallery.jsx';
import { monthConfiguration } from '../data/monthlyUpdatesData.jsx';


const DevUpdatesPage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentMonth, setCurrentMonth] = useState("June");

  const monthOrder = ["June", "May", "April"];

  // Navigation functions
  const navigateToNextMonth = () => {
    const currentIndex = monthOrder.indexOf(currentMonth);
    const nextIndex = (currentIndex + 1) % monthOrder.length;
    setCurrentMonth(monthOrder[nextIndex]);
    setVisibleSections(new Set()); // Reset visible sections for animation
  };

  const navigateToPrevMonth = () => {
    const currentIndex = monthOrder.indexOf(currentMonth);
    const prevIndex = currentIndex === 0 ? monthOrder.length - 1 : currentIndex - 1;
    setCurrentMonth(monthOrder[prevIndex]);
    setVisibleSections(new Set()); // Reset visible sections for animation
  };

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
  }, [currentMonth]); // Re-run when month changes

  // Function to render the appropriate image gallery based on layout
  const renderImageGallery = (layout, images, isVisible) => {
    switch (layout) {
      case 'June1':
        return <June1ImageGallery images={images} isVisible={isVisible} />;
      case 'June2':
        return <June2ImageGallery images={images} isVisible={isVisible} />;
      case 'June3':
        return <June3ImageGallery images={images} isVisible={isVisible} />;
      case 'May1':
        return <May1ImageGallery images={images} isVisible={isVisible} />;
      case 'May2':
        return <May2ImageGallery images={images} isVisible={isVisible} />;
      case 'May3':
        return <May3ImageGallery images={images} isVisible={isVisible} />;
      case 'May4':
        return <May4ImageGallery images={images} isVisible={isVisible} />;
      case 'April1':
        return <April1ImageGallery images={images} isVisible={isVisible} />;
      case 'April2':
        return <April2ImageGallery images={images} isVisible={isVisible} />;
      case 'April3':
        return <April3ImageGallery images={images} isVisible={isVisible} />;
      default:
        return null;
    }
  };

  const currentMonthData = monthConfiguration[currentMonth];

  const TimelineIcon = ({ bgColor = 'bg-blue-500' }) => (
    <div
      className={`w-12 h-12 ${bgColor} rounded-full transform transition-all duration-1000 scale-100 rotate-0`}
    >
    </div>
  );

  return (
    <div className="min-h-screen">
      <NavBar logo={customLogo} menu={customMenu} shadow='shadow-md'/>
      
      <div className="py-8">
        {/* Header */}
        <div className="text-[#822e27] pt-28 lg:pt-32 mb-12 lg:mb-4 lg:px-24 px-8">
          <h1 className="text-4xl lg:text-7xl font-bold lg:font-semibold mb-2 animate-fade-in">{currentMonthData.title}</h1>
          <p className="text-2xl lg:text-4xl font-semibold animate-fade-in-delay">{currentMonthData.subtitle}</p>
        </div>

        

        {/* Updates Section */}
        <div className="space-y-16">
          {currentMonthData.updates.map((update, index) => {
            const isVisible = visibleSections.has(update.id);
            
            return (
              <div
                key={update.id}
                id={update.id}
                className={`update-section ${update.bgColor} lg:px-24 px-8`}
              >
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-16 items-center min-h-screen">
                  <div className='flex'>
                    <div className='my-auto mr-4'>
                      <TimelineIcon bgColor={`${update.iconColor}`}/>
                    </div>
                    {/* Text Content */}
                    <div className={`space-y-6 ${index % 2 === 0 ? 'xl:order-1' : 'xl:order-2'}`}>
                      <div className="flex items-center space-x-4 mt-8">
                        <h3 className={`text-2xl md:text-3xl font-bold ${update.textColor}`}>
                          {update.date}
                        </h3>
                      </div>

                      <div className="space-y-4">
                        {update.content.map((paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className={`text-base md:text-lg leading-relaxed ${update.textColor} opacity-90`}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image Gallery */}
                  <div className={`${index % 2 === 0 ? 'xl:order-2' : 'xl:order-1'} lg:my-auto lg:flex lg:flex-col lg:justify-center lg:items-center`}>
                    {renderImageGallery(update.layout, update.images, isVisible)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Month Indicator */}
        <div className="flex justify-center mt-16 space-x-2">
          {monthOrder.map((month) => (
            <button
              key={month}
              onClick={() => {
                setCurrentMonth(month);
                setVisibleSections(new Set());
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentMonth === month ? 'bg-[#822e27]' : 'bg-[#822e27] opacity-30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className='flex justify-between mt-24'>
        <div className='lg:-mt-40 cursor-pointer' onClick={navigateToPrevMonth}>
          <div className='flex space-x-2 justify-end items-center px-8 lg:px-24 py-4'>
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center cursor-pointer">
                <img src={redDirectArrow2} alt="red-direct-arrow" />
            </div>
            <span className='w-20 border-b-2 text-[#822e27] font-semibold text-xl border-[#822e27] pb-1'>PREV</span>
          </div>
        </div>
        <div className='lg:-mt-40 cursor-pointer' onClick={navigateToNextMonth}>
          <div className='flex space-x-2 justify-end items-center px-8 lg:px-24 py-4'>
            <span className='w-20 border-b-2 text-[#822e27] font-semibold text-xl border-[#822e27] pb-1'>NEXT</span>
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center cursor-pointer">
                <img src={redDirectArrow} alt="red-direct-arrow" />
            </div>
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