import React, { useEffect, useRef, useState } from "react";
import BreakingUser from "../assets/breaking_user_alt.png";
import PolicyBgImg from "../assets/policy_bg_alt.png";
import Assets12Img from "../assets/assets_12.png";
import Assets13Img from "../assets/assets_13.png";
import Assets14Img from "../assets/assets_14.png";
import Assets15Img from "../assets/GhanaIcon.png";
import Assets16Img from "../assets/assets_16.png";
import Assets17Img from "../assets/assets_17.png";

import agricforWealthPic from '../assets/agric for wealth.jpg'
import ddi from '../assets/ddi copy.jpg'
import esika from '../assets/elevy_.jpg'
import ghanafirst from '../assets/ghana first.jpg'
import youth from '../assets/youth.jpg'
import Bio1Img from "../assets/bt2Image.png";
import RedFooter from "../components/red_footer";

export default function Breakingthe2Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [isManifestoLoading, setIsManifestoLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [manifestoPage, setManifestoPage] = useState(1);
  const [pageContent, setPageContent] = useState(null);
  const [pageManifestoContent, setManifestoPageContent] = useState(null);

  const formatText = (text) => {
    return text.split("\n").map((item, index) => (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    ));
  };

  const sections = [
    {
      id: 1,
      imgSrc: Assets15Img,
      title: "Section 1",
      text: "Content for section 1...",
      correspondingImg: Assets15Img,
    },
    {
      id: 2,
      imgSrc: Assets16Img,
      title: "Section 2",
      text: "Content for section 2...",
      correspondingImg: Assets16Img,
    },
    {
      id: 3,
      imgSrc: Assets17Img,
      title: "Section 3",
      text: "Content for section 3...",
      correspondingImg: Assets17Img,
    },
    {
      id: 4,
      imgSrc: Assets13Img,
      title: "Section 4",
      text: "Content for section 4...",
      correspondingImg: Assets13Img,
    },
    {
      id: 5,
      imgSrc: Assets14Img,
      title: "Section 5",
      text: "Content for section 5...",
      correspondingImg: Assets14Img,
    },
    {
      id: 6,
      imgSrc: Assets12Img,
      title: "Section 6",
      text: "Content for section 6...",
      correspondingImg: Assets12Img,
    },
  ];

  const imgRefs = useRef([]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         const imgIndex = entry.target.dataset.index;
  //         if (entry.isIntersecting) {
  //           imgRefs.current[imgIndex].classList.add("highlight");
  //         } else {
  //           imgRefs.current[imgIndex].classList.remove("highlight");
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.5,
  //     }
  //   );

  //   const sectionElements = document.querySelectorAll(".section");
  //   sectionElements.forEach((section, index) => {
  //     section.dataset.index = index;
  //     observer.observe(section);
  //   });

  //   return () => {
  //     sectionElements.forEach((section) => observer.unobserve(section));
  //   };
  // }, []);

  const loadPageContent = (pageNumber, type) => {
    const isManifesto = type === "manifesto";
    const setLoading = isManifesto ? setIsManifestoLoading : setIsLoading;
    const setContent = isManifesto
      ? setManifestoPageContent
      : setPageContent;
    const setPageState = isManifesto ? setManifestoPage : setPage;

    setLoading(true);
    let fileName;
    const maxPage = isManifesto ? 4 : 12;
    if (pageNumber > maxPage) {
      fileName = `${maxPage}.json`;
      setPageState(maxPage);
    } else if (pageNumber <= 0) {
      fileName = `1.json`;
      setPageState(1);
    } else {
      fileName = `${pageNumber}.json`;
      setPageState(pageNumber);
    }

    try {
      const data = require(`../components/${isManifesto ? "manifesto" : "reveal"}/${fileName}`);
      setContent(formatText(data.text));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(`Error loading the JSON file: ${err.message}`);
    }
  };

  const nextPage = () => loadPageContent(page + 1, "reveal");
  const previousPage = () => loadPageContent(page - 1, "reveal");
  const nextManifestoPage = () => loadPageContent(manifestoPage + 1, "manifesto");
  const previousManifestoPage = () => loadPageContent(manifestoPage - 1, "manifesto");

  useEffect(() => {
    document.body.classList.add("alt-body-bg");
    loadPageContent(1, "reveal");
    loadPageContent(1, "manifesto");
  }, []);

  return (
    <div className="relative bg-[#F2F2F2] pt-10 lg:mt-0 md:mt-0">
      <div className="relative mt-8 lg:mt-0 md:mt-0 flex flex-col items-center">
        <img src={BreakingUser} className="w-full lg:w-auto" alt="Breaking User" />
        <div className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 text-left p-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-canarobold text-right whitespace-nowrap overflow-hidden w-full">
            <span className="text-red-500">#Breakingthe</span>
            <span className="text-green-500">2</span>
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500 font-canarobold text-right whitespace-nowrap overflow-hidden w-full">
            #UGspeech
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center py-8">
        <div className="w-full sm:w-3/4 lg:w-1/2">
          <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/J7UrrpUklLw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* DIVIDER */}
      <div className="h-[3px] bg-[#b91f26] w-[80%] md:w-[70%] mx-auto my-14"></div>
      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 md:px-5 pb-3 w-full">
        <img
          src={Bio1Img}
          alt="candidate"
          className="h-[300px] md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-center md:items-start md:w-[50%] gap-3 px-10 bg-white p-5 relative md:h-[400px] md:justify-center">
          <h2 className="font-bold text-3xl text-[#b91f26] pb-5">
            My Speech
          </h2>
          <p>
            My distinguished guests, ladies and gentlemen from all walks of life, Niimei, Naamei, Nananom, brothers and sisters, partners in the enterprise of making Ghana become the best version of itself in order that we all may be beneficiaries:
            <br /><br />
            I greet you!
          </p>
          <div className="w-full flex justify-end mt-5 md:mt-0">
            <button className="bg-[#009845] font-canarobold text-white px-10 py-2 rounded">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-[3px] bg-[#b91f26] w-[80%] md:w-[70%] mx-auto my-14"></div>

      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 md:px-5 pb-3 w-full">
        <img
          src={Bio1Img}
          alt="candidate"
          className="h-[300px] md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-center md:items-start md:w-[50%] gap-3 px-10 bg-white p-5 relative md:h-[400px] md:justify-center">
          <h2 className="font-bold text-3xl text-[#b91f26] pb-5">
            My Manifesto
          </h2>
          <p>
            As Head of State, Head of Government and Commander-In-Chief of the Armed Forces of Ghana” Chapter 6 of the 1992 Constitution– The Directive Principles of State Policy – shall be the basis for my Manifesto.
          </p>
          <div className="w-full flex justify-end mt-5 md:mt-0">
            <button className="bg-[#009845] font-canarobold text-white px-10 py-2 rounded">
              Read More
            </button>
          </div>
        </div>
      </section>

      <div className="relative flex flex-col items-center m-auto">
        <img src={PolicyBgImg} alt="Policy Background" className="opacity-[40%]" />
      </div>

      <div className="manifesto-bg flex flex-col items-center pt-10 pb-6 sticky top-24 z-10">
        <div className="flex flex-row gap-4 lg:gap-8 md:gap-8 justify-between items-center">
          {sections.map((section, index) => (
            <img
              key={index}
              ref={(el) => (imgRefs.current[index] = el)}
              src={section.correspondingImg}
              className="w-8 lg:w-12 md:w-12 transition-transform duration-300"
              alt={`Asset ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* {sections.map((section, index) => (
        <div key={section.id} className="section flex flex-col md:flex-row items-center md:items-start gap-3 px-10 py-10 bg-red-500">
          <img src={section.imgSrc} className="w-full md:w-1/2 h-auto" alt={`Section ${section.id} Image`} />
          <div className="flex flex-col font-canarobook justify-center items-center md:items-start md:w-1/2 bg-white p-5">
            <h2 className="font-bold text-3xl text-[#b91f26] pb-5">{section.title}</h2>
            <p>{section.text}</p>
          </div>
        </div>
      ))} */}
      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#B2444C] w-full">
        <img
          src={ghanafirst}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-5 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
            1. GHANA FIRST WITHIN COST
          </h2>
          <p>

            Ghana First within Cost is one of presidential candidate George Twum-Barimah-Adu's policies.</p>
      

            <p>Under the auspices of the NDPC the policy will entail the:</p>

            <p>Re-imagining;<br />
            Re-defining; and<br />
            Re-purposing<br />
            of every sector of the economy to ensure that:<br />
            It is in the interest of Ghana and benefits Ghana<br />
            It is in the interest of the Ghanaian and benefits the Ghanaian; and<br />
            It is within cost</p>


            <p>With Ghana Fisrt Within Cost, all decisions made, contracts signed, loans, grants and aids secured, and procurements made by my government will be in the interest and benefit of Ghana, improve the livelihood of the Ghanaian and be within cost.</p>
           

            <p>Fellow Ghanaians, Ghana First Within Cost is coming!

          </p>
        </div>
      </section>
      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#9B3A45] w-full">
        <img
          src={agricforWealthPic}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-5 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
            2. AGRIC FOR WEALTH
          </h2>
          <p>
            Agric for Wealth  is one of presidential candidate George Twum-Barimah-Adu’s policies.</p>
          
          <p>In consultation with the ‘relevant bodies’ in the ‘agriculture space’, the Policy’s aim, is to ensure that Agriculture (in all its forms) is transformative.</p>

        

          <p>My government will prioritize agriculture to ensure that it is enriching to those who partake in it and agricultural outputs cheaper for those who purchase them.</p>
          

          <p>To this end Agric For Wealth will cover (but not limited to) the following areas:</p>
          <ul className="list-disc list-inside">
            <li>Cost of Finance</li>
            <li>Promoting Co-Operatives</li>
            <li>Inputs (eg. Chicks, Fertilizer, Feed, etc.)</li>
            <li>Machinery</li>
            <li>Seeds (Not GMO)</li>
            <li>Agric Extension Officers</li>
            <li>Irrigation</li>
            <li>Land Zoning</li>
            <li>Scientific Research (ie CSIR / Food Research Institute, Animal Husbandry etc.)</li>
            <li>Good Roads</li>
            <li>Solar Powered Climate-Controlled Warehouses</li>
            <li>Markets</li>
            <li>Exports</li>
            <li>Buffer Stock</li>
            <li>Industry</li>
            <li>School Feeding</li>
            <li>Wholesale Commercial Markets</li>
            <li>Retail Commercial Markets</li>


          </ul>
        </div>
      </section>
      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#B2444C] w-full">
        <img
          src={ddi}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-5 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
          3. DOMESTIC DIRECT INVESTMENT (DDI)
          </h2>
          <p>

          Every Ghanaian deserves the right to a decent job that for starters pays a ‘living wage’. To this end, it is important that local small, medium and large scale business and industries are supported. It is also important that local labour is re-trained to provide them with mordern skills for jobs that are currently in demand. That is why I am introducing an investment policy called Domestic Direct Invesymants (DDI).
          </p>
      

            <p>Whilst Foreign Direct Investments (FDI) is fashioned to attract and promote foreign investments in the country, Domestic Direct Investment (DDI) does the opposite.
            </p>

            <p>This policy ensures that any Company set up in Ghana that sources (at least 70 per cent of) its raw materials in the production of its end product locally enjoys the same benefits as an FDI company, including lower taxes and other government incentives.</p>

            <p>By putting this policy in action, my government will build our local economy, reduce the weakness on the Ghana Cedi, create good paying jobs, be self-reliant and help free Ghana from foreign aid.
            </p>

            <p>Fellow Ghanaians Domestic Direct Investment (DDI) is coming!</p>
          
        </div>
      </section>

      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#9B3A45] w-full">
        <img
          src={esika}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-5 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
          4. E-SIKA
          </h2>
          <p>
          E-Sika replaces E-Levy and is one of presidential candidate George Twum-Barimah-Adu’s policies.</p>
          
          <p>E-Sika is a savings scheme where anyone who pays for anything electronically (including MoMo) is deducted and the money deducted goes into the E-Sika Savings Account of the payer tied to his/her Ghana Card.</p>

        

        

          <p>E-Sika Savings Account will be divided in three parts:</p>
          <ul className="list-disc list-inside">
            <li>PENSION- To be paid as a lump sum to the individual upon attaining the age of 60yrs with all interest included. This pension will not be managed by SSNIT.</li>
            <li>HOUSING- To be used by the individual towards mortgage for his/her home.</li>
            <li>WELFARE- To be paid out to the individual every 12 months for the individual to use as he/she pleases.</li>


          </ul>
          <p>This policy is to ensure that all Ghanaians have pension, own a house and have money for their welfare. 
            <br />
            With E-Sika, you spend,  you save.
            <br />
            Fellow Ghanaians E-Sika is coming!

          </p>
          
        </div>
      </section>

      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#9B3A45] w-full">
        <img
          src={youth}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-5 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
          5. DISTRICT CONTRACTS FOR THE YOUTH.
          </h2>
          <p>
          District Contracts for the Youth (DCY) is one of presidential candidate George Twum-Barimah-Adu’s policies. </p>
          
          <p>This policy ensures that contracts that are to be executed by the Government through the District </p>

          <p>Assemblies are awarded to qualified youths who live in the District.</p>

        

          <p>This policy will;</p>
          <ul className="list-disc list-inside">
            <li>Grow the local economy,</li>
            <li>Retain wealth in the district,
            </li>
            <li>Create wealth amongst the youth in every district in Ghana ; and</li>
            <li>Prevent the youth from migrating from poorer districts to richer districts. </li>


          </ul>
          <p>Fellow Ghanaians District Contracts for the Youth, is coming. 

          </p>
          
        </div>
      </section>




      <div className="hidden lg:block md:block">
        <RedFooter />
      </div>
    </div>
  );
}
