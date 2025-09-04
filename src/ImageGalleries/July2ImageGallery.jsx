// 18th July AKH1 Layout - 5 images with selective rounded corners and varying sizes
const July2ImageGallery = ({ images, isVisible }) => {
  return (
    <div className="grid grid-cols-2 gap-2 h-160 my-auto space-x-2 py-4">
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
            alt="July 18 Image 1"
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
            alt="July 18 Image 2"
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

export default July2ImageGallery;