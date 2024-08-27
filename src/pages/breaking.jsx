import React, { useRef, useEffect, useState } from "react";
import BreakingUser from "../assets/breaking_user_alt.png";
import PolicyBgImg from "../assets/policy_bg_alt.png";
import Assets12Img from "../assets/assets_12.png";
import Assets13Img from "../assets/assets_13.png";
import Assets14Img from "../assets/assets_14.png";
import Assets15Img from "../assets/GhanaIcon.png";
import Assets16Img from "../assets/assets_16.png";
import Assets17Img from "../assets/assets_17.png";
import manifestoImage from '../assets/breaking_user_square.png';
import agricforWealthPic from '../assets/agric for wealth.jpg'
import educationForAll from '../assets/quality education for all.jpg'
import ddi from '../assets/ddi copy.jpg'
import esika from '../assets/elevy_.jpg'
import ghanafirst from '../assets/ghana first.jpg'
import youth from '../assets/youth.jpg';
import fourDayPolicies from '../assets/4 day work week.jpg'
import Bio1Img from "../assets/bt2Image.png";
import Divider from "../components/Divider";
import GeorgeSignImage from '../assets/black_flag.png'
import { Link } from "react-router-dom";
import QuoteComponent from "../components/QuoteComponent";

export default function Breakingthe2Page() {
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
  const quoteRef = useRef(null);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === quoteRef.current) {
            setIsSticky(!entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -90% 0px',
      }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      if (quoteRef.current) {
        observer.unobserve(quoteRef.current);
      }
    };
  }, []);

  return (
    <div className="relative bg-[#F2F2F2] pt-10 lg:mt-0 md:mt-0">
      <div className="relative mt-8 lg:mt-0 md:mt-0 flex flex-col items-center">
        <img src={BreakingUser} className="w-full lg:w-auto" alt="Breaking User" />
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

      <Divider />

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
            <Link to='/myspeech'>
              <button className="bg-[#009845] font-canarobold text-white px-10 py-2 rounded">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Divider />

      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 md:px-5 pb-3 w-full">
        <img
          src={manifestoImage}
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
            <Link to='/mymanifesto'>
              <button className="bg-[#009845] font-canarobold text-white px-10 py-2 rounded">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="relative flex flex-col items-center m-auto">
        <img src={PolicyBgImg} alt="Policy Background" className="opacity-[40%]" />
      </div>

      <div className={`manifesto-bg flex flex-col items-center pt-10 pb-6 ${isSticky ? 'sticky top-24 z-10' : ''}`}>
        <h1 className="text-4xl font-bold text-white mb-4">My Policies</h1>
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
            Ghana First within Cost is one of presidential candidate George Twum-Barimah-Adu's policies.
          </p>
          <p>Under the auspices of the NDPC the policy will entail the:</p>
          <p>Re-imagining;<br />
            Re-defining; and<br />
            Re-purposing<br />
            of every sector of the economy to ensure that:<br />
            It is in the interest of Ghana and benefits Ghana<br />
            It is in the interest of the Ghanaian and benefits the Ghanaian; and<br />
            It is within cost
          </p>
          <p>With Ghana Fisrt Within Cost, all decisions made, contracts signed, loans, grants and aids secured, and procurements made by my government will be in the interest and benefit of Ghana, improve the livelihood of the Ghanaian and be within cost.</p>
          <p>Fellow Ghanaians, Ghana First Within Cost is coming!</p>
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
            Agric for Wealth is one of presidential candidate George Twum-Barimah-Adu’s policies.
          </p>
          <p>In consultation with the ‘relevant bodies’ in the ‘agriculture space’, the Policy’s aim is to ensure that Agriculture (in all its forms) is transformative.</p>
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
            Every Ghanaian deserves the right to a decent job that for starters pays a ‘living wage’. To this end, it is important that local small, medium and large scale business and industries are supported. It is also important that local labour is re-trained to provide them with modern skills for jobs that are currently in demand. That is why I am introducing an investment policy called Domestic Direct Investments (DDI).
          </p>
          <p>Whilst Foreign Direct Investments (FDI) is fashioned to attract and promote foreign investments in the country, Domestic Direct Investment (DDI) does the opposite.</p>
          <p>This policy ensures that any Company set up in Ghana that sources (at least 70 per cent of) its raw materials in the production of its end product locally enjoys the same benefits as an FDI company, including lower taxes and other government incentives.</p>
          <p>By putting this policy in action, my government will build our local economy, reduce the weakness on the Ghana Cedi, create good paying jobs, be self-reliant and help free Ghana from foreign aid.</p>
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
            E-Sika replaces E-Levy and is one of presidential candidate George Twum-Barimah-Adu’s policies.
          </p>
          <p>E-Sika is a savings scheme where anyone who pays for anything electronically (including MoMo) is deducted and the money deducted goes into the E-Sika Savings Account of the payer tied to his/her Ghana Card.</p>
          <p>E-Sika Savings Account will be divided in three parts:</p>
          <ul className="list-disc list-inside">
            <li>PENSION- To be paid as a lump sum to the individual upon attaining the age of 60yrs with all interest included. This pension will not be managed by SSNIT.</li>
            <li>HOUSING- To be used by the individual towards mortgage for his/her home.</li>
            <li>WELFARE- To be paid out to the individual every 12 months for the individual to use as he/she pleases.</li>
          </ul>
          <p>This policy is to ensure that all Ghanaians have pension, own a house and have money for their welfare.
            <br />
            With E-Sika, you spend, you save.
            <br />
            Fellow Ghanaians E-Sika is coming!
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#B2444C] w-full">
        <img
          src={youth}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-5 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
            5. DISTRICT CONTRACTS FOR THE YOUTH
          </h2>
          <p>
            District Contracts for the Youth (DCY) is one of presidential candidate George Twum-Barimah-Adu’s policies.
          </p>
          <p>This policy ensures that contracts that are to be executed by the Government through the District Assemblies are awarded to qualified youths who live in the District.</p>
          <p>This policy will;</p>
          <ul className="list-disc list-inside">
            <li>Grow the local economy,</li>
            <li>Retain wealth in the district,</li>
            <li>Create wealth amongst the youth in every district in Ghana; and</li>
            <li>Prevent the youth from migrating from poorer districts to richer districts.</li>
          </ul>
          <p>Fellow Ghanaians District Contracts for the Youth, is coming.</p>
        </div>
      </section>

      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#9B3A45] w-full">
        <img
          src={fourDayPolicies}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-5 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
            6. 4-DAY WORK WEEK
          </h2>
          <p>
            A 4-day work week (termed: Work and Happiness) is one of Presidential Candidate George Twum-Barimah-Adu’s policies.
          </p>
          <p>In consultation with the ‘relevant bodies’ in the ‘employment and labour space’, the Policy’s aim, is to introduce a 4-day work week - from Monday to Thursday.  Monday to Thursday is for the employer and Friday to Sunday is for the employee.</p>

          <p>This policy is not only meant to boost productivity but also give the average worker a longer weekend for personal work, rest and family time.</p>
          <br />
          <p>Fellow Ghanaians, Work and Happiness is coming!</p>
        </div>
      </section>

      <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 p-5 md:px-10 bg-[#B2444C] w-full">
        <img
          src={educationForAll}
          alt="candidate"
          className="w-full h-auto max-w-xs md:max-w-md md:h-[400px]"
        />
        <div className="flex flex-col font-canarobook justify-center items-start w-full md:w-[40%] gap-3 p-10 bg-white relative">
          <h2 className="font-bold font-canarobold text-3xl text-[#b91f26] uppercase pb-5">
          7. QUALITY EDUCATION 4 ALL
          </h2>
          <p>
          Quality Education 4 All is one Presidential Candidate George Twum-Barimah-Adu’s policies. 
          </p>
          <p>In consultation with the ‘relevant bodies’ in the ‘educational space’, the Policy’s aim, is to ensure that all students across the country get the same first-class quality education; irrespective of the area they live, their background and/or the level of their parents’ income.</p>
          <p>This will be achieved through:</p>
          <ul className="list-disc">
            <li>Digitization</li>
            <li>Construction of smart school enclaves in communities in every district; and</li>
            <li>Re-evaluation of the educational curriculum to ensure that students are critical thinkers, entrepreneurs and innovators.</li>
          </ul>
          <p>The Smart School Enclaves which will cover from Kindergarten to SHS 3, will have and entail the following:</p>
          <ol className="list-decimal">
            <li>Facilities that qualify a school to be classified as a “Smart School”, including fast, stable and cheap internet connectivity.</li>
            <li>All teaching will be online. Same first-class quality teacher teaching a subject (eg Math) being piped at the same time to all students in the region through the internet.</li>
            <li>Teachers in the classroom will assist with homework and when the student has a question on the subject being taught; etc.
            </li>
            <li>Learning materials and teaching materials will be online.</li>
            <li>Schools will be on large acres of land that will have the following:
            <ul className="list-disc list-inside">
            <li>Fully walled compound.</li>
            <li>Living quarters for teachers.</li>
            <li>Dining and kitchen facilities for students.</li>
            <li>Library</li>
            <li>Convenient shop for teachers and students.</li>
            <li>School farm comprising all aspects of agriculture to aid in the practical teaching of agriculture in schools.</li>
            <li>Healthcare facility with a pharmacy to be manned by a qualified health officer and a qualified pharmacist. The healthcare facility will be designed such that the community will be able to access it, however the students will always have priority at all times</li>
            <li>Own supply of treated water from boreholes</li>
            <li>Solar power generation to ensure that the schools don’t depend on national grid.</li>
            <li>Boarding facilities for students from age 12.</li>
          </ul>
            </li>
          </ol>
          <p>Quality Education 4 All, will also include:</p>
          <ol className="list-decimal">
            <li>Re-training of teachers on the Smart School system</li>
            <li>Re-evaluation of teacher salaries, conditions of service, and housing; etc.</li>
            <li>Complete review of the whole curriculum program.</li>
            </ol>
        </div>
      </section>

      <div className="hidden lg:block md:block"></div>

      <QuoteComponent
        ref={quoteRef}
        quoteText="Since independence, the political norm has been that a political party going into an election must sing praises of its past achievements and make high-sounding promises for the future. At the same time, a political party must paint its opponents in the worst possible light. We have mastered this art, and in the process, we have forgotten that politics should be about the future of our children and our motherland. We have reduced election campaigns to bitter struggles between competitors seeking power for the wrong reasons.”"
        authorText="- Kwaku Kwarteng; MP, Obuasi West"
        backgroundColor={'#b92026'}
      />

<div className="flex flex-col justify-center items-center bg-[#1A1A1A] px-4">
  <div className="bg-opacity-0 p-8 rounded-lg w-full max-w-4xl mx-auto">
    <h1 className="mb-6 mt-6 text-center text-4xl text-[#BA2026] font-canarobold">
      FIGHTING CORRUPTION AND CUTTING DOWN ON GOVERNMENT WASTAGE AND EXPENDITURE
    </h1>
    <p className="mb-6 text-left text-white font-canarobook">
      In addition to poor leadership from both the NDC and NPP these last thirty-two (32) years, government wastage and uncontrolled rampant corruption have been what both political parties have also given to us these last thirty-two (32) years.
      <br /><br />
      Because of poor leadership, government wastage, and corruption, we are ‘stuck’ with:
      <br /><br />
      a. Poor infrastructure (including roads, schools, clinics and hospitals, etc.).
      <br /><br />
      b. High and nuisance taxes, making it difficult for businesses to plan and expand to create more jobs.
      <br /><br />
      c. Poor service delivery by MDA’s of government.
      <br /><br />
      d. Poor and infrequent utility supply that has led to Dumsor, and erratic water supply.
      <br /><br />
      e. High cost of living causing many qualified professionals to flee the country for greener pastures elsewhere.
      <br /><br />
      f. Unwholesome meals being served to our SHS students; and
      <br /><br />
      g. Lack of faith in the Fourth Republic and democracy; just to mention a few.
      <br /><br />
      As President of the country, not only will I provide excellent, effective leadership, but wastage in government and corruption will become a thing of the past.
      <br /><br />
      To this end, my government will:
      <br /><br />
      1. Tackle corruption by strengthening government agencies such as:
      <br />
      a. The Auditor-General’s Department.
      <br />
      b. Office of the Attorney-General.
      <br />
      c. CHRAJ.
      <br />
      d. Ghana Police Service.
      <br />
      e. Office of the Special Prosecutor (OSP).
      <br />
      f. EOCO; and
      <br />
      g. NIB.
      <br /><br />
      2. Ensure that no one is above the law by doing away with the culture of impunity.
      <br /><br />
      3. Cut wastage in government by:
      <br /><br />
      a. Selling all non-profitable state enterprises.
      <br /><br />
      b. Overhauling the current corrupt public procurement regime that has been abused by all governments since it came into law. Also, scrutinize public procurement to ensure that it strictly follows the Procurement Act and delivers value for money.
      <br /><br />
      c. Strictly reviewing all government contracts to guarantee value for money.
      <br /><br />
      d. Downsizing government by operating within the constitutionally approved number of 19 Cabinet Ministers, with a total Ministerial count not exceeding sixty-three (63).
      <br /><br />
      e. Ensuring that no government entity (including SOE’s) signs any contract or memorandum with any party without government review, input, and approval.
      <br /><br />
      f. Instituting a cap on the value of state vehicles used by all government officials including SOE’s.
      <br /><br />
      g. Suspending all government and SOE travels pending a review, unless essential travels are carefully vetted to deliver value for money.
      <br /><br />
      h. Abolishing payment of ex-gratia to Article 71 office holders at the end of each tenure in office.
      <br /><br />
      All these measures put together, and many more, will save the nation millions if not billions of cedis annually, surely, putting our beloved country, Ghana, on a far better economic pedestal than we are at now!
      <br /><br />
      Through these measures, we shall help plug the loopholes of criminal enrichment and corruption and stem the tide of wastage in government!
    </p>
    <img
      src={GeorgeSignImage}
      alt="George's Signature"
      className="w-full h-auto mb-2"
    />
  </div>
</div>


      <div className="flex flex-col items-center bg-[#009845] px-4">
        <div className="bg-opacity-0 p-8 rounded-lg w-full max-w-4xl mx-auto">
          <h1 className="mb-6 mt-6 text-center text-4xl text-white font-canarobold">
            THE FRUITS BORNE TO US
            BY THE NDC AND NPP.
          </h1>
          <p className="mb-6 text-left text-white font-canarobook">
            The fruits borne to us by the NDC and NPP in the last 32 years are clear and they include:
          </p>
          <ul className="list-decimal pl-6 text-left text-white font-canarobook">
            <li>An economy that is in the mud.</li>
            <li>A high inflationary rate.</li>
            <li>An inhibitive exchange regime that has left our national currency, the Ghana Cedi, floundering and difficult to plan with.</li>
            <li>An excruciating bank-lending regime with interest rates as high as 40 per cent.</li>
            <li>A plethora of nuisance taxes, fees and levies.</li>
            <li>A deadly cocktail of debt and frequent visits to the IMF.</li>
            <li>Poor roads, schools, hospitals.</li>
            <li>High youth unemployment.</li>
            <li>Run-away corruption.</li>
            <li>Uncontrolled galamsey and polluted water bodies.</li>
            <li>An unbearable national debt.</li>
            <li>Import-led economy.</li>
            <li>An agricultural sector that has left our farmers and fisherfolks poorer, unable to feed the population, and has resulted in high agricultural product prices.</li>
            <li>Dumsor.</li>
          </ul>
          <p className="text-left text-white font-canarobook">
            Just to mention a few.
          </p>
        </div>
      </div>

      <QuoteComponent
        ref={quoteRef}
        quoteText="The horse is prepared for the day of battle, but the victory belongs to the LORD."
        authorText="- Proverbs 21 v 31 NLT"
        backgroundColor={'#b92026'}
      />
    </div>
  );
}
