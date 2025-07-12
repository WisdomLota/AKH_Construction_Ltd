// May 8th Layout - 3 large images stacked vertically
const May4ImageGallery = ({ images, isVisible }) => {
  return (
    <div className="flex flex-col gap-4 lg:h-240">
      {/* Top - Large image */}
      <div
        className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100 delay-0' : 'translate-y-8 opacity-0'
        }`}
      >
        <img
          src={images[0]} // Assuming images[0] is the top image
          alt="May 8 update 1"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      {/* Middle - Large image */}
      <div
        className={`overflow-hidden rounded-br-4xl transform transition-all duration-700 flex justify-end${
          isVisible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <img
          src={images[1]} // Assuming images[1] is the middle image
          alt="May 8 update 2"
          className="w-5/6 ml-auto h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Bottom - Large image */}
      <div
        className={`overflow-hidden rounded-bl-4xl transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-8 opacity-0'
        }`}
      >
        <img
          src={images[2]} // Assuming images[2] is the bottom image
          alt="May 8 update 3"
          className="w-5/6 h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default May4ImageGallery;