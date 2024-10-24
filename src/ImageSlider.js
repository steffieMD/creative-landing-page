import React, { useState } from "react";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      original: "https://i.ibb.co/4MP77RX/slider-img-11.png",
      description: "Lean Product Roadmap",
      year: "2019 Project",
      brand: "Brand naming & guidelines",
    },
    {
      original: "https://i.ibb.co/dJ7xfQb/slider-img-2.png",
      description: "New Majestic Hotel",
      year: "2018 Project",
      brand: "Brand identity & merchandise",
    },
    {
      original: "https://i.ibb.co/9b8XrbJ/slider-img-3.png",
      description: "Crypto Dashboard",
      year: "2016 Project",
      brand: "Brand identity & web design",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="">
      <div className="h-auto">
        <div className=" w-full">
          <img
            src={images[currentIndex].original}
            alt={images[currentIndex].description}
            className="w-full transition-transform duration-500"
          />
        </div>
        <div className="relative bottom-[110px] text-white pr-8 text-right py-8 opacity-75 bg-gradient-to-b from-transparent to-black w-full">
          <div className="font-extrabold">
            {images[currentIndex].description}
          </div>
          <div className="image-gallery-description">
            {images[currentIndex].year}
          </div>
        </div>
      </div>

      <div className="-mt-[110px] pt-[46px] bg-[#191921] px-6">
        <h4 className="text-white text-[32px] font-extrabold leading-10 pb-6">
          {images[currentIndex].brand}
        </h4>
        <div className="flex gap-5 pb-16">
          <button
            onClick={handlePrevClick}
            className="border-solid border-2 rounded-full text-2xl text-customred border-current py-2 px-4 hover:text-hoverred">
            &lt;
          </button>
          <button
            onClick={handleNextClick}
            className="border-solid border-2 rounded-full text-2xl text-customred border-current py-2 px-4 hover:text-hoverred">
            {" "}
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
