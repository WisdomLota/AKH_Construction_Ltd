// May 24th Layout - Custom layout with 5 images
const May2ImageGallery = ({ images, isVisible }) => {
  return (
    <div className="flex flex-col gap-4 lg:h-200">
      {/* Top row - 2 images */}
      <div className="grid grid-cols-2 gap-4">
        <div
          className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-0' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[0]} // Assuming images[0] is the top-left image
            alt="May 24 update 1"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div
          className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[1]} // Assuming images[1] is the top-right image
            alt="May 24 update 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      
      {/* Middle row - 1 large image */}
      <div
        className={`overflow-hidden transform transition-all duration-700 w-full flex justify-end${ // rounded-4xl applies to all corners
          isVisible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-8 opacity-0'
        }`}
      >
        <img
          src={images[2]} // Assuming images[2] is the large middle image
          alt="May 24 update 3"
          className="ml-auto w-5/6 h-full rounded-tl-4xl object-cover transition-transform duration-500 hover:scale-100"
        />
      </div>

      {/* Bottom row - 2 images */}
      <div className="grid grid-cols-2 gap-4">
        <div
          className={`overflow-hidden rounded-tl-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[3]} // Assuming images[3] is the bottom-left image
            alt="May 24 update 4"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div
          className={`overflow-hidden rounded-tr-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-400' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[4]} // Assuming images[4] is the bottom-right image
            alt="May 24 update 5"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default May2ImageGallery;