import React, { useState, useEffect } from 'react';
import directArrow from '../assets/directArrow.svg';
import devUpdateImg1 from '../assets/devUpdateImg1.png';
import devUpdateImg2 from '../assets/devUpdateImg2.png';
import devUpdateImg3 from '../assets/devUpdateImg3.png';
import { useNavigate } from 'react-router-dom';

const DevUpdates = () => {

    const navigate = useNavigate();

    const devUpdateImages = [
        devUpdateImg1,
        devUpdateImg2,
        devUpdateImg3
    ];

    const [currentDevUpdateImage, setCurrentDevUpdateImage] = useState(0);

    // UseEffect for automatic image rotation for Development Updates section
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentDevUpdateImage((prev) => (prev + 1) % devUpdateImages.length);
        }, 5000);
        return () => clearInterval(interval);
      }, [devUpdateImages.length]);
      
      // Handle manual image selection
      const handleImageClick = (index) => {
        setCurrentDevUpdateImage(index);
      };

  return (
    <div>
      {/* Development Updates Section */}
      <section className="w-full bg-[#822e27] text-white min-h-screen flex flex-col lg:items-center lg:justify-center">
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col lg:flex-row items-center lg:space-x-24">
          <div className="lg:w-1/3 mb-8 lg:mb-0 p-12 xl:ml-12">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8">DEVELOPMENT UPDATES</h2>
            <p className="mb-8">
              Formwork to roof slab is ongoing to be completed next week. Reinforcement to roof slab also commenced to be completed next week as well. 
              Electrical and mechanical piping to commence next week. Scaffolding in place for the commencement of finishes
            </p>
            <div className="inline-flex items-center pb-2 group cursor-pointer" onClick={()=>navigate('/dev-updates')}>
              <span className="mr-4 font-medium border-b-2 border-white w-24 pb-1" >SEE MORE</span>
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <img src={directArrow} alt="arrow-direction" className="w-full"/>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 pl-2">
            <div>
              <img 
                src={devUpdateImages[currentDevUpdateImage]}
                alt="Development update" 
                className="w-full h-[600px] object-cover transition-all duration-500 border-bottom-left-rounded"
              />
            </div>
            <div className='grid grid-cols-2 gap-4 mt-8'>
              {devUpdateImages.slice(1).map((img, index) => (
                <div 
                  key={index} 
                  className={`cursor-pointer overflow-hidden ${currentDevUpdateImage === index+1 ? 'ring-2 ring-[#fbfbfb] border-top-left-rounded' : ''}`}
                  onClick={() => handleImageClick(index + 1)}
                >
                  <img 
                    src={img}
                    alt={`Property detail ${index + 1}`} 
                    className="w-full lg:h-80 object-cover transition-all hover:scale-100 duration-300 border-top-left-rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col w-full">
          {/* Main Image at Top */}
          <div className="px-6 pb-8">
            <img 
              src={devUpdateImages[currentDevUpdateImage]}
              alt="Development update" 
              className="w-full h-72 object-cover transition-all duration-500 border-bottom-left-rounded"
            />
          </div>

          {/* Grid of Two Images at Bottom */}
          <div className="px-6 pb-8">
            <div className='grid grid-cols-2 gap-4'>
              {devUpdateImages.slice(1).map((img, index) => (
                <div 
                  key={index} 
                  className={`cursor-pointer overflow-hidden ${currentDevUpdateImage === index+1 ? 'ring-2 ring-white border-top-left-rounded' : ''}`}
                  onClick={() => handleImageClick(index + 1)}
                >
                  <img 
                    src={img}
                    alt={`Development progress ${index + 1}`} 
                    className="w-full h-52 object-cover transition-all hover:scale-100 duration-300 border-top-left-rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Text Content in Middle */}
          <div className="px-6 py-8">
            <h2 className="text-4xl font-semibold leading-tight mb-6">DEVELOPMENT UPDATES</h2>
            <p className="mb-6 text-sm leading-relaxed">
              Formwork to roof slab is ongoing to be completed next week. Reinforcement to roof slab also commenced to be completed next week as well. 
              Electrical and mechanical piping to commence next week. Scaffolding in place for the commencement of finishes
            </p>
          </div>

          {/* SEE MORE Button at Bottom Center */}
          <div className="flex justify-end items-center pb-8 group cursor-pointer px-6" onClick={()=>navigate('/dev-updates')}>
            <span className="mr-4 font-medium border-b-2 border-white w-20 pb-1 text-sm">SEE MORE</span>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <img src={directArrow} alt="arrow-direction" className="w-10"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DevUpdates