// May1 Layout - Single large image with 2 smaller images (3 total)
const May1ImageGallery = ({ images, isVisible }) => {
  return (
    <div className="grid grid-cols-2 gap-2 h-fit">
      {/* Left - Large image */}
      <div
        className={`overflow-hidden rounded-tl-4xl rounded-br-4xl transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100 delay-0' : 'translate-y-8 opacity-0'
        }`}
      >
        <img
          src={images[0]}
          alt="May construction update 1"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      {/* Right - 2 smaller images stacked */}
      <div className="grid grid-rows-2 gap-4">
        <div
          className={`overflow-hidden rounded-tr-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[1]}
            alt="May construction update 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div
          className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[2]}
            alt="May construction update 3"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default May1ImageGallery;