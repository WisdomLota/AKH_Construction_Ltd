import React, { useState, useEffect } from 'react';
import NavBar  from "../components/NavBar"
import FooterBox from '../components/FooterBox'
import customLogo from "../assets/AKHRealtyLogoRed.png";
import customFooterLogo from "../assets/AKHRealtyLogo.png";
import redDirectArrow from '../assets/redDirectArrow.svg';
import redDirectArrow2 from '../assets/redDirectArrow2.svg';
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
import may24Img1 from "../assets/may24_1st.png";
import may24Img2 from "../assets/may24_2nd.png";
import may24Img3 from "../assets/may24_3rd.png";
import may24Img4 from "../assets/may24_4th.png";
import may24Img5 from "../assets/may24_5th.png";
import may14Img1 from "../assets/may14_1st.png";
import may14Img2 from "../assets/may14_2nd.png";
import may14Img3 from "../assets/may14_3rd.png";
import may14Img4 from "../assets/may14_4th.png";
import may8Img1 from "../assets/may8_1st.png";
import may8Img2 from "../assets/may8_2nd.png";
import may8Img3 from "../assets/may8_3rd.png";
import april27Img1 from "../assets/april27_1st.png";
import april27Img2 from "../assets/april27_2nd.png";
import april27Img3 from "../assets/april27_3rd.png";
import april12Img1 from "../assets/april12_1st.png";
import april12Img2 from "../assets/april12_2nd.png";
import april11Img1 from "../assets/april11_1st.png";
import april11Img2 from "../assets/april11_2nd.png"
import { useNavigate } from 'react-router-dom';

const DevUpdatesPage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentMonth, setCurrentMonth] = useState("June");

  const navigate = useNavigate();

  const monthOrder = ["June", "May", "April"];

  const monthConfiguration = {
    June: {
        title: 'Development Updates',
        subtitle: 'As at June 2025',
        updates: [
            {
                id: "update-21",
                date: "21st June",
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
                id: "update-30",
                date: "30th May",
                content: [
                    'Formwork to roof slab is ongoing to be completed next week. Reinforcement to roof slab also commenced to be completed next week as well. Electrical and mechanical piping to commence next week. Scaffolding in place for the commencement of finishes'
                ],
                images: [devConstruction1, devConstruction2, devConstruction3],
                layout: 'May1',
                bgColor: 'bg-white',
                textColor: 'text-[#822e27]',
                iconColor: 'bg-[#6ca2e3]'
            },
            {
              id: 'update-24',
              date: '24th May',
              content: [
                'We have commenced the formwork to the roof slab. Reinforcement works will commence next week. We hope to cast and start completing the gable walls by the following week.'
              ],
              images: [may24Img1, may24Img2, may24Img3, may24Img4, may24Img5],
              layout: 'May2',
              bgColor: 'bg-[#822e27]',
              textColor: 'text-[#fbfbfb]',
              iconColor: 'bg-[#fbfbfb]'
            },
            {
              id: 'update-14-may',
              date: '14th May',
              content: [
                'Casting of 2nd floor columns and lintels'
              ],
              images: [may14Img1, may14Img2, may14Img3, may14Img4],
              layout: 'May3',
              bgColor: 'bg-white',
              textColor: 'text-[#822e27]',
              iconColor: 'bg-[#822e27]'
            },
            {
              id: 'update-8',
              date: '8th May',
              content: [
                'Commencement of 2nd floor block work'
              ],
              images: [may8Img1, may8Img2, may8Img3],
              layout: 'May4',
              bgColor: 'bg-[#822e27]',
              textColor: 'text-[#fbfbfb]',
              iconColor: 'bg-[#fbfbfb]'
            },
            
        ]
    },
    April: {
        title: 'Development Updates',
        subtitle: 'As at April 2025',
        updates: [
            {
                id: "update-27",
                date: "27th April",
                content: [
                    '2nd floor concrete slab has been completed today. We hope to get to the roof slab level in 2weeks time starting from next week.'
                ],
                images: [april27Img1, april27Img2, april27Img3],
                layout: 'April1',
                bgColor: 'bg-white',
                textColor: 'text-[#822e27]',
                iconColor: 'bg-[#6ca2e3]'
            },
            {
              id: 'update-12',
              date: '12th April',
              content: [
                'Reinforcement placement for second floor slab.'
              ],
              images: [april12Img1, april12Img2],
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
              images: [april11Img1, april11Img2],
              layout: 'April3',
              bgColor: 'bg-white',
              textColor: 'text-[#822e27]',
              iconColor: 'bg-[#822e27]'
            },
            
        ]
    },
  }

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

  // May1 Layout - Single large image with 2 smaller images (3 total)
  const May1ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="grid grid-cols-2 gap-2 h-fit">
        {/* Left - Large image */}
        <div
          className={`overflow-hidden rounded-tl-4xl rounded-br-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-0' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[0]}
            alt="May construction update 1"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        {/* Right - 2 smaller images stacked */}
        <div className="grid grid-rows-2 gap-4">
          <div
            className={`overflow-hidden rounded-tr-4xl transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[1]}
              alt="May construction update 2"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div
            className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[2]}
              alt="May construction update 3"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    );
  };

  // May2 Layout - Following the design pattern with 5 images
  const May2ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="space-y-4">
        {/* Top row - 2 images */}
        <div className="grid grid-cols-2 gap-2 h-fit">
          <div
            className={`overflow-hidden rounded-tl-4xl transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100 delay-0' : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[0]}
              alt="May 24 update 1"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div
            className={`overflow-hidden rounded-tr-4xl transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[1]}
              alt="May 24 update 2"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        
        {/* Bottom row - 3 images */}
        <div className="grid grid-cols-3 gap-4 h-fit">
          <div
            className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[2]}
              alt="May 24 update 3"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div
            className={`overflow-hidden transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[3]}
              alt="May 24 update 4"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div
            className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100 delay-400' : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[4]}
              alt="May 24 update 5"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    );
  };

  // May3 Layout - 4 images in a 2x2 grid
  const May3ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="grid grid-cols-2 gap-2 h-fit">
        <div
          className={`overflow-hidden rounded-tl-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-0' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[0]}
            alt="May 14 update 1"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div
          className={`overflow-hidden rounded-tr-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[1]}
            alt="May 14 update 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div
          className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[2]}
            alt="May 14 update 3"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div
          className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[3]}
            alt="May 14 update 4"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    );
  };

  // May4 Layout - 3 images with specific arrangement
  const May4ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="space-y-4">
        {/* Top - Single large image */}
        <div className="h-fit">
          <div
            className={`overflow-hidden rounded-tl-4xl rounded-tr-4xl transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100 delay-0' : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[0]}
              alt="May 8 update 1"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        
        {/* Bottom - 2 images side by side */}
        <div className="grid grid-cols-2 gap-2 h-fit">
          <div
            className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[1]}
              alt="May 8 update 2"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div
            className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-8 opacity-0'
            }`}
          >
            <img
              src={images[2]}
              alt="May 8 update 3"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    );
  };

  // April1 Layout - 3 images with specific arrangement
  const April1ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="grid grid-cols-2 gap-4 h-96">
        {/* Left - Large image */}
        <div
          className={`overflow-hidden rounded-tl-4xl rounded-bl-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-0' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[0]}
            alt="April 27 update 1"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        {/* Right - 2 smaller images stacked */}
        <div
          className={`overflow-hidden rounded-tr-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[1]}
            alt="April 27 update 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div
          className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[2]}
            alt="April 27 update 3"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    );
  };

  // April2 Layout - 2 images side by side
  const April2ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="grid grid-cols-2 gap-4 h-96">
        <div
          className={`overflow-hidden rounded-tl-4xl rounded-bl-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-0' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[0]}
            alt="April 12 update 1"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div
          className={`overflow-hidden rounded-tr-4xl rounded-br-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[1]}
            alt="April 12 update 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    );
  };

  // April3 Layout - 2 images side by side
  const April3ImageGallery = ({ images, isVisible }) => {
    return (
      <div className="grid grid-cols-2 gap-4 h-96">
        <div
          className={`overflow-hidden rounded-tl-4xl rounded-bl-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-0' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[0]}
            alt="April 11 update 1"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div
          className={`overflow-hidden rounded-tr-4xl rounded-br-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[1]}
            alt="April 11 update 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    );
  };

  // Function to render the appropriate image gallery based on layout
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