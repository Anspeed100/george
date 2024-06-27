import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import FlagImg from "../assets/flag_alt.png"
import BlackFlagImg from "../assets/black_flag.png"
import BreakingTheImg from "../assets/assets7.png"
import RevealImg from "../assets/reveal.png"
import BreakingUser from "../assets/breaking_user_alt.png"
import UGSpeech from "../assets/ug_speech.png"
import UgManifestoBannerImg from "../assets/ug_manifesto_banner.png"
import PolicyBgImg from "../assets/policy_bg_alt.png"
import Assets12Img from "../assets/assets_12.png"
import Assets13Img from "../assets/assets_13.png"
import Assets14Img from "../assets/assets_14.png"
import Assets15Img from "../assets/assets_15.png"
import Assets16Img from "../assets/assets_16.png"
import Assets17Img from "../assets/assets_17.png"
import TheFlagSq from "../assets/the_flag_sq.png"
import RedFooter from "../components/red_footer";
import { useState } from "react";
import Loader from "../components/loader";

export default function AboutPage(){
  const [isLoading, setIsLoading] = useState(false)
  const [isManifestoLoading, setIsManifestoLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [manifestoPage, setManifestoPage] = useState(1)
  const [pageContent, setPageContent] = useState(null)
  const [pageManifestoContent, setManifestoPageContent] = useState(null)

  const formatText = (text) => {
    return text.split('\n').map((item, index) => (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    ));
  }

  const nextManifestoPage = (pageNumber) => {
    setIsManifestoLoading(true)
    let fileName;
    if (pageNumber > 4){
      fileName = `4.json`
      setManifestoPage(4)
    }else{
      fileName = `${pageNumber}.json`
      setManifestoPage(pageNumber)
    }
    
    try {
      const data = require(`../components/manifesto/${fileName}`);
      setManifestoPageContent(formatText(data.text));
      setIsManifestoLoading(false)
    } catch (err) {
      setIsManifestoLoading(false)
      console.log(`Error loading the JSON file: ${err.message}`);
    }
  }

  const previousManifestoPage = (pageNumber) => {
    setIsManifestoLoading(true)
    let fileName;
    if (pageNumber <= 0){
      fileName = `1.json`
    }else{
      fileName = `${pageNumber}.json`
      setManifestoPage(pageNumber)
    }
    
    try {
      const data = require(`../components/manifesto/${fileName}`);
      setManifestoPageContent(formatText(data.text));
      setIsManifestoLoading(false)
    } catch (err) {
      setIsManifestoLoading(false)
      console.log(`Error loading the JSON file: ${err.message}`);
    }
  }

  const nextPage = (pageNumber) => {
    setIsLoading(true)
    let fileName;
    if (pageNumber > 12){
      fileName = `12.json`
      setPage(12)
    }else{
      fileName = `${pageNumber}.json`
      setPage(pageNumber)
    }
    
    try {
      const data = require(`../components/reveal/${fileName}`);
      setPageContent(formatText(data.text));
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      console.log(`Error loading the JSON file: ${err.message}`);
    }
  }

  const previousPage = (pageNumber) => {
    setIsLoading(true)
    let fileName;
    if (pageNumber <= 0){
      fileName = `1.json`
    }else{
      fileName = `${pageNumber}.json`
      setPage(pageNumber)
    }
    
    try {
      const data = require(`../components/reveal/${fileName}`);
      setPageContent(formatText(data.text));
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      console.log(`Error loading the JSON file: ${err.message}`);
    }
  }

  useEffect(() => {
    document.body.classList.add('alt-body-bg');
    setIsLoading(true)
    setIsManifestoLoading(true)
    try {
      const data = require(`../components/reveal/1.json`);
      setPageContent(formatText(data.text));
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      console.log(`Error loading the JSON file: ${err.message}`);
    }
    try {
      const data = require(`../components/manifesto/1.json`);
      setManifestoPageContent(formatText(data.text));
      setIsManifestoLoading(false)
    } catch (err) {
      setIsManifestoLoading(false)
      console.log(`Error loading the JSON file: ${err.message}`);
    }
  }, [])

  return (
    <div className="relative mt-8 lg:mt-0 md:mt-0">
      <Navbar useRed={true}/>
      {/* <div className="absolute top-0 z-10">
        <img src={FlagImg} alt="flag"/>
      </div> */}
      <div className="flex flex-col mt-8 lg:mt-0 md:mt-0 relative">
        <img src={BreakingTheImg} className="absolute breaking-position breaking-img-width" alt="" />
        <img src={BreakingUser} className="breaking-width" alt="breaking the 2"/>
        <img src={UGSpeech} className="absolute breaking-position breaking-img-width-alt" alt="breaking the 2"/>
      </div>
      <div className="manifesto-bg">
        <div className="flex flex-col gap-8 justify-center items-center m-auto p-8">
          <img src={RevealImg} className="w-4/5 lg:w-2/5 md::w-3/5"/>
          {
            isLoading ?
            <Loader/>
            :
            <h1 className="manifesto-p w-4/5 lg:w-3/5 md:w-3/5 scrollable-div">
              {pageContent}
            </h1>
          }
          <div className="flex flex-row justify-between gap-8 lg:gap-32 md:gap-32 items-center">
            <button onClick={() => previousPage(page - 1)} spy={true} smooth={true} className={"button-primary-alt button-primary"}>
              <span className='button-text'>Back</span>
            </button>
            <h1 className="page-text">{page}/12</h1>
            <button onClick={() => nextPage(page + 1)} spy={true} smooth={true} className={"button-primary-alt button-primary"}>
              <span className='button-text'>Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 mb-12">
        <h1 className="support-text flex flex-col gap-8 justify-center items-center m-auto p-2 lg:p-8 md:p-8 w-4/5 ld:w-3/5 md:w-3/5">
          I am George Twum-Barimah-Adu, and I want, with your support and vote, to be your President – to serve you as Head of State, Head of Government and Commander-In-Chief of the Armed Forces of Ghana!<br></br><br></br>God bless Ghana, our Motherland, and make Her Great and Strong!<br></br>Thank you!
        </h1>
      </div>
      <div className="manifesto-bg flex justify-center items-center m-auto p-2 lg:p-8 md:p-8">
        <div className="w-4/5 lg:w-3/5 md:w-3/5 flex flex-col gap-4">
          <h1 className="manifesto-header">My Pledge</h1>
          <p className="support-text-alt support-text">
          This is my GENUINE PLEDGE to all Ghanaians: 
          <br></br><br></br>
          I George Twum-Barimah-Adu, will serve you in honesty and dignity, that God may be glorified, and that Ghana and Ghanaians shall be truly free and enjoy the boons God has so generously bestowed upon us.
          </p>
          <h1 className="manifesto-header">My Promise</h1>
          <p className="support-text-alt support-text">
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
          <h1 className="manifesto-header">Cutting down on Government expenditure and waste.</h1>
          <p className="support-text-alt support-text">
            1. Sell all non-profitable state enterprises.<br></br><br></br>

            2. Scrutinize public procurement to ensure that it strictly follows the Procurement Act and delivers value for money. <br></br><br></br>

            3. Strictly review all government contracts to guarantee value for money.<br></br> <br></br>

            3. Downsize government by operating within the constitutionally approved number of 19 Cabinet Ministers, with a total Ministerial count not exceeding sixty-three (63). <br></br><br></br>

            4. Ensure that no government entity (including SOE’s) sign any contract or memorandum with any party without government review, input and approval. <br></br><br></br>

            5. Institute a cap on the value of state vehicles used by all government officials including SOE’s. <br></br><br></br>

            6. Suspend all government and SOE travels pending a review, unless essential travels carefully vetted to deliver value for money.<br></br><br></br>

            7. Properly resource the Auditor-General for it to be able to deliver on its constitutional mandate. <br></br><br></br>

            All these measures put together, and many more, will, save the nation millions if not billions of cedis annually, surely, putting our beloved country, Ghana, on a far better economic pedestal than we are at now! <br></br><br></br>

            Through these measures, we shall help plug the loopholes of criminal enrichment and corruption and stem the tide of wastage in government! 
          </p>
          <div className="flex flex-col gap-4 justify-center items-center mb-8">
            <img src={BlackFlagImg}/>
            <a href="#" spy={true} smooth={true} className="button-green-primary mt-4">
              <span className='button-text'>Take Action</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-auto">
        <img src={UgManifestoBannerImg} />
        <div className="flex flex-col gap-8 justify-center items-center m-auto p-2 lg:p-8 md:p-8">
          {
            isManifestoLoading ?
            <Loader/>
            :
            <h1 className="manifesto-p manifesto-p-alt w-4/5 lg:w-3/5 md:w-3/5 scrollable-div">
              {pageManifestoContent}
            </h1>
          }
          <div className="flex flex-row justify-between gap-8 lg:gap-32 md:gap-32 items-center">
            <button onClick={() => previousManifestoPage(manifestoPage - 1)} spy={true} smooth={true} className={"button-primary-alt button-primary"}>
              <span className='button-text'>Back</span>
            </button>
            <h1 className="page-text page-text-alt">{manifestoPage}/4</h1>
            <button onClick={() => nextManifestoPage(manifestoPage + 1)} spy={true} smooth={true} className={"button-primary-alt button-primary"}>
              <span className='button-text'>Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center m-auto">
        <img src={PolicyBgImg} alt="" />
        <h1 className="policy-header">Policies</h1>
        <h1 className="policy-header-sub">#COMMONPROSPERITY</h1>
      </div>
      <div className="manifesto-bg">
        <div className="flex flex-row gap-1 lg:gap-4 md:gap-4 justify-between items-center pl-1 lg:pl-12 md:pl-12 pr-4 lg:pr-24 md:pr-24">
          <img src={Assets15Img} className="w-12 lg:w-16 md:w-16"/>
          <img src={Assets16Img} className="w-8 lg:w-12 md:w-12"/>
          <img src={Assets17Img} className="w-8 lg:w-10 md:w-10"/>
          <img src={Assets13Img} className="w-8 lg:w-12 md:w-12"/>
          <img src={Assets14Img} className="w-8 lg:w-12 md:w-12"/>
          <img src={Assets12Img} className="w-8 lg:w-12 md:w-12"/>
        </div>
      </div>
      <div className="flex flex-col p-8 mt-8">
        <div className="flex justify-center items-center">
          <img className="policy-banner-img" src={UgManifestoBannerImg}/>
        </div>
        <div className="p-2 lg:p-12 md:p-12 flex flex-col justify-start items-start">
          <div className="flex justify-center items-center">
            <h1 className="manifesto-p manifesto-p-alt w-4/5 lg:w-3/5 md:w-3/5 scrollable-div">
              <span className="manifesto-header manifesto-header-small">My Pledge</span><br></br>
              If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't 
              quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind.
              <br></br><br></br>The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. 
              Your chosen number of paragraphs will instantly appear.
              If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't 
              quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind.
              <br></br><br></br>The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. 
              Your chosen number of paragraphs will instantly appear.
              If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't 
              quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind.
              <br></br><br></br>The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. 
              Your chosen number of paragraphs will instantly appear.
              If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't 
              quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind.
              <br></br><br></br>The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. 
              Your chosen number of paragraphs will instantly appear.
            </h1>
          </div>
        </div>
      </div>
      <div className="manifesto-bg flex flex-col p-8 mt-8">
        <div className="the-flag-margin flex flex-col justify-start items-start">
          <div className="flex flex-row gap-4 pl-2 lg:pl-64 md:pl-24 mb-4 lg:mb-12 md:mb-12">
            <img src={TheFlagSq} className="w-12 h-12 lg:w-full md:w-full lg:h-full md:h-full" alt="Flag" />
            <div className="flex flex-col">
              <h1 className="manifesto-header manifesto-header-alt manifesto-header-sub">The Flag</h1>
              <span className="the-idea-text">THE IDEA</span>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start m-auto">
            <h1 className="manifesto-p ">
              The flag of my candidacy has a number of colours: 
              <br></br><br></br>
              <span className="blood-red">1. Blood Red:</span>
              <br></br>The larger mass of red (blood red) represents the Blood spilled by our forebears, over time, in the supreme interest of Ghana and Ghanaians.
              <br></br><br></br>
              <span className="green-color">2. Green: </span>
              <br></br>This colour is representative of the Vegetation and Plant resources of Ghana.<br></br><br></br> 
              3. White:<br></br>
              This colour stands for the Purity of the people - a purity that we shall strive to make commonplace among Ghana’s people, in whatever we undertake.
              <br></br><br></br>
              <span className="red-color">4. Red:</span><br></br>
              This lighter shade of red stands for the Sacrifices expected of us all – not the shedding of our blood but the willingness to yield everything possible, in order that Ghana can become what we all desire our Motherland to be.
              <br></br><br></br>
              <span className="gold-color">5. Gold:</span> <br></br>
              This colour represents the Wealth of the nation - to be put to use for the benefit of all the people.<br></br><br></br>
              <span className="black-color">6. Black: </span><br></br>
              This colour represents our Race – a humble, gentle Black People.

              With all the colours making-up the pattern in the green circle symbolizing “Togetherness” – different people with different cultures, yet a common goal of progress. 

            </h1>
          </div>
        </div>
        <div className="ml-4 lg:ml-12 md:ml-12 mt-12 flex flex-row lg:hidden md:hidden gap-2">
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
      </div>
      <div className="hidden lg:block md:block">
        <RedFooter/>
      </div>
     
    </div>
  )
}