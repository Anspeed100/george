import { useEffect } from "react";
import AltNavbar from "../components/alt_navbar";
import Navbar from "../components/navbar";
import Bio1Img from "../assets/Group_4115.png";
import Bio2Img from "../assets/Group 4109.png";
import Bio3Img from "../assets/asset_1.png";
import RedFooter from "../components/red_footer";

export default function AboutPage() {
  // useEffect(() => {
  //   document.body.classList.add("about-body-bg");
  // }, []);

  return (
    <div className="pt-36  ">
      {/* <div className="hidden lg:flex md:flex"></div>
      <div className="flex lg:hidden md:hidden"></div> */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-24 lg:mt-0 md:mt-0 pt-36">
        <img src={Bio1Img} alt="bioimg" className="ml-12 bio-img-1" />
        <div className="flex flex-col gap-2">
          <h1 className="bio-header">Committed to Ghana</h1>
          <h1 className="bio-header-sub">Earl life and education</h1>
          <p className="bio-p leading-8">
            George Twum-Barimah-Adu (Uncle George) was born on 18 August 1963,
            the third child of the late Frank Brako Adu Snr, (Teacher Adu), a
            public servant and the late Beatrice Mariam Ama Acheampong, a
            government school teacher at Old Tafo. Uncle George is the nephew of
            the late Kwaku Boateng Esq, a former government Min-ister in the
            government of Osagyefo Dr. Kwame Nkrumah. A broth- er to Magaret
            Mary Adu (MD Aomega Lodges), Frank Brako Adu Jnr. (former MD of CAL
            Bank PLC); and the late Joseph Boakye-Danquah-Adu, (former MP of
            Abuakwa North Constitu- ency).
            <br />
            <br />
            Uncle George attended Castle Road Methodist Primary School (A-
            dabraka), Englebert School (Airport Residential Area), and Garri-
            son Primary (Burma Camp), before attending Presbyterian Boys’
            Secondary School (PRESEC, Legon) now Presbyterian Boys’ Senior High
            School; from 1975 to 1980.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="bio-p ml-0 lg:ml-12 md:ml-12 md:leading-8">
            After secondary school uncle George pursued a bachelor’s degree in
            International Relations from the College of Arts and Sciences,
            Florida International University (FIU), Miami, Florida. And later a
            Master of Arts in International Studies at the same university;
            graduating on April 19, 1991. At FIU he was a student Senator, rep-
            resenting the College of Arts and Sciences, Chairman of the Board of
            Governors for the North Miami Campus, a Faculty Scholar, Member
            Faculty Scholars Executive Board and Chairman of the Faculty
            Scholars Committee on Housing.
          </p>
          <h1 className="bio-header-sub ml-12 mt-4 lg:mt-12 md:mt-12">
            WORK AND BUSINESS
          </h1>
          <p className="bio-p ml-0 lg:ml-12 md:ml-12 md:leading-8">
            Uncle George returned to Ghana in 1993 and started worked with
            National Insurance Commission in October of the same year. He left
            the Commission in April 2000 to prepare to enter the private sector.
            In 2001 he became an Executive Director of Cypress In- vestments
            Limited. A position he held until 31 April 2023. In 2006 in authored
            the HIV and AIDS book titled, “Behaviour Brings Success”, which is
            currently in its Fourth Edition. In 2009 he de- veloped the Road
            User Playing Cards (which is the Ghana High- way Code in a card game
            format), Bonanza card game, and Nudu Board Game which are currently
            licensed to Dominion Games Limited, developers of WordMeetsTee
            mobile Word game and other digital products.
            <br />
            <br />
            Uncle George is a Tech Enthusiast!
          </p>
          <h1 className="bio-header-sub ml-12 mt-4 lg:mt-12 md:mt-12">
            PERSONAL LIFE
          </h1>
          <p className="bio-p ml-0 lg:ml-12 md:ml-12">
            Uncle George is a practicing Christian, married to Winifred
            Twum-Barimah-Adu and they are blessed with three children: Nana
            Afia, Kweku Nhyira and Kwadwo Odoi.
          </p>
          <div className="flex flex-col gap-2 justify-center items-center mt-12">
            <img src={Bio3Img} alt="" className="w-2/5 h-18" />
            <a
              href="#"
              spy={true}
              smooth={true}
              className="button-green-primary mt-4"
            >
              <span className="button-text">Take Action</span>
            </a>
          </div>
        </div>
        <img src={Bio2Img} alt="" className="bio-2-height" />
      </div> */}
      <div>
        {/* early life and education */}
        <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 md:px-5 pb-3">
          <img
            src={Bio1Img}
            alt="candidate"
            className=" h-[300px] md:h-[500px]"
          />
          <div className=" flex flex-col justify-center items-center md:items-start md:w-[50%] gap-3 px-3 ">
            <h2 className="font-bold text-3xl text-[#b91f26] pb-5">
              Committed to Ghana
            </h2>
            <h4 className="font-semibold text-2xl">Early Life and education</h4>
            <p>
              George Twum-Barimah-Adu (Uncle George) was born on 18 August 1963,
              the third child of the late Frank Brako Adu Snr, (Teacher Adu), a
              public servant and the late Beatrice Mariam Ama Acheampong, a
              government school teacher at Old Tafo. Uncle George is the nephew
              of the late Kwaku Boateng Esq, a former government Minister in the
              government of Osagyefo Dr. Kwame Nkrumah. A brother to Magaret
              Mary Adu (MD Aomega Lodges), Frank Brako Adu Jnr. (former MD of
              CAL Bank PLC); and the late Joseph Boakye-Danquah-Adu, (former MP
              of Abuakwa North Constituency). Uncle George attended Castle Road
              Methodist Primary School (Adabraka), Englebert School (Airport
              Residential Area), and Garrison Primary (Burma Camp), before
              attending Presbyterian Boys’ Secondary School (PRESEC, Legon) now
              Presbyterian Boys’ Senior High School; from 1975 to 1980. After
              secondary school uncle George pursued a bachelor’s degree in
              International Relations from the College of Arts and Sciences,
              Florida International University (FIU), Miami, Florida. And later
              a Master of Arts in International Studies at the same university;
              graduating on April 19, 1991. At FIU he was a student Senator,
              representing the College of Arts and Sciences, Chairman of the
              Board of Governors for the North Miami Campus, a Faculty Scholar,
              Member Faculty Scholars Executive Board and Chairman of the
              Faculty Scholars Committee on{" "}
            </p>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="h-[1px] bg-[#b91f26] w-[80%] md:w-[70%]  mx-auto my-14"></div>

        {/* Work and Business */}
        <section className="flex flex-col-reverse items-center md:flex-row md:justify-center gap-5 md:gap-10 md:px-5 pb-3 ">
          <div className=" flex flex-col justify-center items-center md:items-start md:w-[50%] gap-3 px-3 ">
            <h4 className="font-semibold text-2xl">Work and Business</h4>
            <p>
              Uncle George returned to Ghana in 1993 and started worked with
              National Insurance Commission in October of the same year. He left
              the Commission in April 2000 to prepare to enter the private
              sector. In 2001 he became an Executive Director of Cypress In-
              vestments Limited. A position he held until 31 April 2023. In 2006
              in authored the HIV and AIDS book titled, “Behaviour Brings
              Success”, which is currently in its Fourth Edition. In 2009 he de-
              veloped the Road User Playing Cards (which is the Ghana High- way
              Code in a card game format), Bonanza card game, and Nudu Board
              Game which are currently licensed to Dominion Games Limited,
              developers of WordMeetsTee mobile Word game and other digital
              products.
            </p>
          </div>
          <img
            src={Bio2Img}
            alt="candidate"
            className="h-[300px] md:h-[500px] "
          />
        </section>

        {/* DIVIDER */}
        <div className="h-[1px] bg-[#b91f26] w-[70%]  mx-auto my-8 md:my-14"></div>

        {/* Personal Life */}
        <section className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:gap-10 md:px-5 pb-3   ">
          <img
            src={Bio3Img}
            alt="candidate"
            className=" h-[300px] md:h-[500px] border "
          />
          <div className=" flex flex-col justify-center items-center md:items-start md:w-[50%] gap-3 px-3  ">
            <h4 className="font-semibold text-2xl ">Personal Life</h4>
            <p>
              Uncle George is a practicing Christian, married to Winifred
              Twum-Barimah-Adu and they are blessed with three children: Nana
              Afia, Kweku Nhyira and Kwadwo Odoi.
            </p>
          </div>
        </section>
      </div>
      <RedFooter />
    </div>
  );
}
