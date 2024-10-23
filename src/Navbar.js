import { useState } from "react";

function Navbar() {
  const [style, setStyle] = useState("hidden lg:block md:block");
  const toggleNav = () => {
    if (style !== "hidden lg:block md:block")
      setStyle("hidden lg:block md:block");
    else setStyle("block lg:block md:block");
  };
  return (
    <header className="flex justify-between flex-col lg:flex-row md:flex-row absolute w-full">
      <div className="flex w-full justify-between px-6 py-10">
        <svg
          width="161"
          height="30"
          viewBox="0 0 161 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="Group 11">
            <g id="creative 2">
              <path
                id="creative"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M123.847 6.38095C123.211 6.87275 122.333 7.11865 121.214 7.11865C120.127 7.11865 119.263 6.87275 118.621 6.38095C117.979 5.88915 117.658 5.07494 117.658 3.93833C117.658 2.95472 117.979 2.19242 118.621 1.65144C119.263 1.11046 120.138 0.839966 121.246 0.839966C122.355 0.839966 123.225 1.12139 123.856 1.68423C124.487 2.24707 124.802 2.99844 124.802 3.93833C124.802 5.07494 124.484 5.88915 123.847 6.38095ZM111.386 25.84C111.912 25.84 112.453 25.8126 113.007 25.758C113.561 25.7034 114.077 25.6159 114.555 25.4957C115.032 25.3755 115.43 25.2279 115.748 25.0531L115.435 20.1842C115.04 20.4356 114.653 20.6214 114.275 20.7416C113.896 20.8618 113.548 20.9219 113.229 20.9219C112.516 20.9219 112.011 20.6842 111.715 20.2088C111.419 19.7334 111.27 19.0531 111.27 18.1678V13.4957H115.699V8.95472H111.27V2.59406L105.212 3.62685V8.95472H102.809V13.4957H105.212V20.217C105.212 21.5389 105.434 22.6055 105.877 23.4169L105.945 23.5367C106.433 24.3618 107.141 24.952 108.069 25.3072C108.996 25.6624 110.102 25.84 111.386 25.84ZM61.5552 16.3973V25.3646H55.4149V8.95472L60.5345 8.67603L60.7979 11.4957H61.2918C61.7088 10.6651 62.1588 10.034 62.6417 9.60226C63.1246 9.17057 63.6157 8.87275 64.115 8.70882C64.6144 8.54488 65.1055 8.46292 65.5884 8.46292C65.7969 8.46292 66.0603 8.48477 66.3786 8.52849C66.6968 8.57221 66.9931 8.65417 67.2675 8.77439L66.7407 14.676C66.2798 14.6651 65.8655 14.6542 65.4978 14.6432C65.1302 14.6323 64.7543 14.6269 64.3702 14.6269C64.0629 14.6269 63.7693 14.6542 63.4895 14.7088C63.2096 14.7635 62.9517 14.8591 62.7158 14.9957C62.4798 15.1323 62.2631 15.3154 62.0655 15.5449C61.868 15.7744 61.6979 16.0585 61.5552 16.3973ZM49.9412 25.6514C49.3321 25.7115 48.649 25.7416 47.8917 25.7416C45.9712 25.7416 44.3442 25.3755 43.0107 24.6432C41.6773 23.911 40.6622 22.9055 39.9653 21.6269C39.2684 20.3482 38.9199 18.8728 38.9199 17.2006C38.9199 15.5285 39.2354 14.0367 39.8665 12.7252C40.4975 11.4137 41.4523 10.3809 42.7309 9.62685C44.0094 8.87275 45.62 8.4957 47.5625 8.4957C48.221 8.4957 48.8794 8.54215 49.5379 8.63505C50.1964 8.72794 50.8192 8.85909 51.4064 9.02849C51.9935 9.19789 52.5121 9.40281 52.962 9.64324L52.534 14.84C51.8975 14.4793 51.3268 14.2143 50.822 14.0449C50.3171 13.8755 49.8672 13.7607 49.4721 13.7006C49.077 13.6405 48.7368 13.6105 48.4514 13.6105C47.4637 13.6105 46.6708 13.9165 46.0727 14.5285C45.4745 15.1405 45.1755 15.9711 45.1755 17.0203C45.1755 17.7744 45.3401 18.4329 45.6693 18.9957C45.9986 19.5585 46.476 19.9984 47.1015 20.3154C47.7271 20.6323 48.4789 20.7908 49.3568 20.7908C49.741 20.7908 50.1196 20.7553 50.4927 20.6842C50.8659 20.6132 51.2335 20.5039 51.5957 20.3564C51.9578 20.2088 52.309 20.0258 52.6492 19.8072L52.8962 25.0039C52.5011 25.1569 52.0621 25.2881 51.5792 25.3973C51.0963 25.5066 50.5503 25.5913 49.9412 25.6514ZM83.9986 17.8471C84.0346 17.591 84.0629 17.3318 84.0835 17.0695C84.1109 16.7197 84.1246 16.3208 84.1246 15.8728C84.1246 14.1678 83.831 12.7717 83.2439 11.6842C82.6568 10.5968 81.8117 9.78805 80.7087 9.258C79.6058 8.72794 78.2696 8.46292 76.7002 8.46292C74.8565 8.46292 73.331 8.83177 72.1238 9.56947C70.9166 10.3072 70.0139 11.329 69.4158 12.635C68.8177 13.9411 68.5186 15.4411 68.5186 17.135C68.5186 18.84 68.8424 20.3454 69.4899 21.6514C70.1374 22.9575 71.1553 23.982 72.5436 24.7252C73.9319 25.4684 75.7345 25.84 77.9514 25.84C78.8293 25.84 79.636 25.7935 80.3713 25.7006C81.1066 25.6077 81.7651 25.4848 82.3467 25.3318C82.9284 25.1788 83.4332 25.0094 83.8612 24.8236L83.6637 19.758C83.1479 20.0094 82.5827 20.217 81.9681 20.3809C81.3535 20.5449 80.7581 20.6678 80.182 20.7498C79.6058 20.8318 79.1202 20.8728 78.7251 20.8728C77.7044 20.8728 76.8758 20.7307 76.2393 20.4465C75.6028 20.1624 75.1336 19.7498 74.8318 19.2088C74.6594 18.8997 74.5362 18.5504 74.4623 18.161L74.452 18.1023H83.96L83.9986 17.8471ZM74.4266 15.3105L74.4223 15.3486L78.8181 15.2281L78.8159 15.1634C78.776 14.3936 78.5866 13.7749 78.2477 13.3072C77.8636 12.7771 77.3697 12.5121 76.7661 12.5121C76.3161 12.5121 75.9128 12.6514 75.5561 12.9301C75.1995 13.2088 74.9141 13.6187 74.7001 14.1596C74.5684 14.4926 74.4772 14.8762 74.4266 15.3105ZM90.3802 25.7908C91.1484 25.7908 91.8316 25.6624 92.4297 25.4055C93.0278 25.1487 93.5464 24.8154 93.9854 24.4055C94.4244 23.9957 94.7865 23.5503 95.0719 23.0695H95.4834L95.895 25.3646H100.965V14.4137C100.965 13.0148 100.699 11.8782 100.167 11.0039C99.6346 10.1296 98.8636 9.48751 97.8539 9.07767C96.8443 8.66783 95.6316 8.46292 94.2158 8.46292C93.4147 8.46292 92.6465 8.5039 91.9112 8.58587C91.1758 8.66783 90.4844 8.77166 89.8369 8.89734C89.1894 9.02303 88.5968 9.16237 88.059 9.31538C87.5213 9.46838 87.0439 9.61046 86.6268 9.74161L86.8902 14.84C87.3841 14.5995 87.878 14.3919 88.3718 14.217C88.8657 14.0422 89.3568 13.8973 89.8452 13.7826C90.3335 13.6678 90.8 13.5804 91.2444 13.5203C91.6889 13.4602 92.0977 13.4301 92.4709 13.4301C93.1293 13.4301 93.6836 13.4902 94.1335 13.6105C94.5835 13.7307 94.9182 13.9165 95.1377 14.1678C95.3572 14.4192 95.456 14.7471 95.434 15.1514L91.0387 15.8891C90.5338 15.9766 89.9851 16.1214 89.3925 16.3236C88.7998 16.5258 88.2374 16.8208 87.7051 17.2088C87.1728 17.5968 86.7366 18.105 86.3964 18.7334C86.0562 19.3618 85.8861 20.1514 85.8861 21.1023C85.8861 21.9875 86.0589 22.7853 86.4046 23.4957C86.7503 24.2061 87.2579 24.7662 87.9273 25.176C88.5968 25.5859 89.4144 25.7908 90.3802 25.7908ZM92.1252 20.8072C92.4215 21.0258 92.7452 21.135 93.0964 21.135C93.3598 21.135 93.6259 21.0722 93.8948 20.9465C94.1637 20.8208 94.4161 20.6432 94.6521 20.4137C94.888 20.1842 95.0938 19.9165 95.2694 19.6105V17.2006C95.1597 17.299 95.0307 17.3891 94.8825 17.4711C94.7344 17.5531 94.5259 17.6378 94.257 17.7252C93.9881 17.8126 93.6232 17.9165 93.1623 18.0367C92.8879 18.1023 92.6382 18.2088 92.4132 18.3564C92.1883 18.5039 92.0099 18.6897 91.8782 18.9137C91.7465 19.1378 91.6807 19.4137 91.6807 19.7416C91.6807 20.2334 91.8288 20.5886 92.1252 20.8072ZM124.308 25.3646V8.79079L118.168 8.95472V25.3646H124.308ZM139.585 22.2744C139.234 23.2962 138.877 24.3263 138.515 25.3646H131.996C131.645 24.3372 131.288 23.299 130.926 22.2498C130.564 21.2006 130.202 20.1678 129.84 19.1514L128.835 16.2498C128.418 15.0367 127.999 13.8208 127.576 12.6023C127.154 11.3837 126.728 10.1678 126.3 8.95472L132.934 8.77439C133.154 9.79079 133.371 10.8126 133.585 11.84C133.799 12.8673 134.015 13.8946 134.235 14.9219L135.058 18.7908H135.535L136.359 14.9055C136.589 13.8454 136.811 12.8181 137.025 11.8236L137.643 8.95472H144.178C143.761 10.1678 143.341 11.3864 142.919 12.6105C142.496 13.8345 142.071 15.0585 141.643 16.2826L140.639 19.2006C140.288 20.2279 139.936 21.2525 139.585 22.2744ZM160.794 17.8471C160.83 17.591 160.858 17.3318 160.879 17.0695C160.906 16.7197 160.92 16.3208 160.92 15.8728C160.92 14.1678 160.626 12.7717 160.039 11.6842C159.452 10.5968 158.607 9.78805 157.504 9.258C156.401 8.72794 155.065 8.46292 153.496 8.46292C151.652 8.46292 150.126 8.83177 148.919 9.56947C147.712 10.3072 146.809 11.329 146.211 12.635C145.613 13.9411 145.314 15.4411 145.314 17.135C145.314 18.84 145.638 20.3454 146.285 21.6514C146.933 22.9575 147.951 23.982 149.339 24.7252C150.727 25.4684 152.53 25.84 154.747 25.84C155.625 25.84 156.431 25.7935 157.167 25.7006C157.902 25.6077 158.56 25.4848 159.142 25.3318C159.724 25.1788 160.229 25.0094 160.657 24.8236L160.459 19.758C159.943 20.0094 159.378 20.217 158.763 20.3809C158.149 20.5449 157.553 20.6678 156.977 20.7498C156.401 20.8318 155.915 20.8728 155.52 20.8728C154.5 20.8728 153.671 20.7307 153.035 20.4465C152.398 20.1624 151.929 19.7498 151.627 19.2088C151.455 18.8997 151.331 18.5504 151.258 18.161L151.247 18.1023H160.755L160.794 17.8471ZM151.222 15.3105L151.218 15.3486L155.613 15.2281L155.611 15.1634C155.571 14.3936 155.382 13.7749 155.043 13.3072C154.659 12.7771 154.165 12.5121 153.561 12.5121C153.111 12.5121 152.708 12.6514 152.351 12.9301C151.995 13.2088 151.709 13.6187 151.495 14.1596C151.364 14.4926 151.273 14.8762 151.222 15.3105Z"
                fill="black"
              />
            </g>
            <path
              id="Combined Shape"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.6069 13.8145H23.6434C23.5488 14.3303 23.3597 14.7443 23.076 15.0566C22.7923 15.3688 22.3803 15.5249 21.8399 15.5249C21.3536 15.5249 20.8267 15.3959 20.2594 15.138C19.692 14.8801 19.0773 14.5848 18.4154 14.2523C17.7535 13.9197 17.0206 13.6278 16.2168 13.3767C15.413 13.1256 14.5316 13 13.5724 13C11.8433 13 10.4823 13.733 9.48936 15.1991C8.49645 16.6652 8 18.6538 8 21.1652H12.3566C12.4512 20.6629 12.664 20.2557 12.9949 19.9434C13.3259 19.6312 13.7683 19.4751 14.3222 19.4751C14.7815 19.4751 15.2881 19.6007 15.8419 19.8518C16.3958 20.1029 17.0172 20.3982 17.7062 20.7376C18.3951 21.0769 19.155 21.3722 19.9858 21.6233C20.8166 21.8744 21.7183 22 22.691 22C23.6941 22 24.5687 21.7252 25.3148 21.1757C23.5755 26.307 18.719 30 13 30C5.8203 30 0 24.1797 0 17C0 9.8203 5.8203 4 13 4C19.0807 4 24.1863 8.1748 25.6069 13.8145Z"
              fill="#F94F4F"
            />
          </g>
        </svg>
        <div onClick={toggleNav}>
          <svg
            className="lg:hidden md:hidden block cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none">
            <g opacity="0.5">
              <rect width="24" height="2" fill="black" />
              <rect y="8" width="24" height="2" fill="black" />
              <rect y="16" width="24" height="2" fill="black" />
            </g>
          </svg>
        </div>
      </div>
      <div className="pr-6 ">
        <nav className={style}>
          <ul className="bg-[#191921] w-[67%] ml-auto text-center text-white pt-8 pb-7 flex flex-col gap-6 text-lg px-[26px]">
            <li>
              <a href="/" className="hover:font-bold">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:font-bold">
                Service
              </a>
            </li>
            <li>
              <a href="/" className="hover:font-bold">
                Projects
              </a>
            </li>
            <li className="bg-[#F94F4F] text-base font-extrabold px-11 py-[22px] hover:bg-[#FF9393] hover:text-lg">
              <a href="/" className="text-base font-extrabold">
                Schedule a Call
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
