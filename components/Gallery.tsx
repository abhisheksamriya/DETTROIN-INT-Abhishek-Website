import Slider from "./Slider";

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="pt-5 sm:pt-10 sm:pb-10 pb-5 bg-gray-100 overflow-x-hidden"
    >
      <div className="mt-5 sm:w-[70%] w-[95%] mx-auto">
        <Slider />
      </div>
    </div>
  );
};

export default Gallery;