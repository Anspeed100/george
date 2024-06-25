import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import FlagImg from "../assets/flag.png"
import BlackFlagImg from "../assets/black_flag.png"
import BreakingTheImg from "../assets/assets7.png"
import RevealImg from "../assets/reveal.png"
import BreakingUser from "../assets/breaking_user.png"
import UgManifestoBannerImg from "../assets/ug_manifesto_banner.png"
import PolicyBgImg from "../assets/policy_bg.png"
import Assets12Img from "../assets/assets_12.png"
import Assets13Img from "../assets/assets_13.png"
import Assets14Img from "../assets/assets_14.png"
import Assets15Img from "../assets/assets_15.png"
import Assets16Img from "../assets/assets_16.png"
import Assets17Img from "../assets/assets_17.png"
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
    <div className="relative">
      <Navbar useRed={true}/>
      <div className="absolute top-0 z-10">
        <img src={FlagImg} alt="flag"/>
      </div>
      <div className="flex relative">
        <img src={BreakingTheImg} className="absolute breaking-position breaking-img-width" alt="" />
        <img src={BreakingUser} className="breaking-width" alt="breaking the 2"/>
      </div>
      <div className="manifesto-bg">
        <div className="flex flex-col gap-8 justify-center items-center m-auto p-8">
          <img src={RevealImg} className="w-4/5 lg:w-2/5 md::w-3/5"/>
          {
            isLoading ?
            <Loader/>
            :
            <h1 className="manifesto-p w-3/5 scrollable-div">
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
      <div>
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
          <div className="flex flex-col gap-4 justify-center items-center">
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
          <img src={Assets15Img} className="w-16"/>
          <img src={Assets16Img} className="w-12"/>
          <img src={Assets17Img} className="w-10"/>
          <img src={Assets13Img} className="w-12"/>
          <img src={Assets14Img} className="w-12"/>
          <img src={Assets12Img} className="w-12"/>
        </div>
      </div>
      <div className="flex flex-col p-8 mt-8">
        <div className="flex justify-center items-center">
          <img className="policy-banner-img" src={UgManifestoBannerImg}/>
        </div>
        <div className="p-8 lg:p-12 md:p-12 flex flex-col justify-start items-start">
          <h1 className="manifesto-header pl-2 lg:pl-24 md:pl-24">My Pledge</h1>
          <div className="flex justify-center items-center">
            <h1 className="manifesto-p manifesto-p-alt w-4/5 lg:w-3/5 md:w-3/5 scrollable-div">
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
        <div className="p-8 lg:p-12 md:p-12 flex flex-col justify-start items-start m-auto">
          <h1 className="manifesto-header manifesto-header-sub pl-2 lg:pl-24 md:pl-24">The Flag</h1>
          <div className="flex flex-col justify-center items-center m-auto">
            <h1 className="manifesto-p w-4/5 lg:w-3/5 md:w-3/5">
              <span className="the-idea-text">THE IDEA</span><br></br><br></br>
              The flag of my candidacy has a number of colours: 
              <br></br><br></br>
              1. Blood Red: 
              <br></br>The larger mass of red (blood red) represents the Blood spilled by our forebears, over time, in the supreme interest of Ghana and Ghanaians.
              <br></br><br></br>
              2. Green: 
              <br></br>This colour is representative of the Vegetation and Plant resources of Ghana.<br></br><br></br> 
              3. White: <br></br>
              This colour stands for the Purity of the people - a purity that we shall strive to make commonplace among Ghana’s people, in whatever we undertake.
              <br></br><br></br>
              4. Red: <br></br>
              This lighter shade of red stands for the Sacrifices expected of us all – not the shedding of our blood but the willingness to yield everything possible, in order that Ghana can become what we all desire our Motherland to be.
              <br></br><br></br>
              5. Gold: <br></br>
              This colour represents the Wealth of the nation - to be put to use for the benefit of all the people.<br></br><br></br>
              6. Black: <br></br>
              This colour represents our Race – a humble, gentle Black People.

              With all the colours making-up the pattern in the green circle symbolizing “Togetherness” – different people with different cultures, yet a common goal of progress. 

            </h1>
          </div>
        </div>
      </div>
      <RedFooter/>
    </div>
  )
}