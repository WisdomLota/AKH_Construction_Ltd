// 9th August AKH2 Layout - 5 images with specific corner rounding patterns
const August5ImageGallery = ({ images, isVisible }) => {
  return (
    <div className="space-y-2 w-full h-full py-4">
      {/* Top row - 2 images with selective rounded corners */}
      <div className="grid grid-cols-3 gap-2 space-x-2 space-y-2 h-48">
        {/* Top left image with rounded top-left corner */}
        <div
          className={`overflow-hidden h-36 xl:mx-auto mt-10 xl:w-48 xl:ml-8  rounded-tl-3xl transform transition-all duration-700 ${
            isVisible 
              ? `translate-y-0 opacity-100 delay-0` 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[0]}
            alt="August 9 update 1"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        {/* Right top image - no rounded corners */}
        <div
          className={`overflow-hidden transform rounded-tl-3xl xl:mx-auto transition-all xl:w-68 lg:w-80 w-48 xl:ml-16 duration-700  ${
            isVisible 
              ? `translate-y-0 opacity-100 delay-100` 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[1]}
            alt="August 9 update 2"
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
            src={images[2]}
            alt="August 9 update 4"
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
            src={images[3]}
            alt="August 9 update 5"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default August5ImageGallery;