import React, { useState, useEffect } from 'react';
import Features from './RealtyFeatures';
import virtualTourImg from '../assets/virtualTourImg.png';
import directArrow from '../assets/directArrow.svg';
import blueDirectArrow from '../assets/blueDirectArrow.svg';
import trendingRealtyImg1 from '../assets/trendingRealtyImg1.png';
import trendingRealtyImg2 from '../assets/trendingRealtyImg2.png';
import trendingRealtyImg3 from '../assets/trendingRealtyImg3.png';
import trendingRealtyImg4 from '../assets/trendingRealtyImg4.png';
import trendingRealtyImg5 from '../assets/trendingRealtyImg5.png';
import comingSoonImg from '../assets/comingSoonImg.png';
import homeOwner from '../assets/homeOwner.png';
import { useNavigate } from 'react-router-dom';

const MidSection = () => {
  const navigate = useNavigate();

  const [loadVirtualImage, setLoadVirtualImage] = useState(false);
  
  // Array of all trending realty images
  const trendingImages = [
    trendingRealtyImg1,
    trendingRealtyImg2,
    trendingRealtyImg3,
    trendingRealtyImg4,
    trendingRealtyImg5
  ];

  // Array of all coming soon images
  const comingSoonImages = [
    comingSoonImg,
    trendingRealtyImg5,
    trendingRealtyImg4,
    trendingRealtyImg3,
    trendingRealtyImg2
  ];
  
  // State to track the currently displayed main image
  const [currentMainImage, setCurrentMainImage] = useState(0);
  
  // UseEffect for automatic image rotation for TrendingRealty and ComingSoon sections
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMainImage((prev) => (prev + 1) % trendingImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [trendingImages.length]);

  // Handle manual image selection
  const handleImageClick = (index) => {
    setCurrentMainImage(index);
  };
  
  return (
    <div className="w-full">
      {/* Virtual Reality Tour Section */}
      <section className="w-full background text-white py-12 min-h-screen flex flex-col lg:items-center lg:justify-center">
        <div className="px-8 lg:px-16 flex flex-col lg:flex-row items-center lg:space-x-28 lg:py-12">
          <div className="lg:w-1/3 mb-4 lg:mb-0 xl:ml-8">
            <h2 className="text-4xl lg:text-6xl font-semibold mb-8">VIRTUAL REALITY TOUR</h2>
            <p className="mb-8">
              Step into the future of home buying with AKHI Realty! 
              Experience our cutting-edge VR technology and explore 
              stunning, modernized homes from the comfort of your own 
              space.
            </p>
            <p className="mb-8">
              Our VR tours allow you to virtually walk through potential homes, 
              giving you a feel for the beauty and aesthetics we proudly offer—
              without any hassle.
            </p>
            <div className="hidden lg:inline-flex items-center pb-2 group cursor-pointer" onClick={()=>navigate('/realty')}>
              <span className="mr-4 font-medium border-b-2 border-white w-28 pb-1" >EXPLORE VR</span>
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <img src={directArrow} alt="arrow-direction" className="w-full"/>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 ">
            <div className="relative border-t-12 border-r-12 border-white">
              {!loadVirtualImage && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 z-10">
                  {/* Simple loading spinner - replace with a proper spinner if needed */}
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              )}
              <img 
                src={virtualTourImg}
                alt="Modern home virtual tour" 
                className={`w-full h-auto object-cover rounded-lg relative z-10 ${loadVirtualImage ? "" : "hidden"}`}
                onLoad={() => setLoadVirtualImage(true)}
                onError={() => setLoadVirtualImage(true)}
              />
            </div>
          </div>  
        </div>
        {/*Mobile view only */}
        <div className="lg:hidden flex justify-end items-center px-8 py-2 group cursor-pointer mt-2" onClick={()=>navigate('/realty')}>
            <span className="mr-4 font-medium border-b-2 border-white w-28 pb-1" >EXPLORE VR</span>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <img src={directArrow} alt="arrow-direction" className="w-full"/>
            </div>
        </div>
      </section>

      {/* Trending Realty Section */}
      <section className="w-full bg-white py-8 min-h-screen flex flex-col lg:items-center lg:justify-center">
        <div className="px-4 lg:px-8 text">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-24 lg:py-12">
            <div className="lg:w-1/3 mb-4 lg:mb-0 p-4 xl:ml-12">
              <h2 className="text-6xl xl:text-8xl font-semibold mb-4">TRENDING REALTY</h2>
              <p className="mb-4">
                Our latest collection of modernized homes boasts stunning 
                aesthetics and unparalleled convenience. These highly sought-
                after units are selling fast, and you won't want to miss out.
              </p>
              <div className="hidden lg:inline-flex items-center pb-2 group cursor-pointer text-[#6ca2e3]" onClick={()=>navigate('/realty')}>
                <span className="mr-4 font-medium border-b-2 border-[#6ca2e3] w-36 pb-1">EXPLORE REALTY</span>
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                    <img src={blueDirectArrow} alt="arrow-direction" className="w-full"/>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 p-4 xl:mr-8 lg:ml-12">
              <div className="space-y-4">
                <div className="overflow-hidden transition-all duration-500 w-full h-full lg:h-120 rounded-tl-4xl mb-8">
                  <img 
                    src={trendingImages[currentMainImage]}
                    alt="Trending property" 
                    className="w-full h-full  object-cover transition-all duration-500"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {trendingImages.slice(1).map((img, index) => (
                    <div 
                      key={index} 
                      className={`cursor-pointer overflow-hidden ${currentMainImage === index+1 ? 'ring-2 ring-[#6ca2e3]' : ''}`}
                      onClick={() => handleImageClick(index)}
                    >
                      <img 
                        src={img}
                        alt={`Property detail ${index + 1}`} 
                        className="w-full h-auto object-cover transition-all hover:scale-105 duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Mobile view only */}
        <div className="flex lg:hidden justify-end items-center px-8 py-2 mt-2 group cursor-pointer text-[#6ca2e3]" onClick={()=>navigate('/realty')}>
          <span className="mr-4 font-medium border-b-2 border-[#6ca2e3] w-36 pb-1" >EXPLORE REALTY</span>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <img src={blueDirectArrow} alt="arrow-direction" className="w-full"/>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features/>

      {/* Coming Soon Section */}
      <section className="w-full bg-white py-8 min-h-screen flex flex-col lg:items-center lg:justify-center">
        <div className="px-4 lg:px-8 text">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-24 lg:py-12">
            <div className="lg:w-1/3 mb-4 lg:mb-0 p-4 xl:ml-12">
              <h2 className="text-6xl xl:text-8xl font-semibold mb-4">COMING SOON!!!</h2>
              <p className="mb-4">
                Exciting news! A brand-new addition to our real estate portfolio is on the horizon, bringing contemporary design and effortless luxury. 
                Demand is already building, so stay ahead and secure your dream home before it's too late!
              </p>
              <div className="hidden lg:inline-flex items-center pb-2 group cursor-pointer text-[#6ca2e3]" onClick={()=>navigate('/realty')}>
                <span className="mr-4 font-medium border-b-2 border-[#6ca2e3] w-36 pb-1">EXPLORE REALTY</span>
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                    <img src={blueDirectArrow} alt="arrow-direction" className="w-full"/>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 p-4 xl:mr-8 lg:ml-12">
              <div className="space-y-4">
                <div className="overflow-hidden transition-all duration-500 w-full h-full lg:h-120 rounded-tl-4xl mb-8">
                  <img 
                    src={comingSoonImages[currentMainImage]}
                    alt="Trending property" 
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {comingSoonImages.slice(1).map((img, index) => (
                    <div 
                      key={index} 
                      className={`cursor-pointer overflow-hidden ${currentMainImage === index+1 ? 'ring-2 ring-[#6ca2e3]' : ''}`}
                      onClick={() => handleImageClick(index)}
                    >
                      <img 
                        src={img}
                        alt={`Property detail ${index + 1}`} 
                        className="w-full h-auto object-cover transition-all hover:scale-105 duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Mobile view only */}
        <div className="flex lg:hidden justify-end items-center px-8 py-2 mt-2 group cursor-pointer text-[#6ca2e3]" onClick={()=>navigate('/realty')}>
          <span className="mr-4 font-medium border-b-2 border-[#6ca2e3] w-36 pb-1" >EXPLORE REALTY</span>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <img src={blueDirectArrow} alt="arrow-direction" className="w-full"/>
          </div>
        </div>
      </section>



      {/* Become a Home Owner Section */}
      <section className="w-full bg-[#822e27] text-white py-16 min-h-screen flex flex-col lg:items-center lg:justify-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-24 lg:py-12">
          <div className="lg:w-1/3 mb-8 lg:mb-0 p-12 xl:ml-12">
            <h2 className="text-4xl lg:text-6xl font-semibold mb-8">BECOME A HOME OWNER TODAY</h2>
            <p className="mb-8">
              Own your dream home with AKH Realty today! Our modernized 
              homes are designed to match your style and enhance your 
              lifestyle. With a seamless online process, owning a home has 
              never been easier. Don't miss out—become a homeowner today!
            </p>
            <div className="hidden lg:inline-flex items-center pb-2 group cursor-pointer" onClick={()=>navigate('/realty')}>
              <span className="mr-4 font-medium border-b-2 border-white w-36 pb-1" >EXPLORE REALTY</span>
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <img src={directArrow} alt="arrow-direction" className="w-full"/>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 pl-2">
            <img 
              src={homeOwner}
              alt="Real estate agent with new homeowners" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        {/*Mobile view only */}
        <div className="lg:hidden flex justify-end items-center px-8 py-2 group cursor-pointer mt-2" onClick={()=>navigate('/realty')}>
          <span className="mr-4 font-medium border-b-2 border-white w-36 pb-1" >EXPLORE REALTY</span>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <img src={directArrow} alt="arrow-direction" className="w-full"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MidSection;