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

export default April1ImageGallery;