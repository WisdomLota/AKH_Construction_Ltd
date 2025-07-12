// May3 Layout - 4 images in a 2x2 grid
const May3ImageGallery = ({ images, isVisible }) => {
  return (
    <div className="grid grid-cols-2 gap-2 h-fit">
      <div
        className={`overflow-hidden rounded-tl-4xl transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100 delay-0' : 'translate-y-8 opacity-0'
        }`}
      >
        <img
          src={images[0]}
          alt="May 14 update 1"
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
          alt="May 14 update 2"
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
          alt="May 14 update 3"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div
        className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-8 opacity-0'
        }`}
      >
        <img
          src={images[3]}
          alt="May 14 update 4"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default May3ImageGallery;