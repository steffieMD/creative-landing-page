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
    <div className=" md:flex">
      <div className="h-auto ml-auto md:w-[58%] md:h-[472px] lg:h-[728px] lg:w-[62%]">
        <div className=" w-full lg:h-[728px]">
          <img
            src={images[currentIndex].original}
            alt={images[currentIndex].description}
            className="w-full transition-transform duration-500 md:h-[472px] lg:h-[728px]"
          />
        </div>
        <div className="relative bottom-[110px] text-white pr-8 text-right py-8 opacity-75 bg-gradient-to-b from-transparent to-black w-full ">
          <div className="font-extrabold lg:text-[20px]">
            {images[currentIndex].description}
          </div>
          <div className="lg:text-[18px]">{images[currentIndex].year}</div>
        </div>
      </div>

      <div className="-mt-[110px] bg-[#191921] flex flex-col py-16 gap-6 px-6 md:absolute md:-mt-[1px] md:h-[352px]  md:w-1/2 md:py-[100px] md:gap-8 lg:gap-[51px] lg:pl-[165px] lg:pr-[125px] lg:h-[528px]">
        <div className=" hidden md:block md:translate-x-[98%] lg:translate-x-[112%] lg:translate-y-[120%] ">
          <svg
            className="md:rotate-180 md:w-[63px] md:h-[29px] lg:w-[134px] lg:h-[60px]"
            xmlns="http://www.w3.org/2000/svg"
            width="134"
            height="60"
            viewBox="0 0 134 60"
            fill="none">
            <path
              d="M98.4296 0C109.381 0 118.048 4.86425 124.429 14.5928C130.81 24.3213 134 37.6471 134 54.5701H104.811C104.177 51.1312 102.91 48.371 101.009 46.2896C99.1084 44.2081 96.3479 43.1674 92.7275 43.1674C89.4691 43.1674 85.9392 44.0271 82.1378 45.7466C78.3364 47.4661 74.2182 49.4344 69.7832 51.6516C65.3482 53.8688 60.438 55.8145 55.0527 57.4887C49.6673 59.1629 43.7616 60 37.3354 60C25.7501 60 16.6312 55.1131 9.97872 45.3394C3.32624 35.5656 0 22.3077 0 5.56561H29.1895C29.823 8.91402 31.2486 11.629 33.4661 13.7104C35.6836 15.7919 38.6478 16.8326 42.3587 16.8326C45.436 16.8326 48.8301 15.9955 52.541 14.3213C56.2519 12.6471 60.4154 10.6787 65.0314 8.41629C69.6474 6.15385 74.7386 4.18552 80.305 2.51131C85.8713 0.837101 91.9129 0 98.4296 0Z"
              fill="white"
            />
          </svg>
        </div>

        <h4 className="text-white text-[32px] font-extrabold leading-10 pb-6 md:-mt-[61px] lg:-mt-[80px] lg:text-[56px] lg:leading-[64px]">
          {images[currentIndex].brand}
        </h4>
        <div className="flex gap-5 lg:pb-[152px]">
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
