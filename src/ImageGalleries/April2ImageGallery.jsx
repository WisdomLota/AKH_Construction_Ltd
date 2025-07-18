// April 12th Layout - 2 large images stacked vertically
const April2ImageGallery = ({ images, isVisible }) => {
  return (
    <div className="flex flex-col gap-4 lg:h-180"> {/* Changed to flex-col for vertical stacking */}
      {/* Top - Large image */}
      <div
        className={`overflow-hidden rounded-tl-4xl transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100 delay-0' : 'translate-y-8 opacity-0'
        }`}
      >
        <img
          src={images[0]} // Assuming images[0] is the top image
          alt="April 12 update 1"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      {/* Bottom - Large image */}
      <div
        className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <img
          src={images[1]} // Assuming images[1] is the bottom image
          alt="April 12 update 2"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default April2ImageGallery;