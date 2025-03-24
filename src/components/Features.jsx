import realtyImageGroup from "../assets/realtyImageGroup.png";
import realtyImageGroup2 from "../assets/realtyImageGroup2.png";
import directArrow from "../assets/directArrow.svg";
import { useNavigate } from "react-router-dom";

const Features = () => {

  const navigate = useNavigate();

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
            <div className="h-fit w-full">
              <img 
                src={realtyImageGroup2} 
                alt="Wardrobe" 
                className="w-full h-full object-cover"
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
              <div className="space-y-6 w-1/2 flex flex-col justify-center items-start xl:px-48 px-20">
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
                <img 
                  src={realtyImageGroup} 
                  alt="group of images" 
                  className="h-full w-full object-cover"
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