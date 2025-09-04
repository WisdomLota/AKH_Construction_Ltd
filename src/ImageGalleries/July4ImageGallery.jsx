// 5th July AKH3 Layout - 4 images with selective rounded corners
const July4ImageGallery = ({ images, isVisible }) => {
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
          alt="July 5 update 1"
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
          alt="July 5 update 2"
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
          alt="July 5 update 3"
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
          alt="July 5 update 4"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default July4ImageGallery;