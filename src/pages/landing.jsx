import Navbar from "../components/navbar";
import ClientImg from "../assets/asset_1.png"
import BackgroundAlt from "../assets/background_2.png"
import Vote4UGImg from "../assets/assets_11.png"
import Flag from "../assets/flag.gif"
import ClientImgBg from "../assets/asset_1_bg.png"
import G3Img from "../assets/G3.png"
import QuoteStart from "../assets/quote_start.png"
import QuoteEnd from "../assets/quote_end.png"
import LogoB from "../assets/logo_b.png"
import Shadow from "../assets/shadow.png"
import G5Img from "../assets/G5.png"

import { useEffect } from "react";
import "../scroll.scss"
import $ from "jquery";
export default function LandingPage(){
  useEffect(() => {
    document.body.classList.add('alt-body-bg');
  },[])

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    let currentIndex = 0;
  
    function showNextSection() {
      if (currentIndex > 0) {
        sections[currentIndex - 1].classList.remove('active');
      }
      if (currentIndex < sections.length) {
        sections[currentIndex].classList.add('active');
        currentIndex++;
  
        // Stop the loop when the last section is displayed
        if (currentIndex < sections.length) {
          setTimeout(showNextSection, 3000);
        }
      }
    }
  
    sections[currentIndex].classList.add('active');
    currentIndex++;
    
    setTimeout(showNextSection, 5000);
  },[])

  useEffect(() => {
    const handleScroll = () => {
      const pageTop = window.scrollY;
      const pageBottom = pageTop + window.innerHeight;
      const tags = document.querySelectorAll('.fadein');

      tags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top + window.scrollY;
        if (tagTop < pageBottom) {
          tag.classList.add('visible');
        } else {
          tag.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      
      <div class="transition-container">
        <div class="section 1 m-auto flex flex-col justify-center items-center home-h">
          <img src={Flag} className=""/>
        </div>
        <div class="section 2 m-auto flex flex-col justify-center items-center home-h">
          <img src={LogoB} className=""/>
          <img src={Shadow} alt="shadow" />
        </div>
        <div class="section 3">
          <div className="relative">
            <Navbar/>
            <div className="hidden lg:flex md:flex flex-col relative mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                <img src={ClientImg} alt="Candidate" className="custom-user-height"/>
                <div className="flex flex-col gap-2 justify-start m-auto p-12 z-10">
                  <h1 className="header-text">Welcome dear Friend,</h1>
                  <h1 className="home-p">I am George Twum-Barimah-Adu, and I want, with your support and vote, to be your President – to serve you as Head of State, Head of Government and Commander-In-Chief of the Armed Forces of Ghana!<br></br><br></br>God bless Ghana, our Motherland, and make Her Great and Strong!<br></br>Thank you!</h1>
                  <div className="flex justify-end">
                    <a href="#" spy={true} smooth={true} className="button-green-primary mt-4">
                      <span className='button-text'>Take Action</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="home-banner">
                <div className="overlay"></div>
              </div>
              <div className="home-banner-alt">
                <img src={BackgroundAlt} alt="Candidate" className="w-3/4	h-3/4"/>
              </div>
              <div className="vote-for-ug">
                <img src={Vote4UGImg} alt="vote for UG" />
              </div>
            </div>
            <div className="relative flex flex-col justify-center items-center mt-8">
              <div className="black-box"></div>
              <div className="green-box"></div>
              <div className="red-box"></div>
              <div className="gold-box"></div>
              <img src={G5Img}/>
              <section class="products w-full">
                <div class="wrap flex flex-col justify-center items-center">
                  <div class="product">
                    <h4>As you can see projected here, the flag of my candidacy has a number of colours</h4>
                  </div>
                  
                  <div class="product fadein blood-red">
                    <h4>1. Blood Red</h4>
                    <p>The larger mass of red (blood red) represents the Blood spilled by our forebears, over time, in the supreme interest of Ghana and Ghanaians.</p>
                  </div>
                  
                  <div class="product fadein green-color">
                    <h4>2. Green</h4>
                    <p>This colour is representative of the Vegetation and Plant resources of Ghana.</p>
                  </div>
                  
                  <div class="product fadein white-color">
                    <h4>3. White</h4>
                    <p>This colour stands for the Purity of the people - a purity that we shall strive to make commonplace among Ghana’s people, in whatever we undertake.</p>
                  </div>
                  
                  <div class="product fadein blood-red">
                    <h4>4. Red</h4>
                    <p>This lighter shade of red stands for the Sacrifices expected of us all – not the shedding of our blood but the willingness to yield everything possible, in order that Ghana can become what we all desire our Motherland to be.</p>
                  </div>
                  
                  <div class="product fadein gold-color">
                    <h4>5. Gold </h4>
                    <p>This colour represents the Wealth of the nation - to be put to use for the benefit of all the people.</p>
                  </div>
                  <div className="product fadein">
                    <h1 className="black-color">6. Black:</h1>
                    <p>This colour represents our Race – a humble, gentle Black People.
                      <br/><br/>With all the colours making-up the pattern in the green circle symbolizing “Togetherness” – different people with different cultures, yet a common goal of progress. </p>
                  </div>
                </div>
              </section>
            </div>
            <div className="vision-bg flex justify-center items-center">
              <div className="overlay-alt">
                <p className="my-pledge-header">My Vision</p>
                <p className="my-pledge-header-sub">This is my GENUINE PLEDGE to all Ghanaians: 
                  <br></br><br></br>
                  I George Twum-Barimah-Adu, will serve you in honesty and dignity, that God may be glorified, and that Ghana and Ghanaians shall be truly free and enjoy the boons God has so generously bestowed upon us.
                </p>
              </div>
            </div>
            <div className="pledge-bg flex justify-center items-center">
              <div className="overlay-alt">
                <p className="my-pledge-header">My Pledge</p>
                <p className="my-pledge-header-sub">This is my GENUINE PLEDGE to all Ghanaians: 
                  <br></br><br></br>
                  I George Twum-Barimah-Adu, will serve you in honesty and dignity, that God may be glorified, and that Ghana and Ghanaians shall be truly free and enjoy the boons God has so generously bestowed upon us.
                </p>
              </div>
            </div>
            <div className="promise-bg flex justify-center items-center">
              <div className="overlay-alt overlay-alt-sub">
                <p className="my-promise-header">My Promise</p>
                <p className="my-promise-header-sub">
                  To the Glory of God, I Promise To Offer Ghanaians:<br></br>
                  a. Servant-leadership. <br></br>

                  b. Efficient and effective leadership. <br></br>

                  c. Honest and incorruptible leadership. <br></br>

                  d. Leadership of respect. <br></br>

                  e. Leadership for the benefit of all, and not a small group of family, friends and cronies. <br></br>

                  f. Leadership that plans for the future without destroying the present. <br></br>

                  g. Leadership of ideas; and<br></br><br></br>

                  Leadership that is all-embracing. 
                  To this end, I am calling on all Ghanaians to join forces with me so we can make Ghana, (our own Ghana), the land of our dreams! 
                </p>
              </div>
            </div>
            <div className="bg-white h-96"></div>
            <div className="quote-bg relative flex justify-center items-center">
              <div className="flex flex-col gap-4 m-80">
                <img src={QuoteStart} className="w-12 h-12"/>
                <div className="flex flex-col">
                  <p className="my-quote-header-sub">
                    I'm committed to protecting the constitution, to ensure that everyone has equal justice before the law
                  </p>
                  <div className="flex justify-end">
                    <p className="my-quote-header-name">- George Twum-Barimah-Adu</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <img src={QuoteEnd} className="w-12 h-12"/>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex md:flex flex-col relative">
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3">
                <img src={G3Img} alt="Candidate" className="custom-user-height"/>
                <div className="flex flex-col gap-2 justify-start m-auto z-10 col-span-2">
                  <h1 className="header-text z-10 pl-12 text-center">Meet George Twum-Barimah-Adu</h1>
                  <h1 className="home-p z-10 pl-12">I am George Twum-Barimah-Adu, and I want, with your support and vote, to be your President – to serve you as Head of State, Head of Government and Commander-In-Chief of the Armed Forces of Ghana!<br></br><br></br>God bless Ghana, our Motherland, and make Her Great and Strong!<br></br>Thank you!</h1>
                  <div className="flex justify-center">
                    <a href="#" spy={true} smooth={true} className="button-green-primary mt-4">
                      <span className='button-text'>Take Action</span>
                    </a>
                  </div>
                  <div className="home-banner home-banner-alt-n">
                    <div className="overlay"></div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative grid grid-rows-3 lg:hidden md:hidden no-scroll z-0">
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