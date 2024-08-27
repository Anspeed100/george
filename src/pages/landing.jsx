import ClientImg from "../assets/asset_1.png";
import BackgroundAlt from "../assets/background_2.png";

import G3Img from "../assets/G3.png";
import G5Img from "../assets/G5.png";

import HeroCarousel from "../components/HeroCarousel";
import QuoteComponent from "../components/QuoteComponent";

import { useEffect } from "react";
import "../scroll.scss";
import { Link } from "react-router-dom";

const parallaxEffect = () => {
  const parallaxElements = document.querySelectorAll("[data-parallax]");

  window.addEventListener("scroll", () => {
    parallaxElements.forEach((el) => {
      const speed = el.getAttribute("data-speed") || 0.5;
      const offset = window.pageYOffset * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
  });
};

export default function LandingPage() {
  useEffect(() => {
    const handleScroll = () => {
      const pageTop = window.scrollY;
      const pageBottom = pageTop + window.innerHeight;
      const tags = document.querySelectorAll(".fadein");

      tags.forEach((tag) => {
        const tagTop = tag.getBoundingClientRect().top + window.scrollY;
        if (tagTop < pageBottom) {
          tag.classList.add("visible");
        } else {
          tag.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    parallaxEffect();
  }, []);

  return (
    <>
      <HeroCarousel />
      <div className="transition-container">
        <div className="relative mb-">
          <div className="lg:flex md:flex flex-col relative mt-8">
            <div className="flex flex-col md:flex-row mt-10">
              <div className="object-fill flex flex-1">
                <img
                  src={ClientImg}
                  alt="Candidate"
                  className="z-10 w-full h-auto max-h-[80vh] object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 justify-start m-auto p-12 z-10">
                <h1 className="text-3xl md:text-5xl font-bold">
                  Welcome Dear Friend,
                </h1>
                <h1 className="text-start font-canarobook md:text-2xl text-center">
                  I am George Twum-Barimah-Adu 
                  <br/>
                  <br/> 
                  I want your support and vote to be your next President – to serve you as Head of State, Head of Government and Commander-In-Chief of the Armed Forces of Ghana!
                  <br/>
                  <br />
                  Ghana does not need Used Breath or Re-used Breath. What Ghana needs is Fresh Breath. 
                  Strong!
                  <br />
                  <br/>
                  God Bless Ghana and make her Great, Strong, Peaceful and Prosperous.
                  <br/>
                  <br/>
                  Thank you!
                </h1>
                <div className="flex justify-end">
                  <Link
                    to="/register"
                    className="button-green-primary mt-2 mb-10"
                  >
                    <span className="button-text font-bold">Take Action</span>
                  </Link>
                  {/* <div className="absolute bottom-0 z-20">
                    <img src={Vote4UGImg} alt="vote for UG" className="w-full max-w-xs md:max-w-md lg:max-w-lg" />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="home-banner">
              <div className="overlay"></div>
            </div>
            <div className="home-banner-alt">
              <img
                src={BackgroundAlt}
                alt="Background"
                className="w-3/4 h-3/4"
              />
            </div>
          </div>
          <QuoteComponent
            backgroundColor={"#b92026"}
            quoteText="Countrymen, the task ahead is great indeed, and heavy is the responsibility; and yet it is a noble and glorious challenge - a challenge which calls for the courage to dream, the courage to believe, the courage to dare, the courage to do, the courage to envision, the courage to fight, the courage to work, the courage to achieve - to achieve the highest excellencies and the fullest greatness of man. Dare we ask for more in life?"
            authorText="- Osagyefo Dr Kwame Nkrumah"
          />

          <div className="flex flex-col md:flex-row md:h-[35rem]">
            <div className="md:justify-start items-center w-full md:w-1/2">
              <img
                src={G3Img}
                alt="Candidate"
                className="w-full h-auto max-w-md"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center items-center">
              <h1 className="text-xl pt-3 md:text-3xl font-bold text-center">
                Meet George Twum-Barimah-Adu
              </h1>
              <h1 className="text-start p-4 font-canarobook md:text-2xl">
                George Twum-Barimah-Adu (Uncle George) was born on 18 August
                1963, the third child of the late Frank Brako Adu Snr, (Teacher
                Adu), a public servant and the late Beatrice Mariam Ama
                Acheampong, a government school teacher at Old Tafo.
              </h1>
              <Link to="/about" className="button-green-primary mt-2 mb-2">
                <span className="button-text font-bold">Learn More</span>
              </Link>
            </div>
          </div>

          <div className="relative flex flex-col justify-center items-center overflow-hidden">
            <div
              className="bg-hidden md:bg-black md:w-40 md:h-40 md:absolute md:top-[5%] md:left-[10%] rounded-md fadein"
              data-parallax
              data-speed="0.1"
            ></div>
            <div
              className="bg-hidden md:bg-[#009844] md:w-56 md:h-56 md:absolute md:bottom-[15%] md:left-[8%] rounded-md fadein"
              data-parallax
              data-speed="0.1"
            ></div>
            <div
              className="bg-hidden md:bg-[#ec1c24] md:w-64 md:h-64 md:absolute top-[20%] right-[8%] rounded-md fadein"
              data-parallax
              data-speed="0.1"
            ></div>
            <div
              className="bg-hidden md:bg-[#b5a232] md:w-96 md:h-96 md:absolute md:bottom-[15%] md:right-[2%] rounded-md fadein"
              data-parallax
              data-speed="0.1"
            ></div>
            <section className="products w-full bg-black text-white py-10">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-5 font-canarobook text-black">
                  My Flag
                </h2>

                <div className="wrap bg-black mb-10 text-white p-2 w-[90%] md:w-[80%] lg:w-[40%] z-10">
                  <img src={G5Img} alt="g5" className="mb-6 mt-6 w-full" />
                  <div className="w-full flex justify-center py-8">
                    <div
                      className="w-full sm:w-3/4 lg:w-full relative"
                      style={{ paddingBottom: "56.25%", height: "0" }}
                    >
                      <iframe
                        className="absolute top-0 left-0 w-full"
                        style={{ height: "calc(100% + 2px)" }}
                        src="https://www.youtube.com/embed/vdNckoh51I0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="fadein bg-[#b92026] font-canarobook text-white p-5">
                    <h4 className="font-bold">1. Blood Red</h4>
                    <p>
                      The larger mass of red (blood red) represents the Blood
                      spilled by our forebears, over time, in the supreme
                      interest of Ghana and Ghanaians.
                    </p>
                  </div>

                  <div className="fadein bg-[#009844] text-white font-canarobook p-5">
                    <h4 className="font-bold">2. Green</h4>
                    <p>
                      This colour is representative of the Vegetation and Plant
                      resources of Ghana.
                    </p>
                  </div>

                  <div className="fadein bg-white text-black font-canarobook p-5">
                    <h4 className="font-bold">3. White</h4>
                    <p>
                      This colour stands for the Purity of the people - a purity
                      that we shall strive to make commonplace among Ghana’s
                      people, in whatever we undertake.
                    </p>
                  </div>

                  <div className="fadein bg-[#b92026] text-white font-canarobook p-5">
                    <h4 className="font-bold">4. Red</h4>
                    <p>
                      This lighter shade of red stands for the Sacrifices
                      expected of us all – not the shedding of our blood but the
                      willingness to yield everything possible, in order that
                      Ghana can become what we all desire our Motherland to be.
                    </p>
                  </div>

                  <div className="fadein bg-[#b5a232] text-white font-canarobook p-5">
                    <h4 className="font-bold">5. Gold</h4>
                    <p>
                      This colour represents the Wealth of the nation - to be
                      put to use for the benefit of all the people.
                    </p>
                  </div>
                  <div className="fadein bg-black text-white font-canarobook p-5">
                    <h4 className="font-bold">6. Black:</h4>
                    <p>
                      This colour represents our Race – a humble, gentle Black
                      People.
                    </p>
                  </div>
                </div>

                <div className="fadein bg-[#1D6F00] text-white flex flex-col justify-center items-center text-center font-canarobook p-5 m-10">
                  <span>
                    With all the colours making-up the pattern in the green
                    circle symbolizing{" "}
                    <strong className="uppercase">“togetherness”</strong> –
                    different people with different cultures, yet a common Goal
                    of progress.
                  </span>
                </div>
              </div>
            </section>
          </div>

          <div className="pledge-bg flex justify-center items-center p-3">
            <div className="w-[90%] md:w-[80%] lg:w-[70%] h-fit my-10 bg-[#ffffff42] py-8 px-5 sm:px-10 md:py-16 md:px-16 flex flex-col justify-center rounded-2xl text-white">
              <div className="flex flex-col items-center md:items-start mx-auto md:mx-0">
                <h2 className="mb-6 sm:mb-8 md:mb-12 font-extrabold  text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
                  My Pledge
                </h2>
                <div className="flex flex-col gap-4 text-base sm:text-lg md:text-xl lg:text-2xl font-canarobook text-center md:text-left">
                  <p>This is my GENUINE PLEDGE to all Ghanaians:</p>
                  <div className="font-canarobook">
                    <p>
                      I, George Twum-Barimah-Adu, will serve you in honesty and
                      dignity, that God may be glorified, and that Ghana and
                      Ghanaians shall be truly free and enjoy the boons God has
                      so generously bestowed upon us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="promise-bg flex justify-center items-center p-3">
            <div className="w-[90%] md:w-[80%] lg:w-[70%] h-fit my-10 bg-[#ffffff42] py-8 px-5 sm:px-10 md:py-16 md:px-8 flex flex-col justify-center rounded-2xl text-white">
              <h2 className="mb-6 sm:mb-8 md:mb-12 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
                My Promise
              </h2>
              <div className="flex flex-col gap-4 text-base sm:text-lg md:text-xl lg:text-2xl font-canarobook text-center md:text-left">
                <p>To the Glory of God, I Promise To Offer Ghanaians:</p>
                <div className="flex flex-col gap-4 font-canarobook text-left">
                  <ul className="list-disc list-inside">
                    <li>Servant-leadership.</li>
                    <li>Efficient and effective leadership.</li>
                    <li>Honest and incorruptible leadership.</li>
                    <li>Leadership of respect.</li>
                    <li>
                      Leadership for the benefit of all, and not a small group
                      of family, friends and cronies.
                    </li>
                    <li>
                      Leadership that plans for the future without destroying
                      the present.
                    </li>
                    <li>Leadership of ideas</li>
                    <li>Leadership that is all-embracing.</li>
                  </ul>
                </div>
                <span className="mt-5 leading-7">
                  To this end, I am calling on all Ghanaians to join forces with
                  me so we can make Ghana, (our own Ghana), the land of our
                  dreams!
                </span>
              </div>
            </div>
          </div>

          <div className="vision-bg flex justify-center items-center p-3">
            <div className="w-[90%] md:w-[80%] lg:w-[70%] h-fit my-10 bg-[#ffffff42] py-8 px-5 sm:px-10 md:py-16 md:px-16 flex flex-col justify-center rounded-2xl text-white ">
              <div className="flex flex-col items-center md:items-start mx-auto md:mx-0">
                <h2 className="mb-6 sm:mb-8 md:mb-12 font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left">
                  My Vision
                </h2>

                <div className="flex flex-col gap-4 sm:text-lg md:text-xl lg:text-2xl font-canarobook text-center md:text-left">
                  <p>
                    Someone said, “it is not who we are but what we want to
                    become.”
                  </p>
                  <p>
                    My vision, therefore, is for Ghana to become a country
                    where:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>
                      Our leaders are selfless and serve the interest of the
                      country and her citizens.
                    </li>
                  </ul>
                </div>

                <div className="w-full flex justify-end mt-5 md:mt-0">
                  <Link to="/faq?faq=10">
                    <button className="bg-[#009845] font-canarobold text-white px-10 py-2 rounded">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="flex flex-col items-center gap-5 md:gap-10 p-5 md:px-10 bg-[url('/src/assets/FadeBGFix.png')] bg-cover bg-center w-full">
            <div className="flex flex-col font-canarobold justify-start items-start w-full sm:w-[90%] md:w-[70%] lg:w-[50%] gap-3 p-5 bg-none relative md:self-end">
              <p>
                MY SLOGAN:{" "}
                <span className="text-[#BA2026] font-canarobold">
                  BREAKINGTHE
                </span>
                <span className="text-[#009845] font-canarobold"> 2</span>
              </p>
              <div className="w-full flex justify-start mt-5 md:mt-0">
                <Link to="/faq?faq=6">
                  <button className="bg-[#009845] font-canarobold text-white px-10 py-2 rounded">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col font-canarobold justify-start items-start w-full sm:w-[90%] md:w-[70%] lg:w-[50%] gap-3 p-5 bg-none relative md:self-end">
              <p>
                MY MOTTO:{" "}
                <span className="text-[#BA2026] font-canarobold">COMMON</span>{" "}
                <span className="text-[#009845] font-canarobold">
                  PROSPERITY
                </span>
              </p>
              <div className="w-full flex justify-start mt-5 md:mt-0">
                <Link to="/faq?faq=2">
                  <button className="bg-[#009845] font-canarobold text-white px-10 py-2 rounded">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </section>

          <QuoteComponent
            backgroundColor={"#500909"}
            quoteText="Dear friends, together, let us unite, Break the 2 and build a dignified, strong and prosperous nation that is self-reliant and free from foreign aid."
            authorText="- George Twum-Barimah-Adu"
          />
        </div>
      </div>
    </>
  );
}
