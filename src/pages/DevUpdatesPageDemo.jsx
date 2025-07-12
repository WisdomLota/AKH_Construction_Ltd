import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar"
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
// Add more construction images as needed for May and April
import mayConstruction1 from '../assets/devConstruction1.png';
import mayConstruction2 from '../assets/devConstruction2.png';
import mayConstruction3 from '../assets/devConstruction3.png';
import mayConstruction4 from '../assets/devConstruction4.png';
import mayConstruction5 from '../assets/devConstruction5.png';
import mayConstruction6 from '../assets/devConstruction6.png';
import mayConstruction7 from '../assets/devConstruction7.png';
import mayConstruction8 from '../assets/devConstruction8.png';
import mayConstruction9 from '../assets/devConstruction9.png';
import mayConstruction10 from '../assets/devConstruction10.png';
import mayConstruction11 from '../assets/devConstruction11.png';
import mayConstruction12 from '../assets/devConstruction12.png';
import mayConstruction13 from '../assets/devConstruction13.png';
import mayConstruction14 from '../assets/devConstruction4.png';
import mayConstruction15 from '../assets/devConstruction5.png';
import mayConstruction16 from '../assets/devConstruction6.png';
import mayConstruction17 from '../assets/devConstruction7.png';

import aprilConstruction1 from '../assets/devConstruction1.png';
import aprilConstruction2 from '../assets/devConstruction2.png';
import aprilConstruction3 from '../assets/devConstruction3.png';
import aprilConstruction4 from '../assets/devConstruction4.png';
import aprilConstruction5 from '../assets/devConstruction5.png';
import aprilConstruction6 from '../assets/devConstruction6.png';
import aprilConstruction7 from '../assets/devConstruction7.png';
import aprilConstruction8 from '../assets/devConstruction8.png';
import aprilConstruction9 from '../assets/devConstruction9.png';
import aprilConstruction10 from '../assets/devConstruction10.png';
import aprilConstruction11 from '../assets/devConstruction11.png';
import aprilConstruction12 from '../assets/devConstruction12.png';
import aprilConstruction13 from '../assets/devConstruction13.png';
import aprilConstruction14 from '../assets/devConstruction14.png';
import aprilConstruction15 from '../assets/devConstruction5.png';

import { useNavigate } from 'react-router-dom';

const DevUpdatesPage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentMonth, setCurrentMonth] = useState('June'); // Default to June
  const navigate = useNavigate();

  // Month configuration
  const monthConfig = {
    June: {
      title: 'Development Updates',
      subtitle: 'As at June 2025',
      updates: [
        {
          id: 'update-21',
          date: '21st June',
          content: [
            'We are casting the roof slab now with treated concrete. Casting of the roof slab and capping the retainwall beams will be completed tomorrow.',
            'We will commence the gable walls from next week.',
            'Electrical piping has been completed, mechanical piping still ongoing almost completed. Gate house/fence and water treatment room at 50% level.'
          ],
          images: [devConstruction1, devConstruction2, devConstruction3, devConstruction4, devConstruction5],
          layout: 'AKH1',
          bgColor: 'bg-white',
          textColor: 'text-[#822e27]',
          iconColor: 'bg-[#6ca2e3]'
        },
        {
          id: 'update-14',
          date: '14th June',
          content: [
            'Reinforcements to roof slab completed, cover to concrete slab ongoing. Services to roof also electrical and mechanical installations to roof also ongoing and almost completed for next week.',
            'First fix piping work for electrical and mechanical services are ongoing for the entire building.',
            'Gate house and water treatment house has commenced to slab level.'
          ],
          images: [devConstruction6, devConstruction7, devConstruction8, devConstruction9, devConstruction10],
          layout: 'AKH2',
          bgColor: 'bg-[#822e27]',
          textColor: 'text-[#fbfbfb]',
          iconColor: 'bg-[#fbfbfb]'
        },
        {
          id: 'update-5',
          date: '5th June',
          content: [
            'Reinforcements to roof slab will be completed by weekend. Service pipes will be installed by next week and casting will be done before next weekend.'
          ],
          images: [devConstruction11, devConstruction12, devConstruction13, devConstruction14],
          layout: 'AKH3',
          bgColor: 'bg-white',
          textColor: 'text-[#822e27]',
          iconColor: 'bg-[#822e27]'
        }
      ]
    },
    May: {
      title: 'Development Updates',
      subtitle: 'As at May 2025',
      updates: [
        {
          id: 'update-30',
          date: '30th May',
          content: [
            'Wall reinforcements and roof slab formwork to be completed by weekend. Electrical and mechanical services to be installed by next week.',
            'Ground floor electrical and mechanical services are ongoing and almost completed.'
          ],
          images: [mayConstruction1, mayConstruction2, mayConstruction3, mayConstruction4, mayConstruction5],
          layout: 'May1', // Custom layout for May
          bgColor: 'bg-white',
          textColor: 'text-[#822e27]',
          iconColor: 'bg-[#6ca2e3]'
        },
        {
          id: 'update-24',
          date: '24th May',
          content: [
            'Wall reinforcements to the roof slab complete. Ground floor electrical and mechanical services to be completed by next week.',
            'Ground floor water services are ongoing and almost completed.'
          ],
          images: [mayConstruction6, mayConstruction7, mayConstruction8, mayConstruction9, mayConstruction10, mayConstruction11],
          layout: 'May2',
          bgColor: 'bg-[#822e27]',
          textColor: 'text-[#fbfbfb]',
          iconColor: 'bg-[#fbfbfb]'
        },
        {
          id: 'update-14-may',
          date: '14th May',
          content: [
            'Casting of first floor columns and beams.'
          ],
          images: [mayConstruction12, mayConstruction13, mayConstruction14, mayConstruction15],
          layout: 'May3',
          bgColor: 'bg-white',
          textColor: 'text-[#822e27]',
          iconColor: 'bg-[#822e27]'
        },
        {
          id: 'update-8',
          date: '8th May',
          content: [
            'Foundation work first floor.'
          ],
          images: [mayConstruction16, mayConstruction17],
          layout: 'May4',
          bgColor: 'bg-[#822e27]',
          textColor: 'text-[#fbfbfb]',
          iconColor: 'bg-[#fbfbfb]'
        }
      ]
    },
    April: {
      title: 'Development Updates',
      subtitle: 'As at April 2025',
      updates: [
        {
          id: 'update-27',
          date: '27th April',
          content: [
            'First floor concrete slab has been completed today. We hope to get to the roof slab level in 2weeks time starting from next week.'
          ],
          images: [aprilConstruction1, aprilConstruction2, aprilConstruction3],
          layout: 'April1',
          bgColor: 'bg-white',
          textColor: 'text-[#822e27]',
          iconColor: 'bg-[#822e27]'
        },
        {
          id: 'update-12',
          date: '12th April',
          content: [
            'Reinforcement placement for second floor slab.'
          ],
          images: [aprilConstruction4, aprilConstruction5],
          layout: 'April2',
          bgColor: 'bg-[#822e27]',
          textColor: 'text-[#fbfbfb]',
          iconColor: 'bg-[#fbfbfb]'
        },
        {
          id: 'update-11',
          date: '11th April',
          content: [
            'Form work to second floor slab.'
          ],
          images: [aprilConstruction6, aprilConstruction7, aprilConstruction8, aprilConstruction9],
          layout: 'April3',
          bgColor: 'bg-white',
          textColor: 'text-[#822e27]',
          iconColor: 'bg-[#822e27]'
        }
      ]
    }
  };

  const months = ['June', 'May', 'April'];
  const currentMonthIndex = months.indexOf(currentMonth);
  const hasNext = currentMonthIndex > 0;
  const hasPrev = currentMonthIndex < months.length - 1;

  //scroll triggered animation using Intersection Observer API
  useEffect(() => {
    // Reset visible sections when month changes
    setVisibleSections(new Set());
    
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
  }, [currentMonth]);

  // AKH1 Layout - 5 images (June layout)
  const AKH1ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="grid grid-cols-2 gap-2 min-h-screen my-auto space-x-2">
        <div className="grid grid-rows-2 gap-2 h-152 space-y-4">
          <div className={`overflow-hidden rounded-tl-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-0` : 'translate-y-8 opacity-0'}`}>
            <img src={images[0]} alt="Large Construction Image 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-100` : 'translate-y-8 opacity-0'}`}>
            <img src={images[1]} alt="Large Construction Image 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
        <div className="grid grid-rows-3 gap-2 h-152 space-y-4">
          <div className={`overflow-hidden rounded-tr-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-200` : 'translate-y-8 opacity-0'}`}>
            <img src={images[2]} alt="Small Construction Image 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-300` : 'translate-y-8 opacity-0'}`}>
            <img src={images[3]} alt="Small Construction Image 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-400` : 'translate-y-8 opacity-0'}`}>
            <img src={images[4]} alt="Small Construction Image 3" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </div>
    );
  };

  // AKH2 Layout - 5 images (June layout)
  const AKH2ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="space-y-2 w-full">
        <div className="grid grid-cols-3 gap-2 space-x-2 space-y-2 h-48">
          <div className={`overflow-hidden h-36 xl:mx-auto mt-10 xl:w-48 xl:ml-20 rounded-tl-3xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-0` : 'translate-y-8 opacity-0'}`}>
            <img src={images[0]} alt="Construction update 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className={`overflow-hidden transform rounded-tl-3xl xl:mx-auto transition-all xl:w-40 xl:ml-20 duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-100` : 'translate-y-8 opacity-0'}`}>
            <img src={images[1]} alt="Construction update 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className={`overflow-hidden rounded-tr-3xl transform transition-all xl:w-40 xl:ml-12 pb-2 duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-200` : 'translate-y-8 opacity-0'}`}>
            <img src={images[2]} alt="Construction update 3" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 space-x-2 space-y-2 h-64">
          <div className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-300` : 'translate-y-8 opacity-0'}`}>
            <img src={images[3]} alt="Construction update 4" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-400` : 'translate-y-8 opacity-0'}`}>
            <img src={images[4]} alt="Construction update 5" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </div>
    );
  };

  // AKH3 Layout - 4 images (June layout)
  const AKH3ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="grid grid-cols-2 gap-2 h-120 space-x-2 space-y-2">
        <div className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-0` : 'translate-y-8 opacity-0'}`}>
          <img src={images[0]} alt="Construction update 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
        <div className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-100` : 'translate-y-8 opacity-0'}`}>
          <img src={images[1]} alt="Construction update 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
        <div className={`overflow-hidden rounded-tr-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-200` : 'translate-y-8 opacity-0'}`}>
          <img src={images[2]} alt="Construction update 3" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
        <div className={`overflow-hidden rounded-tl-4xl transform transition-all duration-700 pb-2 pr-2 ${isVisible ? `translate-y-0 opacity-100 delay-300` : 'translate-y-8 opacity-0'}`}>
          <img src={images[3]} alt="Construction update 4" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
      </div>
    );
  };

  // May Layout 1 - Large image on right, small images on left
  const May1ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="grid grid-cols-2 gap-4 h-120">
        <div className="grid grid-rows-2 gap-2">
          <div className={`overflow-hidden rounded-tl-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-0` : 'translate-y-8 opacity-0'}`}>
            <img src={images[0]} alt="Construction update 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-100` : 'translate-y-8 opacity-0'}`}>
            <img src={images[1]} alt="Construction update 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
        <div className={`overflow-hidden rounded-r-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-200` : 'translate-y-8 opacity-0'}`}>
          <img src={images[2]} alt="Construction update 3" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
      </div>
    );
  };

  // May Layout 2 - Six images in custom grid
  const May2ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-2 h-48">
          <div className={`overflow-hidden rounded-tl-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-0` : 'translate-y-8 opacity-0'}`}>
            <img src={images[0]} alt="Construction update 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className={`overflow-hidden rounded-tr-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-100` : 'translate-y-8 opacity-0'}`}>
            <img src={images[1]} alt="Construction update 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
        <div className={`overflow-hidden rounded-2xl transform transition-all duration-700 h-64 ${isVisible ? `translate-y-0 opacity-100 delay-200` : 'translate-y-8 opacity-0'}`}>
          <img src={images[2]} alt="Construction update 3" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
        <div className="grid grid-cols-2 gap-2 h-32">
          <div className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-300` : 'translate-y-8 opacity-0'}`}>
            <img src={images[3]} alt="Construction update 4" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-400` : 'translate-y-8 opacity-0'}`}>
            <img src={images[4]} alt="Construction update 5" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </div>
    );
  };

  // May Layout 3 - Single large image with small images
  const May3ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="space-y-2">
        <div className={`overflow-hidden rounded-t-4xl transform transition-all duration-700 h-80 ${isVisible ? `translate-y-0 opacity-100 delay-0` : 'translate-y-8 opacity-0'}`}>
          <img src={images[0]} alt="Construction update 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
        <div className="grid grid-cols-3 gap-2 h-32">
          <div className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-100` : 'translate-y-8 opacity-0'}`}>
            <img src={images[1]} alt="Construction update 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className={`overflow-hidden rounded-b-2xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-200` : 'translate-y-8 opacity-0'}`}>
            <img src={images[2]} alt="Construction update 3" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-300` : 'translate-y-8 opacity-0'}`}>
            <img src={images[3]} alt="Construction update 4" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </div>
    );
  };

  // May Layout 4 - Two large images
  const May4ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="grid grid-cols-1 gap-4">
        <div className={`overflow-hidden rounded-t-4xl transform transition-all duration-700 h-64 ${isVisible ? `translate-y-0 opacity-100 delay-0` : 'translate-y-8 opacity-0'}`}>
          <img src={images[0]} alt="Construction update 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
        <div className={`overflow-hidden rounded-b-4xl transform transition-all duration-700 h-64 ${isVisible ? `translate-y-0 opacity-100 delay-100` : 'translate-y-8 opacity-0'}`}>
          <img src={images[1]} alt="Construction update 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
      </div>
    );
  };

  // April Layout 1 - Single large image with two small images
  const April1ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="grid grid-cols-2 gap-2 h-120">
        <div className={`overflow-hidden rounded-l-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-0` : 'translate-y-8 opacity-0'}`}>
          <img src={images[0]} alt="Construction update 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className={`overflow-hidden rounded-tr-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-100` : 'translate-y-8 opacity-0'}`}>
            <img src={images[1]} alt="Construction update 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
          <div className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100 delay-200` : 'translate-y-8 opacity-0'}`}>
            <img src={images[2]} alt="Construction update 3" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </div>
    );
  };

  // April Layout 2 - Two large images
  const April2ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="grid grid-cols-1 gap-4">
        <div className={`overflow-hidden rounded-t-4xl transform transition-all duration-700 h-64 ${isVisible ? `translate-y-0 opacity-100 delay-0` : 'translate-y-8 opacity-0'}`}>
          <img src={images[0]} alt="Construction update 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
        <div className={`overflow-hidden rounded-b-4xl transform transition-all duration-700 h-64 ${isVisible ? `translate-y-0 opacity-100 delay-100` : 'translate-y-8 opacity-0'}`}>
          <img src={images[1]} alt="Construction update 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
      </div>
    );
  };

  // April Layout 3 - Single large image
  const April3ImageGallery = ({ images, isVisible }) => {
    return (
      <div className={`overflow-hidden rounded-4xl transform transition-all duration-700 h-120 ${isVisible ? `translate-y-0 opacity-100 delay-0` : 'translate-y-8 opacity-0'}`}>
        <img src={images[0]} alt="Construction update 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>
    );
  };

  const TimelineIcon = ({ isVisible, bgColor = 'bg-blue-500' }) => (
    <div className={`w-16 h-16 ${bgColor} rounded-full transform transition-all duration-1000 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}>
    </div>
  );

  const renderImageGallery = (layout, images, isVisible) => {
    switch (layout) {
      case 'AKH1':
        return <AKH1ImageGallery images={images} isVisible={isVisible} />;
      case 'AKH2':
        return <AKH2ImageGallery images={images} isVisible={isVisible} />;
      case 'AKH3':
        return <AKH3ImageGallery images={images} isVisible={isVisible} />;
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

  const handlePrevMonth = () => {
    if (hasPrev) {
      setCurrentMonth(months[currentMonthIndex + 1]);
    }
  };

  const handleNextMonth = () => {
    if (hasNext) {
      setCurrentMonth(months[currentMonthIndex - 1]);
    }
  };

  const currentConfig = monthConfig[currentMonth];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar 
        customLogo={customLogo} 
        customMenu={customMenu} 
        navigate={navigate} 
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#822e27] mb-4">
            {currentConfig.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {currentConfig.subtitle}
          </p>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button 
              onClick={handlePrevMonth}
              disabled={!hasPrev}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                hasPrev 
                  ? 'bg-[#822e27] text-white hover:bg-[#6d241f] hover:scale-105' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <img 
                src={redDirectArrow} 
                alt="Previous" 
                className={`w-4 h-4 transform rotate-180 ${hasPrev ? 'opacity-100' : 'opacity-50'}`} 
              />
              Previous
            </button>
            
            <div className="flex items-center gap-2">
              {months.map((month, index) => (
                <div
                  key={month}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    month === currentMonth 
                      ? 'bg-[#822e27] scale-125' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNextMonth}
              disabled={!hasNext}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                hasNext 
                  ? 'bg-[#822e27] text-white hover:bg-[#6d241f] hover:scale-105' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next
              <img 
                src={redDirectArrow} 
                alt="Next" 
                className={`w-4 h-4 ${hasNext ? 'opacity-100' : 'opacity-50'}`} 
              />
            </button>
          </div>
          
          {/* Current Month Display */}
          <div className="inline-block bg-[#822e27] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
            {currentMonth} 2025
          </div>
        </div>

        {/* Timeline Updates */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#822e27] to-[#6ca2e3] h-full z-0"></div>
          
          {currentConfig.updates.map((update, index) => {
            const isVisible = visibleSections.has(update.id);
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={update.id}
                id={update.id}
                className={`update-section relative flex items-center mb-20 ${
                  isEven ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Section */}
                <div className={`w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}>
                  <div className={`${update.bgColor} ${update.textColor} p-8 rounded-3xl shadow-xl transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    {/* Date Badge */}
                    <div className={`inline-block ${update.iconColor} ${update.bgColor === 'bg-white' ? 'text-white' : 'text-[#822e27]'} px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                      {update.date}
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      {update.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-base leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Timeline Icon */}
                <div className="w-2/12 flex justify-center z-10">
                  <TimelineIcon isVisible={isVisible} bgColor={update.iconColor} />
                </div>
                
                {/* Image Gallery Section */}
                <div className={`w-5/12 ${isEven ? 'pl-8' : 'pr-8'}`}>
                  {renderImageGallery(update.layout, update.images, isVisible)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <FooterBox 
        customFooterLogo={customFooterLogo} 
        navigate={navigate} 
      />
    </div>
  );
};

export default DevUpdatesPage;