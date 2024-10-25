import firstImg from "./assets/png/two-men-using-laptops.png";
import heroImg from "./assets/png/hero-img-larger.png";

function Main() {
  return (
    <div className="font-commissioner">
      <div className="pt-[104px] md:pt-[178px] flex flex-col md:flex-row w-full">
        <img
          src={firstImg}
          alt="two men working on laptops"
          className="w-full md:absolute  md:h-[606px] lg:h-[800px]"
        />
        <div className="pt-14 px-6 z-10 md:w-[80%] md:pl-10 md:pr-[188px]  md:bg-gradient-to-r from-white from-[50%] to-transparent md:h-[606px] lg:h-[800px] lg:pt-[112px] lg:px-[165px]">
          <h1 className="text-[40px] font-extrabold leading-10 mb-[15px] pb-1 md:text-[56px] md:leading-[56px] md:pb-[19px] lg:pb-[39px] lg:text-[80px] lg:leading-[88px]">
            Branding & website design agency
          </h1>
          <p className="mb-10 md:mb-8 lg:mb-12 lg:leading-8 lg:w-[75%]">
            We specialize in visual storytelling by creating cohesive brand and
            website design solutions for small businesses, giving lasting
            impressions to audiences in a digital world.
          </p>
          <button className="bg-customred py-[25px] px-10 text-lg font-extrabold text-white hover:bg-hoverred mb-[100px] md:mb-[120px] lg:mb-[200px]">
            Learn more
          </button>
        </div>
      </div>
      <div className="">
        <div
          className="bg-[url('/src/assets/png/second-img.png')] md:bg-[url('/src/assets/png/second-image-tablet.png')] lg:bg-[url('/src/assets/png/second-img-large.png')] object-cover bg-right-top bg-cover bg-no-repeat h-[200px] w-full  md:absolute md:h-[658px] lg:h-[984px] 
         md:right-1/2"></div>

        <div className="px-6 bg-customblue md:relative md:z-20 md:w-1/2 md:h-[538px] ml-auto md:pl-[69px] lg:pr-[106px] lg:pl-[154px] md:pr-10 lg:h-[784px]">
          <svg
            className="-translate-y-4 md:-translate-x-[150%] lg:-translate-x-[150%] md:translate-y-[500%] lg:translate-y-[300%] md:top-[145px] right-[96px] lg:h-[61px] lg:w-[139px]"
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
          <h2 className="text-3.5xl font-extrabold mt-[56px] md:mt-[104px] text-white leading-10 mb-6 md:mb-8 lg:mb-[43] lg:text-[56px] md:leading-[64px]">
            <span className="text-customred">Design</span> is strategic.
          </h2>
          <p className="text-white mb-10 md:mb-8 lg:mb-[48] lg:leading-8 lg:text-lg">
            “A well-crafted design strategy consistently produces desired
            outcomes and brand awareness. We are firm believers that success
            lies in creative collaboration with our clients.”
          </p>
          <button className="text-customred font-extrabold border-b-2 border-solid border-current mb-[72px] pb-[9px] md:mb-[120px]hover:text-hoverred md:mb-[200px] lg:text-lg">
            Schedule a Call
          </button>
        </div>
        <div className="bg-customred px-6 py-8 text-left text-white md:flex md:py-0 md:px-0 md:bg-white lg:h-[1110px]">
          <div className="md:w-[42%] lg:w-[50%] lg:absolute">
            <h2 className="text-3.5xl mb-[49px] md:pt-[246px] md:text-black md:pl-10 md:pr-[10px] lg:px-[165px] lg:pt-[400px] lg:text-[40px] lg:leading-[50px] xl:text-[56px] xl:leading-[64px] lg:pr-0 relative lg:z-50">
              Our approach for creating a winning brand
            </h2>
          </div>
          <div className="md:bg-customred z-40 md:py-[120px] md:px-10 md:w-[58%] lg:w-[62%] lg:ml-auto lg:pl-[285px] lg:pr-[106px] lg:py-[200px]">
            <div className="flex flex-col gap-10  z-40">
              <div>
                <h3 className="text-[80px] font-extrabold leading-[88px] opacity-25">
                  01
                </h3>
                <div className="relative bottom-12 pl-4">
                  <h4 className="font-extrabold pb-[15px] lg:pb-[24px] lg:text-[20px]">
                    Brand Strategy
                  </h4>
                  <p className="lg:text-[18px] lg:leading-8">
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
                  <h4 className="font-extrabold pb-[15px] lg:text-[20px] lg:pb-[24px]">
                    Brand Design
                  </h4>
                  <p className="lg:text-[18px] lg:leading-8">
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
                  <h4 className="font-extrabold pb-[15px] lg:text-[20px] lg:pb-[24px]">
                    Web Design
                  </h4>
                  <p className="lg:text-[18px] lg:leading-8">
                    A beautifully crafted website is the best tool for brand
                    awareness, and ultimately results in increased revenues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
