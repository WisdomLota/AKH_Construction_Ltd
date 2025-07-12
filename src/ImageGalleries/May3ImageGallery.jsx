// May 14th Layout - Custom layout with 4 images
const May3ImageGallery = ({ images, isVisible }) => {
  return (
    <div className="flex flex-col gap-4 lg:h-200">
      {/* Top - Large image */}
      <div
        className={`overflow-hidden rounded-tl-4xl transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100 delay-0' : 'translate-y-8 opacity-0'
        }`}
      >
        <img
          src={images[0]} // Assuming images[0] is the large top image
          alt="May 14 update 1"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      {/* Middle row - 2 smaller images side-by-side */}
      <div className="grid grid-cols-2 gap-4">
        <div
          className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[1]} // Assuming images[1] is the middle-left image
            alt="May 14 update 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div
          className={`overflow-hidden rounded-tr-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[2]} // Assuming images[2] is the middle-right image
            alt="May 14 update 3"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Bottom - Large image */}
      <div
        className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-8 opacity-0'
        }`}
      >
        <img
          src={images[3]} // Assuming images[3] is the large bottom image
          alt="May 14 update 4"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default May3ImageGallery;