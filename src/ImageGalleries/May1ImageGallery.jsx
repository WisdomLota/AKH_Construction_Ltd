// May 30th Layout - Single large image on top with 2 smaller images below (3 total)
const May1ImageGallery = ({ images, isVisible }) => {
  return (
    <div className="flex flex-col gap-4 lg:h-160">
      {/* Top - Large image */}
      <div
        className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100 delay-0' : 'translate-y-8 opacity-0'
        }`}
      >
        <img
          src={images[0]} // Assuming images[0] is the large top image
          alt="May construction update 1"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      {/* Bottom - 2 smaller images side-by-side */}
      <div className="grid grid-cols-2 gap-4">
        <div
          className={`overflow-hidden rounded-tl-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[1]} // Assuming images[1] is the bottom-left image
            alt="May construction update 2"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div
          className={`overflow-hidden rounded-tl-4xl transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-8 opacity-0'
          }`}
        >
          <img
            src={images[2]} // Assuming images[2] is the bottom-right image
            alt="May construction update 3"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default May1ImageGallery;