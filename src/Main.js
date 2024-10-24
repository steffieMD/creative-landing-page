import firstImg from "./assets/png/two-men-using-laptops.png";

function Main() {
  return (
    <div className="font-commissioner">
      <div className="pt-[104px]">
        <img
          src={firstImg}
          alt="two men working on laptops"
          className="w-full"
        />
        <div className="pt-14 px-6">
          <h1 className="text-[40px] font-extrabold leading-10 mb-[15px] pb-1">
            Branding & website design agency
          </h1>
          <p className="mb-10">
            We specialize in visual storytelling by creating cohesive brand and
            website design solutions for small businesses, giving lasting
            impressions to audiences in a digital world.
          </p>
          <button className="bg-customred py-[25px] px-10 text-lg font-extrabold text-white hover:bg-hoverred mb-[100px]">
            Learn more
          </button>
        </div>
      </div>
      <div>
        <div className="bg-[url('/src/assets/png/second-img.png')] h-[200px] w-full"></div>

        <div className="px-6 bg-customblue">
          <svg
            className="relative bottom-4"
            xmlns="http://www.w3.org/2000/svg"
            width="63"
            height="29"
            viewBox="0 0 63 29"
            fillRule="none">
            <path
              d="M46.1447 28.7186C51.2555 28.7186 55.2998 26.406 58.2776 21.781C61.2554 17.156 62.7443 10.8208 62.7443 2.77538H49.1225C48.8269 4.41027 48.2355 5.72249 47.3485 6.71203C46.4615 7.70157 45.1733 8.19634 43.4837 8.19634C41.9632 8.19634 40.3159 7.78762 38.5419 6.97017C36.7679 6.15273 34.8461 5.21697 32.7764 4.16289C30.7068 3.10881 28.4154 2.18381 25.9022 1.38787C23.389 0.591937 20.633 0.19397 17.6341 0.19397C12.2276 0.19397 7.97217 2.51724 4.86768 7.16378C1.76318 11.8103 0.210938 18.1133 0.210938 26.0726H13.8327C14.1284 24.4807 14.7936 23.19 15.8284 22.2005C16.8633 21.211 18.2466 20.7162 19.9783 20.7162C21.4144 20.7162 22.9983 21.1142 24.7301 21.9101C26.4618 22.706 28.4048 23.6418 30.5589 24.7174C32.7131 25.793 35.089 26.7287 37.6866 27.5247C40.2842 28.3206 43.1036 28.7186 46.1447 28.7186Z"
              fill="#F94F4F"
            />
          </svg>
          <h2 className="text-3.5xl font-extrabold mt-[56px] text-white leading-10 mb-6">
            <span className="text-customred">Design</span> is strategic.
          </h2>
          <p className="text-white mb-10">
            “A well-crafted design strategy consistently produces desired
            outcomes and brand awareness. We are firm believers that success
            lies in creative collaboration with our clients.”
          </p>
          <button className="text-customred font-extrabold border-b-2 border-solid border-current mb-[83px] pb-[9px] hover:text-hoverred">
            Schedule a Call
          </button>
        </div>
        <div className="bg-customred px-6 py-8 text-left text-white">
          <div>
            <h2 className="text-3.5xl mb-[49px]">
              Our approach for creating a winning brand
            </h2>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-[80px] font-extrabold leading-[88px] opacity-25">
                01
              </h3>
              <div className="relative bottom-12 pl-4">
                <h4 className="font-extrabold pb-[15px]">Brand Strategy</h4>
                <p>
                  Brand strategy is critical for long-term success. Outshining
                  competitors and capturing the target audience are key.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-[80px] font-extrabold leading-[88px] opacity-25">
                02
              </h3>
              <div className="relative bottom-12 pl-4">
                <h4 className="font-extrabold pb-[15px]">Brand Design</h4>
                <p>
                  Keeping the brand design unique and meaningful helps in
                  communicating the brand’s value effectively.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-[80px] font-extrabold leading-[88px] opacity-25">
                03
              </h3>
              <div className="relative bottom-12 pl-4">
                <h4 className="font-extrabold pb-[15px]">Web Design</h4>
                <p>
                  A beautifully crafted website is the best tool for brand
                  awareness, and ultimately results in increased revenues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="hidden"
        xmlns="http://www.w3.org/2000/svg"
        width="134"
        height="60"
        viewBox="0 0 134 60"
        fillRule="none">
        <path
          d="M98.4296 0C109.381 0 118.048 4.86425 124.429 14.5928C130.81 24.3213 134 37.6471 134 54.5701H104.811C104.177 51.1312 102.91 48.371 101.009 46.2896C99.1084 44.2081 96.3479 43.1674 92.7275 43.1674C89.4691 43.1674 85.9392 44.0271 82.1378 45.7466C78.3364 47.4661 74.2182 49.4344 69.7832 51.6516C65.3482 53.8688 60.438 55.8145 55.0527 57.4887C49.6673 59.1629 43.7616 60 37.3354 60C25.7501 60 16.6312 55.1131 9.97872 45.3394C3.32624 35.5656 0 22.3077 0 5.56561H29.1895C29.823 8.91402 31.2486 11.629 33.4661 13.7104C35.6836 15.7919 38.6478 16.8326 42.3587 16.8326C45.436 16.8326 48.8301 15.9955 52.541 14.3213C56.2519 12.6471 60.4154 10.6787 65.0314 8.41629C69.6474 6.15385 74.7386 4.18552 80.305 2.51131C85.8713 0.837101 91.9129 0 98.4296 0Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default Main;
