// 14th June AKH2 Layout - 5 images with specific corner rounding patterns
const June3ImageGallery = ({ images, isVisible }) => {
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

export default June3ImageGallery;