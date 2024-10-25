function Footer() {
  return (
    <div className="py-[100px] px-6 md:pb-[101px] lg:px-[165px] lg:pb-[115px]">
      <svg
        className="hidden lg:block absolute left-0 translate-y-[34px] lg:w-[39px]"
        xmlns="http://www.w3.org/2000/svg"
        width="67"
        height="60"
        viewBox="0 0 67 60"
        fill="none">
        <path
          d="M31.4296 60C42.3813 60 51.0476 55.1357 57.4286 45.4072C63.8095 35.6787 67 22.3529 67 5.42986H37.8105C37.177 8.86878 35.9098 11.629 34.0091 13.7104C32.1084 15.7919 29.3479 16.8326 25.7275 16.8326C22.4691 16.8326 18.9392 15.9729 15.1378 14.2534C11.3364 12.5339 7.21817 10.5656 2.78318 8.34842C-1.65181 6.13122 -6.56197 4.18552 -11.9473 2.51131C-17.3327 0.837104 -23.2384 0 -29.6646 0C-41.2499 0 -50.3688 4.88688 -57.0213 14.6606C-63.6738 24.4344 -67 37.6923 -67 54.4344H-37.8105C-37.177 51.086 -35.7514 48.371 -33.5339 46.2896C-31.3164 44.2081 -28.3522 43.1674 -24.6413 43.1674C-21.564 43.1674 -18.1699 44.0045 -14.459 45.6787C-10.7481 47.3529 -6.5846 49.3213 -1.96859 51.5837C2.64742 53.8462 7.7386 55.8145 13.305 57.4887C18.8713 59.1629 24.9129 60 31.4296 60Z"
          fill="#F94F4F"
        />
      </svg>
      <div className="md:flex md:gap-[23%]  md:items-center">
        <h3 className="text-[32px] leading-[40px] font-extrabold mb-[47px] md:text-3.5xl lg:text-[40px] lg:leading-[50px] xl:text-[56px] xl:leading-[64px] md:mb-0">
          Let's build something great together.
        </h3>
        <button className="bg-customred py-[25px] px-10 text-lg font-extrabold text-white hover:bg-hoverred whitespace-nowrap h-[67px] text-center self-center">
          Schedule a Call
        </button>
      </div>
    </div>
  );
}
export default Footer;
