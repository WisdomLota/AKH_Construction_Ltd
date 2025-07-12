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

export default May2ImageGallery;