import FooterImg from "../assets/assets_5.png";
import Logo from "../assets/footer.png";

export default function RedFooter() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-between m-auto p-8 md:p-14 lg:p-20 red-footer-bg gap-8">
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-lg md:text-2xl lg:text-3xl text-white uppercase font-canarobold">
            Contact Our Campaign
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white font-canarobook">
          35 Kaanyemi Crescent, 
            <br />
          Asylum Down, Accra
          </p>
          <p className="text-lg text-base md:text-xl lg:text-2xl font-semibold font-canarobook text-white">
          +233 (050) 900-1207
          </p>
          <a
            href="mailto:email@gmail.com"
            className="text-lg text-base md:text-xl lg:text-2xl font-semibold font-canarobook text-white"
          >
            info@georgetwumbarimah.com
          </a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={Logo} alt="Flag" className="w-32 md:w-40 lg:w-48" />
          <div className="flex flex-row gap-2 mt-4">
            {/* SVG icons */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0,0,256,256"
              className="fill-current text-white w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M12,2c-6,0 -6,6 -6,6v1c0,0 -0.023,-0.001 -0.063,-0.001c-0.34,0 -1.937,0.07 -1.937,1.396c0,1.545 1.697,1.605 1.965,1.605c0.023,0 0.035,0 0.035,0c0,1 -1.652,2.171 -2.736,2.442c-1.01,0.392 -1.251,1.061 -1.264,1.568c-0.008,0.303 0.066,0.548 0.106,0.643c0.377,0.885 1.497,1.342 2.594,1.342c0.038,1.439 1.076,2.005 1.771,2.005c0.794,0 1.634,-0.388 1.634,-0.388c0.041,0.034 1.32,1.388 3.895,1.388c2.575,0 3.854,-1.354 3.896,-1.388c0,0 0.839,0.388 1.634,0.388c0.695,0 1.732,-0.566 1.77,-2.005c1.097,0 2.217,-0.457 2.594,-1.342c0.04,-0.095 0.114,-0.34 0.106,-0.643c-0.013,-0.507 -0.254,-1.176 -1.264,-1.568c-1.084,-0.271 -2.736,-1.442 -2.736,-2.442c0,0 0.012,0 0.035,0c0.268,0 1.965,-0.06 1.965,-1.605c0,-1.326 -1.597,-1.396 -1.937,-1.396c-0.04,0 -0.063,0.001 -0.063,0.001v-1c0,0 0,-6 -6,-6z"></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0,0,256,256"
              className="fill-current text-white w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M6,3c-1.64497,0 -3,1.35503 -3,3v12c0,1.64497 1.35503,3 3,3h12c1.64497,0 3,-1.35503 3,-3v-12c0,-1.64497 -1.35503,-3 -3,-3zM12,7h2c0,1.005 1.471,2 2,2v2c-0.605,0 -1.332,-0.26584 -2,-0.71484v3.71484c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3v2c-0.552,0 -1,0.449 -1,1c0,0.551 0.448,1 1,1c0.552,0 1,-0.449 1,-1z"></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0,0,256,256"
              className="fill-current text-white w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M8,3c-2.761,0 -5,2.239 -5,5v8c0,2.761 2.239,5 5,5h8c2.761,0 5,-2.239 5,-5v-8c0,-2.761 -2.239,-5 -5,-5zM18,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,7c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5zM12,9c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0,0,256,256"
              className="fill-current text-white w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h7.621v-6.961h-2.343v-2.725h2.343v-2.005c0,-2.324 1.421,-3.591 3.495,-3.591c0.699,-0.002 1.397,0.034 2.092,0.105v2.43h-1.428c-1.13,0 -1.35,0.534 -1.35,1.322v1.735h2.7l-0.351,2.725h-2.365v6.965h3.586c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2z"></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0,0,256,256"
              className="fill-current text-white w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M10.053,7.988l5.631,8.024h-1.497l-5.621,-8.024zM21,6v12c0,1.657 -1.343,3 -3,3h-12c-1.657,0 -3,-1.343 -3,-3v-12c0,-1.657 1.343,-3 3,-3h12c1.657,0 3,1.343 3,3zM17.538,17l-4.186,-5.99l3.422,-4.01h-1.311l-2.704,3.16l-2.207,-3.16h-3.85l3.941,5.633l-3.737,4.367h1.333l3.001,-3.516l2.458,3.516z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4">
          {["Home", "Breakingthe2", "About", "Take Action", "Roadmap"].map((item) => (
            <div key={item}>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white font-canarobook">{item}</p>
              <hr className="border-t border-white" />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#710b10] h-4 md:h-8"></div>
      <div className="red-footer-bg flex flex-col md:flex-row justify-center items-center md:h-12 text-white text-center p-2 md:p-0">
        <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2">
          <span className="text-sm md:text-base lg:text-lg font-canarobook block md:inline">&copy; 2024 #Breakingthe2</span>
          <span className="text-sm md:text-base lg:text-lg font-canarobook block md:inline">| All rights reserved. |</span>
        </div>
      </div>

    </>
  );
}
