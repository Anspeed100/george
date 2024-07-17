// import AltNavbar from "../components/alt_navbar";
import BackgroundAlt from "../assets/background_2.png";
import { useEffect } from "react";
// import RedFooter from "../components/red_footer";
import AssetImg from "../assets/assets_5.png";
import Asset6Img from "../assets/assets_10.png";
import TakingActionImg from "../assets/taking_action_asset.png";
import FooterImg from "../assets/assets7.png";

export default function TakeActionPage() {
  useEffect(() => {
    document.body.classList.add("alt-body-bg");
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4 relative lg:hidden md:hidden">
        <div className="take-banner-alt">
          <img
            src={BackgroundAlt}
            alt="Candidate"
            className="w-4/5	h-full img-opacity"
          />
        </div>
        <img
          src={TakingActionImg}
          alt="takeAction"
          className="absolute bottom-0 right-12 hero-width"
        />
        <div className="container take-action-page take-action-page-red flex flex-col gap-1 items-end relative">
          <div className="flex flex-col gap-2 justify-center items-end take-action-pos">
            <h1 className="header-text-sub header-text-sub-green header-text-sub-alt z-10">
              Become A Volunteer
            </h1>
            <p className="take-p take-p-color">
              Be a part of the Team George Volunteers who believe in
              #Breakingthe2 to create Common Prosperity and alland make Ghana
              great.
            </p>
            <div className="flex justify-end">
              <a
                href="#"
                spy={true}
                smooth={true}
                className={
                  "button-primary-alt button-primary button-primary-mobile-d"
                }
              >
                <span className="button-text">Volunteer</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container take-action-page z-0 flex flex-col gap-1 items-end relative">
          <div className="flex flex-col gap-2 justify-start take-action-pos">
            <h1 className="header-text-sub header-text-sub-alt-2 ml-2">
              Adopt An Electoral Area
            </h1>
            <p className="take-p take-p-alt ml-2">
              Be part of the Grass Root Campaign by adopting one or many
              Electoral Areas and support them with your Ideas, Time and
              Resources.
            </p>
            <div className="flex justify-start ml-2">
              <a
                href="#"
                spy={true}
                smooth={true}
                className={
                  "button-primary-alt button-primary button-primary-mobile-d"
                }
              >
                <span className="button-text">Sign Up</span>
              </a>
            </div>
            <h1 className="take-action-p">TAKE ACTION!!</h1>
          </div>
        </div>
        <div className="absolute bottom-10 left-10 z-action-10 flex flex-row gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0,0,256,256"
            style={{ fill: "#000000" }}
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{ MixBlendMode: "normal" }}
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M12,2c-6,0 -6,6 -6,6v1c0,0 -0.023,-0.001 -0.063,-0.001c-0.34,0 -1.937,0.07 -1.937,1.396c0,1.545 1.697,1.605 1.965,1.605c0.023,0 0.035,0 0.035,0c0,1 -1.652,2.171 -2.736,2.442c-1.01,0.392 -1.251,1.061 -1.264,1.568c-0.008,0.303 0.066,0.548 0.106,0.643c0.377,0.885 1.497,1.342 2.594,1.342c0.038,1.439 1.076,2.005 1.771,2.005c0.794,0 1.634,-0.388 1.634,-0.388c0.041,0.034 1.32,1.388 3.895,1.388c2.575,0 3.854,-1.354 3.896,-1.388c0,0 0.839,0.388 1.634,0.388c0.695,0 1.732,-0.566 1.77,-2.005c1.097,0 2.217,-0.457 2.594,-1.342c0.04,-0.095 0.114,-0.34 0.106,-0.643c-0.013,-0.507 -0.254,-1.176 -1.264,-1.568c-1.084,-0.271 -2.736,-1.442 -2.736,-2.442c0,0 0.012,0 0.035,0c0.268,0 1.965,-0.06 1.965,-1.605c0,-1.326 -1.597,-1.396 -1.937,-1.396c-0.04,0 -0.063,0.001 -0.063,0.001v-1c0,0 0,-6 -6,-6z"></path>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0,0,256,256"
            style={{ fill: "#000000" }}
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{ MixBlendMode: "normal" }}
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M6,3c-1.64497,0 -3,1.35503 -3,3v12c0,1.64497 1.35503,3 3,3h12c1.64497,0 3,-1.35503 3,-3v-12c0,-1.64497 -1.35503,-3 -3,-3zM12,7h2c0,1.005 1.471,2 2,2v2c-0.605,0 -1.332,-0.26584 -2,-0.71484v3.71484c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3v2c-0.552,0 -1,0.449 -1,1c0,0.551 0.448,1 1,1c0.552,0 1,-0.449 1,-1z"></path>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0,0,256,256"
            style={{ fill: "#000000" }}
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{ MixBlendMode: "normal" }}
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M8,3c-2.761,0 -5,2.239 -5,5v8c0,2.761 2.239,5 5,5h8c2.761,0 5,-2.239 5,-5v-8c0,-2.761 -2.239,-5 -5,-5zM18,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,7c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5zM12,9c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0,0,256,256"
            style={{ fill: "#000000" }}
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{ MixBlendMode: "normal" }}
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h7.621v-6.961h-2.343v-2.725h2.343v-2.005c0,-2.324 1.421,-3.591 3.495,-3.591c0.699,-0.002 1.397,0.034 2.092,0.105v2.43h-1.428c-1.13,0 -1.35,0.534 -1.35,1.322v1.735h2.7l-0.351,2.725h-2.365v6.965h3.586c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2z"></path>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0,0,256,256"
            style={{ fill: "#000000" }}
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{ MixBlendMode: "normal" }}
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M10.053,7.988l5.631,8.024h-1.497l-5.621,-8.024zM21,6v12c0,1.657 -1.343,3 -3,3h-12c-1.657,0 -3,-1.343 -3,-3v-12c0,-1.657 1.343,-3 3,-3h12c1.657,0 3,1.343 3,3zM17.538,17l-4.186,-5.99l3.422,-4.01h-1.311l-2.704,3.16l-2.207,-3.16h-3.85l3.941,5.633l-3.737,4.367h1.333l3.001,-3.516l2.458,3.516z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="hidden lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 home-h">
        <div className="">
          <div className="take-banner-alt ">
            <img
              src={BackgroundAlt}
              alt="Candidate"
              className="w-4/5	h-full img-opacity"
            />
          </div>
          <div className="container take-action-page take-action-page-padding take-action-page-red z-0 flex flex-col gap-1 justify-center items-end relative">
            <div className="flex flex-col justify-end items-end">
              <img src={AssetImg} className="w-3/5 h-18" />
              <h1 className="flex justify-end mb-4 header-text-sub-alt-size header-text-sub header-text-sub-green">
                #CommonProsperity4all
              </h1>
            </div>

            <div className="flex flex-col gap-2 justify-center items-end z-10">
              <h1 className="header-text-sub header-text-sub-green header-text-sub-alt z-10">
                Become A Volunteer
              </h1>
              <p className="take-p take-p-color z-10">
                Be a part of the Team George Volunteers who believe in
                #Breakingthe2 to create an Inclusive and a future ready people
                to build a stronger Ghana.
              </p>
              <div className="flex justify-end">
                <a
                  href="#"
                  spy={true}
                  smooth={true}
                  className={
                    "button-primary-alt button-primary button-primary-text"
                  }
                >
                  <span className="button-text">Volunteer</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container take-action-page take-action-page-padding-alt flex flex-col gap-1 justify-center items-start">
          <div className="flex flex-col justify-end items-end invisible">
            <img src={AssetImg} className="w-3/5 h-18" />
            <h1 className="flex justify-end mb-4 header-text-sub-alt-size header-text-sub header-text-sub-green">
              #CommonProsperity4all
            </h1>
          </div>
          <div className="flex flex-col gap-2 justify-start mt-24">
            <h1 className="header-text-sub header-text-sub-alt-2">
              Adopt An Electoral Area
            </h1>
            <p className="take-p take-p-alt">
              Be part of the Grass Root Campaign by adopting one or many
              Electoral Areas and support them with your Ideas, Time and
              Resources.
            </p>
            <div className="flex justify-start">
              <a
                href="#"
                spy={true}
                smooth={true}
                className={
                  "button-primary-alt button-primary button-primary-text"
                }
              >
                <span className="button-text">Sign Up</span>
              </a>
            </div>
            <h1 className="take-action-p">TAKE ACTION!!</h1>
          </div>
        </div>
        <img src={Asset6Img} className="z-0 absolute bottom-0 hero-width" />
        <div className="absolute bottom-10 left-10 z-10 flex flex-row gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0,0,256,256"
            style={{ fill: "#000000" }}
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{ MixBlendMode: "normal" }}
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M12,2c-6,0 -6,6 -6,6v1c0,0 -0.023,-0.001 -0.063,-0.001c-0.34,0 -1.937,0.07 -1.937,1.396c0,1.545 1.697,1.605 1.965,1.605c0.023,0 0.035,0 0.035,0c0,1 -1.652,2.171 -2.736,2.442c-1.01,0.392 -1.251,1.061 -1.264,1.568c-0.008,0.303 0.066,0.548 0.106,0.643c0.377,0.885 1.497,1.342 2.594,1.342c0.038,1.439 1.076,2.005 1.771,2.005c0.794,0 1.634,-0.388 1.634,-0.388c0.041,0.034 1.32,1.388 3.895,1.388c2.575,0 3.854,-1.354 3.896,-1.388c0,0 0.839,0.388 1.634,0.388c0.695,0 1.732,-0.566 1.77,-2.005c1.097,0 2.217,-0.457 2.594,-1.342c0.04,-0.095 0.114,-0.34 0.106,-0.643c-0.013,-0.507 -0.254,-1.176 -1.264,-1.568c-1.084,-0.271 -2.736,-1.442 -2.736,-2.442c0,0 0.012,0 0.035,0c0.268,0 1.965,-0.06 1.965,-1.605c0,-1.326 -1.597,-1.396 -1.937,-1.396c-0.04,0 -0.063,0.001 -0.063,0.001v-1c0,0 0,-6 -6,-6z"></path>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0,0,256,256"
            style={{ fill: "#000000" }}
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{ MixBlendMode: "normal" }}
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M6,3c-1.64497,0 -3,1.35503 -3,3v12c0,1.64497 1.35503,3 3,3h12c1.64497,0 3,-1.35503 3,-3v-12c0,-1.64497 -1.35503,-3 -3,-3zM12,7h2c0,1.005 1.471,2 2,2v2c-0.605,0 -1.332,-0.26584 -2,-0.71484v3.71484c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3v2c-0.552,0 -1,0.449 -1,1c0,0.551 0.448,1 1,1c0.552,0 1,-0.449 1,-1z"></path>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0,0,256,256"
            style={{ fill: "#000000" }}
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{ MixBlendMode: "normal" }}
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M8,3c-2.761,0 -5,2.239 -5,5v8c0,2.761 2.239,5 5,5h8c2.761,0 5,-2.239 5,-5v-8c0,-2.761 -2.239,-5 -5,-5zM18,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,7c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5zM12,9c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0,0,256,256"
            style={{ fill: "#000000" }}
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{ MixBlendMode: "normal" }}
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h7.621v-6.961h-2.343v-2.725h2.343v-2.005c0,-2.324 1.421,-3.591 3.495,-3.591c0.699,-0.002 1.397,0.034 2.092,0.105v2.43h-1.428c-1.13,0 -1.35,0.534 -1.35,1.322v1.735h2.7l-0.351,2.725h-2.365v6.965h3.586c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2z"></path>
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="32"
            height="32"
            viewBox="0,0,256,256"
            style={{ fill: "#000000" }}
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{ MixBlendMode: "normal" }}
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M10.053,7.988l5.631,8.024h-1.497l-5.621,-8.024zM21,6v12c0,1.657 -1.343,3 -3,3h-12c-1.657,0 -3,-1.343 -3,-3v-12c0,-1.657 1.343,-3 3,-3h12c1.657,0 3,1.343 3,3zM17.538,17l-4.186,-5.99l3.422,-4.01h-1.311l-2.704,3.16l-2.207,-3.16h-3.85l3.941,5.633l-3.737,4.367h1.333l3.001,-3.516l2.458,3.516z"></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="absolute bottom-10 right-7 grid justify-items-end items-center">
          <img src={FooterImg} alt="" className="w-28 h-18" />
          <p className="take-p-footer">Copyright © 2024 All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
