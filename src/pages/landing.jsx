import Navbar from "../components/navbar";
import ClientImg from "../assets/asset_1.png"
import BackgroundAlt from "../assets/background_2.png"
import Vote4UGImg from "../assets/assets_11.png"
import BackgroundImgMobile from "../assets/flag.png"
import ClientImgBg from "../assets/asset_1_bg.png"

import { useEffect } from "react";

export default function LandingPage(){
  useEffect(() => {
    document.body.classList.add('alt-body-bg');
  },[])

  return (
    <>
      <Navbar/>
      <div className="hidden lg:flex md:flex relative home-h">
        <div className="home-banner"></div>
        <div className="home-banner-alt">
      
        <img src={BackgroundAlt} alt="Candidate" className="w-3/4	h-3/4"/>
        </div>
        <div className="home-banner-user">
          <img src={ClientImg} alt="Candidate" className="custom-user-height"/>
        </div>
        <div className="text-position flex flex-col gap-4 justify-start">
          <h1 className="header-text">Welcome dear Friend,</h1>
          <h1 className="header-text-sub">Together, Let us Unite, Break the Two and build a dignified, Strong and Prosperous Nation that is Self-reliant and free from foreign aid.</h1>
          <div className="flex justify-end">
            <a href="#" spy={true} smooth={true} className="button-green-primary mt-4">
              <span className='button-text'>Take Action</span>
            </a>
          </div>
          <h1 className="home-p">George Twum-Barimah-Adu (Uncle George) was born on 18 August 1963, the third child of the late Frank Brako Adu Snr, (Teacher Adu), a public servant and the late Beatrice Mariam Ama Acheampong, a government school teacher at Old Tafo.</h1>
          <h1 className="home-p-alt">- READ MORE</h1>
          
        </div>
        <div className="socials-position flex flex-row gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
            style={{ fill: '#000000' }}>
            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ MixBlendMode: 'normal'}}><g transform="scale(10.66667,10.66667)"><path d="M12,2c-6,0 -6,6 -6,6v1c0,0 -0.023,-0.001 -0.063,-0.001c-0.34,0 -1.937,0.07 -1.937,1.396c0,1.545 1.697,1.605 1.965,1.605c0.023,0 0.035,0 0.035,0c0,1 -1.652,2.171 -2.736,2.442c-1.01,0.392 -1.251,1.061 -1.264,1.568c-0.008,0.303 0.066,0.548 0.106,0.643c0.377,0.885 1.497,1.342 2.594,1.342c0.038,1.439 1.076,2.005 1.771,2.005c0.794,0 1.634,-0.388 1.634,-0.388c0.041,0.034 1.32,1.388 3.895,1.388c2.575,0 3.854,-1.354 3.896,-1.388c0,0 0.839,0.388 1.634,0.388c0.695,0 1.732,-0.566 1.77,-2.005c1.097,0 2.217,-0.457 2.594,-1.342c0.04,-0.095 0.114,-0.34 0.106,-0.643c-0.013,-0.507 -0.254,-1.176 -1.264,-1.568c-1.084,-0.271 -2.736,-1.442 -2.736,-2.442c0,0 0.012,0 0.035,0c0.268,0 1.965,-0.06 1.965,-1.605c0,-1.326 -1.597,-1.396 -1.937,-1.396c-0.04,0 -0.063,0.001 -0.063,0.001v-1c0,0 0,-6 -6,-6z"></path></g></g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
            style={{ fill: '#000000' }}>
            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ MixBlendMode: 'normal'}}><g transform="scale(10.66667,10.66667)"><path d="M6,3c-1.64497,0 -3,1.35503 -3,3v12c0,1.64497 1.35503,3 3,3h12c1.64497,0 3,-1.35503 3,-3v-12c0,-1.64497 -1.35503,-3 -3,-3zM12,7h2c0,1.005 1.471,2 2,2v2c-0.605,0 -1.332,-0.26584 -2,-0.71484v3.71484c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3v2c-0.552,0 -1,0.449 -1,1c0,0.551 0.448,1 1,1c0.552,0 1,-0.449 1,-1z"></path></g></g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
            style={{ fill: '#000000' }}>
            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ MixBlendMode: 'normal'}}><g transform="scale(10.66667,10.66667)"><path d="M8,3c-2.761,0 -5,2.239 -5,5v8c0,2.761 2.239,5 5,5h8c2.761,0 5,-2.239 5,-5v-8c0,-2.761 -2.239,-5 -5,-5zM18,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,7c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5zM12,9c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path></g></g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
            style={{ fill: '#000000' }}>
            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ MixBlendMode: 'normal'}}><g transform="scale(10.66667,10.66667)"><path d="M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h7.621v-6.961h-2.343v-2.725h2.343v-2.005c0,-2.324 1.421,-3.591 3.495,-3.591c0.699,-0.002 1.397,0.034 2.092,0.105v2.43h-1.428c-1.13,0 -1.35,0.534 -1.35,1.322v1.735h2.7l-0.351,2.725h-2.365v6.965h3.586c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2z"></path></g></g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
            style={{ fill: '#000000' }}>
            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ MixBlendMode: 'normal'}}><g transform="scale(10.66667,10.66667)"><path d="M10.053,7.988l5.631,8.024h-1.497l-5.621,-8.024zM21,6v12c0,1.657 -1.343,3 -3,3h-12c-1.657,0 -3,-1.343 -3,-3v-12c0,-1.657 1.343,-3 3,-3h12c1.657,0 3,1.343 3,3zM17.538,17l-4.186,-5.99l3.422,-4.01h-1.311l-2.704,3.16l-2.207,-3.16h-3.85l3.941,5.633l-3.737,4.367h1.333l3.001,-3.516l2.458,3.516z"></path></g></g>
          </svg>
        </div>
        <div className="vote-for-ug">
          <img src={Vote4UGImg} alt="vote for UG" />
        </div>
      </div>
      <div className="relative grid grid-rows-3 lg:hidden md:hidden home-h no-scroll z-0">
        <div className="row-span-2 relative">
          <img src={ClientImgBg}  className="absolute z-0 bottom-0"/>
          <img src={ClientImg} className="mobile-image-inherit relative z-10"/>
        </div>
        
        
        <div className="relative">
          <img src={Vote4UGImg} className="absolute vote-bg-mobile" alt="vote for UG" />
          <div className="mobile-card-bg relative flex flex-col justify-center">
            <h1 className="header-text-mobile">Welcome dear friends,</h1>
            
            <h1 className="header-text-sub-mobile">Together, Let us Unite, Break the Two and build a dignified, Strong and Prosperous Nation that is Self-reliant and free from foreign aid.</h1>
            <div className="flex justify-end">
              <a href="#" spy={true} smooth={true} className="button-green-primary">
                <span className='button-text'>Take Action</span>
              </a>
            </div>
            <div className="socials-position flex flex-row gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                style={{ fill: '#000000' }}>
                <g fill="#fff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ MixBlendMode: 'normal'}}><g transform="scale(10.66667,10.66667)"><path d="M12,2c-6,0 -6,6 -6,6v1c0,0 -0.023,-0.001 -0.063,-0.001c-0.34,0 -1.937,0.07 -1.937,1.396c0,1.545 1.697,1.605 1.965,1.605c0.023,0 0.035,0 0.035,0c0,1 -1.652,2.171 -2.736,2.442c-1.01,0.392 -1.251,1.061 -1.264,1.568c-0.008,0.303 0.066,0.548 0.106,0.643c0.377,0.885 1.497,1.342 2.594,1.342c0.038,1.439 1.076,2.005 1.771,2.005c0.794,0 1.634,-0.388 1.634,-0.388c0.041,0.034 1.32,1.388 3.895,1.388c2.575,0 3.854,-1.354 3.896,-1.388c0,0 0.839,0.388 1.634,0.388c0.695,0 1.732,-0.566 1.77,-2.005c1.097,0 2.217,-0.457 2.594,-1.342c0.04,-0.095 0.114,-0.34 0.106,-0.643c-0.013,-0.507 -0.254,-1.176 -1.264,-1.568c-1.084,-0.271 -2.736,-1.442 -2.736,-2.442c0,0 0.012,0 0.035,0c0.268,0 1.965,-0.06 1.965,-1.605c0,-1.326 -1.597,-1.396 -1.937,-1.396c-0.04,0 -0.063,0.001 -0.063,0.001v-1c0,0 0,-6 -6,-6z"></path></g></g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                style={{ fill: "#000000" }}>
                <g fill="#fff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ MixBlendMode: 'normal'}}><g transform="scale(10.66667,10.66667)"><path d="M6,3c-1.64497,0 -3,1.35503 -3,3v12c0,1.64497 1.35503,3 3,3h12c1.64497,0 3,-1.35503 3,-3v-12c0,-1.64497 -1.35503,-3 -3,-3zM12,7h2c0,1.005 1.471,2 2,2v2c-0.605,0 -1.332,-0.26584 -2,-0.71484v3.71484c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3v2c-0.552,0 -1,0.449 -1,1c0,0.551 0.448,1 1,1c0.552,0 1,-0.449 1,-1z"></path></g></g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                style={{ fill: "#000000" }}>
                <g fill="#fff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ MixBlendMode: 'normal'}}><g transform="scale(10.66667,10.66667)"><path d="M8,3c-2.761,0 -5,2.239 -5,5v8c0,2.761 2.239,5 5,5h8c2.761,0 5,-2.239 5,-5v-8c0,-2.761 -2.239,-5 -5,-5zM18,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,7c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5zM12,9c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path></g></g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                style={{ fill: "#000000" }}>
                <g fill="#fff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ MixBlendMode: 'normal'}}><g transform="scale(10.66667,10.66667)"><path d="M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h7.621v-6.961h-2.343v-2.725h2.343v-2.005c0,-2.324 1.421,-3.591 3.495,-3.591c0.699,-0.002 1.397,0.034 2.092,0.105v2.43h-1.428c-1.13,0 -1.35,0.534 -1.35,1.322v1.735h2.7l-0.351,2.725h-2.365v6.965h3.586c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2z"></path></g></g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256"
                style={{ fill: '#000000' }}>
                <g fill="#fff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ MixBlendMode: 'normal'}}><g transform="scale(10.66667,10.66667)"><path d="M10.053,7.988l5.631,8.024h-1.497l-5.621,-8.024zM21,6v12c0,1.657 -1.343,3 -3,3h-12c-1.657,0 -3,-1.343 -3,-3v-12c0,-1.657 1.343,-3 3,-3h12c1.657,0 3,1.343 3,3zM17.538,17l-4.186,-5.99l3.422,-4.01h-1.311l-2.704,3.16l-2.207,-3.16h-3.85l3.941,5.633l-3.737,4.367h1.333l3.001,-3.516l2.458,3.516z"></path></g></g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}