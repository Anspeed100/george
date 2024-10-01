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
import { PoliciesSection } from "../components/PoliciesSection";

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
             setIsSticky(entry.isIntersecting);
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

      <PoliciesSection
      ref={quoteRef}
  ghanafirst={ghanafirst} 
  agricforWealthPic={agricforWealthPic} 
  ddi={ddi} 
  esika={esika} 
  youth={youth} 
  fourDayPolicies={fourDayPolicies} 
  educationForAll={educationForAll} 
/>
      <div className="hidden lg:block md:block"></div>

      <div className="flex flex-col justify-center items-center bg-[#BA2026] px-4">
  <div className="bg-opacity-0 p-8 rounded-lg w-full max-w-4xl mx-auto">
    <h1 className="mb-6 mt-6 text-center text-4xl text-white font-canarobold">
    ILLEGAL MINING: A FAILURE OF OUR CURRENT DEVELOPMENTAL MODEL.
    </h1>
    <p className="mb-6 text-left text-white font-canarobook">
    Article 36 clause 9 under Chapter 6 of the 1992 Constitution of Ghana, states that “the state shall take appropriate measures needed to protect and safeguard the national environment for posterity … .” 
      <br /><br />
      Instead, today what we see and read is the crass and blatant destruction of our national environment including water bodies and forest cover by all manner of persons including state actors (politicians). What is happening today is environmental genocide which has the potential to affect the survivability of our nation and people. The overhyped political infrastructural development is of no consequence to a nation when the very foundation of its life is under threat.
      <br /><br />
      The Colonial Policy of appropriating community natural resources for central control and exploitation is the root cause of the current illegal mining saga. This age-long colonial policy of appropriating minerals and other natural resources of value from the communities for crown control has outlived its relevance and is the main reason for the devastation of our forest resources and Water bodies through politically engineered concessions from Accra. Which side-steps and clips the wings of Traditional Leaders, whose primary mandate is to protect the forests, and water bodies, not only as communal resource heritage and sanctuaries of their gods but also the life of the unborn generation.
      <br /><br />
      The interlocking colonial crown policy of granting concessions from Accra and the exclusion of The Traditional Sector in the current unipolar institutional governance model constitute the dysfunctional process mechanism being weaponized against our very existence as humans. 
      <br /><br />
      The historiography of colonial/crown land use policies in Africa were driven by exploitation as the principal interest and that underpinned all acts governing lands and resource management of which Ghana is not an exception.  
      <br /><br />
      The British manipulation of laws to take over the land and other resources of the people for crown control has continued to date after independence when colonial structures were left intact. 
      <br /><br /></p>
      
      <h2 className="mb-6 mt-6 text-center text-2xl text-white font-canarobold">The matrix of open-access resource security and community exigencies </h2>
      <p className="mb-6 text-left text-white font-canarobook">
      Open-Access Resources (Land, Flora & Fauna/Mineral resources within) are integral part of Communities Resource Area and Heritage (CORAH). 
      <br /><br />
      There are customary laws and conventions that govern the use and preservation of these open-access resources. 
      <br /><br />
      The moment an external entity appropriates the right to exploit these resources under the ruse of state interest to the exclusion of the indigenous community; and the indigenous community is made to bear the cost of exploitation, the community is compelled to take an offensive posture against their resources area with dire consequences. It is this crown colonial policy mentality over resource exploitation from the communities that underlies the current danger which could be appropriately described as a crime against humanity.
      <br /><br /></p>
      <h2 className="mb-6 mt-6 text-center text-2xl text-white font-canarobold">The Environmental Protection (Mining in Forest Reserves) Regulation LI 2462</h2>
      <p className="mb-6 text-left text-white font-canarobook">
      The passage of this legislation in November 2022 giving the President the authority to allow mining and prospecting in forest reserves if he deems it necessary in the national interest bears all the hallmarks of colonial land control systems for exploitation by a predatory political culture. The quest for independence was but a substitution of white rule for indigenous tyranny whilst the structures of exploitation remained intact.</p>
      <br /><br />
      <h2 className="mb-6 mt-6 text-center text-2xl text-white font-canarobold">The The Traditional Sector Partnership in the Management of Open-Access Resources: The Triple Helix Partnership Approach</h2>
      <p className="mb-6 text-left text-white font-canarobook">
      The time has now come for a new framework for consensus building towards a Developmental Model, with the inclusion of the Traditional Sector as partners in the Agreement, Management and Benefit sharing of Land Resources as well as its preservation within the framework of the Communities/Traditional Area Values and Heritage systems. </p>
      <br /><br />

      <h2 className="mb-6 mt-6 text-center text-2xl text-white font-canarobold">Poverty Eradication and Sustainable Environmental Management</h2>
      <p className="mb-6 text-left text-white font-canarobook">
        
      Poverty eradication and sustainable environmental management can only become a reality under an all-inclusive Public-Private-Traditional Sector Partnership, especially in the management of Open-Access Resources, which is part of the Traditional Sector Resource Area, but for which an age-old crown colonial policy excluded communities.

      <br /><br />
      When the Resource Area Proximate Traditional Sector/Community is excluded from the Management and Benefit sharing of open-access resources, the indigenes are compelled by coping exigencies to take an offensive posture against their own environment as a survival coping strategy especially in the absence of any meaningful job prospect and a definite accountability policy. 
      <br /><br />
      Ghana is said to be currently Africa’s top gold producer and an oil producing county, yet poverty is widespread and further exacerbated by the Neo-Colonial-Debt -Trap and its taxing consequences on businesses and the population, including pensioners. How can one justify and celebrate this status when thousands of schools are still under trees; Twenty-first century major inter-national and intra-national roads are still in single-lanes and poorly lit, devouring breadwinning Ghanaians in horrific numbers on regular basis through head-on collisions and the frightening threat of staggering youth unemployment. 
      <br /><br />
      If the Existing Regime and order cannot protect our forests resources and water bodies, secure our wellbeing and welfare and guarantee dividends from these resources to the communities, the fundamental thing for Ghana and Ghanaians to do on December 7th, 2024, is Break the current duopoly (that has caged Ghana and Ghanaians) for thirty-two years and usher in a New Order. 
      <br /><br />
      As President, Head of State, Head of Government and Commander-In-Chief of the Armed Forces of Ghana, my pledge to Ghana and Ghanaians is to fight the menace of illegal mining (galamsey) without fear nor favour, with:
      <br />
      1. Full enforcement of existing laws.
      <br />
      2. Repealing LI 2462.
      <br />
      3. Passing new laws where necessary.
      <br />
      4. Tightening loopholes in existing laws.
      <br />
      5. Providing alternative livelihoods such as: Carbon Credit harvesting and a legal industrial hemp industry to the youth in illegal mining (galamsey) and other Ghanaians who want to venture into those areas; and

      <br />
      6. Establishing a new developmental framework involving public-private-traditional sectors.
    </p>
  </div>
</div>
<QuoteComponent
        quoteText="The time has now come for a new framework for consensus building towards a new Developmental Mode, with the inclusion of the Traditional Sector as partners in the Agreement, Management and Benefit sharing of Land Resources as well as its preservation within the framework of the Communities/Traditional Area Values and Heritage systems."
        authorText="Nyaaba-Aweeba Azongo."
        roleText="Vice-Presidential Candidate to George Twum-Barimah-Adu"
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
<QuoteComponent
        quoteText="Since independence, the political norm has been that a political party going into an election must sing praises of its past achievements and make high-sounding promises for the future. At the same time, a political party must paint its opponents in the worst possible light. We have mastered this art, and in the process, we have forgotten that politics should be about the future of our children and our motherland. We have reduced election campaigns to bitter struggles between competitors seeking power for the wrong reasons.”"
        authorText="- Kwaku Kwarteng; MP, Obuasi West"
        backgroundColor={'#b92026'}
      />


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
        quoteText="If the Existing Regime and order cannot protect our forests resources and water bodies, secure our wellbeing and welfare and guarantee dividends from these resources to the communities, the fundamental thing for Ghana and Ghanaians to do on December 7th, 2024, is Break the current duopoly (that has caged Ghana and Ghanaians) for thirty-two years and usher in a New Order."
        roleText="Vice-Presidential Candidate to George Twum-Barimah-Adu"
        backgroundColor={'#b92026'}
      />
    </div>
  );
}
