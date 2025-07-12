import realtyImageGroup from "../assets/realtyImageGroup.png";
import realtyImageGroup2 from "../assets/realtyImageGroup2.png";
import directArrow from "../assets/directArrow.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'; // Import React and useState

const Features = () => {
  const navigate = useNavigate();
  const [image2Loaded, setImage2Loaded] = useState(false); // State for realtyImageGroup2 loading
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="min-h-screen">
      <section className="background text-white">
        {/* Mobile view */}
        <div className="lg:hidden py-12">
          <h1 className="text-4xl font-semibold mb-6 px-8">REALTY</h1>
          
          {/* Features in two columns */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8 px-8">
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <span>Spacious</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <span>Home security</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <span>Pre wired AC</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <span>Home Automation</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <span>Maid quaters</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <span>Dedicated laundry space</span>
            </div>
          </div>
          
          {/* Mobile image grid */}
          <div className="mb-8 w-full">
            <div className="h-fit w-full relative flex items-center justify-center"> {/* Added relative, flex, items-center, justify-center */}
              {!image2Loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 z-10">
                  {/* Simple loading spinner - replace with a proper spinner if needed */}
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                </div>
              )}
              <img 
                src={realtyImageGroup2} 
                alt="Wardrobe" 
                className={`w-full h-full object-cover ${image2Loaded ? '' : 'hidden'}`} // Hide image until loaded
                onLoad={() => setImage2Loaded(true)} // Set loaded to true on load
                onError={() => setImage2Loaded(true)} // Handle error by showing content anyway or another fallback
              />
            </div>
          </div>
          
          {/* Explore button */}
          <div className="flex justify-end items-center px-8" onClick={()=>navigate('/realty')}>
            <span className="mr-4 font-medium border-b-2 border-white pb-1">EXPLORE REALTY</span>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <img src={directArrow} alt="arrow-direction" className="w-full"/>
            </div>
          </div>
        </div>
        
        {/* Desktop view */}
        <div className="hidden lg:block">
          <div className="mx-auto">
            <div className="flex flex-row">
              <div className="space-y-6 w-1/2 flex flex-col justify-center items-start xl:px-40 px-20">
                <h1 className="text-6xl font-semibold">REALTY</h1>
                <ul className="space-y-4">
                  <li>&nbsp;• Spacious</li>
                  <li>&nbsp;• Pre wired AC</li>
                  <li>&nbsp;• Maid Quarters</li>
                  <li>&nbsp;• Home Security</li>
                  <li>&nbsp;• Home Automation</li>
                  <li>&nbsp;• Dedicated Laundry Space</li>
                </ul>
                <div className="inline-flex items-center pb-2 group cursor-pointer">
                  <span className="mr-4 font-semibold border-b-2 border-white w-36 pb-1" onClick={()=>navigate('/realty')}>EXPLORE REALTY</span>
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                    <img src={directArrow} alt="arrow-direction"/>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 z-10">
                    {/* Simple loading spinner - replace with a proper spinner if needed */}
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                  </div>
                )}
                <img 
                  src={realtyImageGroup} 
                  alt="group of images" 
                  className={`w-full h-full object-cover ${imageLoaded ? '' : 'hidden'}`} // Hide image until loaded
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageLoaded(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;