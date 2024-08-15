// import Asset6Img from "../assets/assets_10.png";
import GeorgePointingImage from "../assets/GeorgeFullPointPic.png";
import { Link } from "react-router-dom";

export default function TakeActionPage() {
  return (
    <div className="relative flex flex-col">
      <div className="flex-1 pt-32 flex flex-col md:flex-row">
        <div className="flex-1 bg-[#BA2026] p-4 flex flex-row justify-center items-center relative overflow-hidden -ml-20 pr-20 md:-ml-20 lg:-ml-32 xl:-ml-48">
          <img
            src={GeorgePointingImage}
            alt=""
            className="object-cover h-full w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
          <div className="flex flex-col gap-2 justify-center items-center text-center z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg pl-4 sm:pl-6 md:pl-10 ">
            <h1 className="font-canarobold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
              Join Team George
            </h1>
            <p className="text-white font-canarobook text-sm sm:text-base md:text-lg lg:text-xl pb-6">
              Volunteer to Break the 2
            </p>
            <div className="flex justify-center mb-4">
              <Link
                to="/register"
                className="button-primary-alt button-primary button-primary-text"
              >
                <span className="button-text z-10 text-sm sm:text-base md:text-lg lg:text-xl">
                  Volunteer
                </span>
              </Link>
            </div>
            <div className="bg-white rounded-lg p-2 sm:p-3 shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md">
              <h1 className="font-canarobold text-center text-base sm:text-lg md:text-xl lg:text-2xl text-[#BA2026]">
                THANKS FOR <br /> TAKING ACTION
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
