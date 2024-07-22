import Asset6Img from "../assets/assets_10.png";
import { Link } from "react-router-dom";

export default function TakeActionPage() {
  return (
    <div className="min-h-screen pt-32 flex flex-col md:flex-row">
 
      <div className="flex-1 bg-[#b92026] p-4 flex flex-col justify-center items-center relative">
        <div className="flex flex-col justify-center items-end text-right w-full">
          <div className="flex flex-col gap-2 justify-center items-end text-right z-10 pr-2 pl-20">
            <h1 className="font-bold text-4xl text-green-500 pb-6">
              Become A Volunteer
            </h1>
            <p className="text-white font-canarobook pl-10">
              Be a part of the Team George Volunteers who believe in #Breakingthe2 to create an Inclusive and a future-ready people to build a stronger Ghana.
            </p>
            <div className="flex justify-end">
              <Link to='/register'
               
                className="button-primary-alt button-primary button-primary-text"
              >
                <span className="button-text z-10">Volunteer</span> 
              </Link>
            </div>
            <h1 className="font-bold text-4xl text-[#b92026]" >.</h1>
          </div>
        </div>
        <img src={Asset6Img} alt='' className="absolute bottom-0 left-0 object-contain w-full max-w-xs md:max-w-sm" />
      </div>

  
      <div className="flex-1 bg-white p-4 flex flex-col justify-center items-center relative">
        <div className="flex flex-col gap-2 justify-center items-start text-left w-full pl-2 pr-20">
          <h1 className="font-bold text-4xl text-red-500 pb-6">
            Adopt An Electoral Area
          </h1>
          <p className="font-canarobook">
            Be part of the Grass Root Campaign by adopting one or many Electoral Areas and support them with your Ideas, Time and Resources.
          </p>
          <div className="flex justify-start">
            <Link to='/register'
              className="button-primary-alt button-primary button-primary-text"
            >
              <span className="button-text">Sign Up</span>
            </Link>
          </div>
          <h1 className="font-bold text-4xl text-red-500" >TAKE ACTION!!</h1>
        </div>
      </div>
    </div>
  );
}
