import React from 'react'
import Breaking2BottomBannerComp from '../components/Breaking2BottomBannerComp'
import runningMateImage from '../assets/runningMateImage.png'
import thepairImage from "../assets/pair hd.png";
import Divider from '../components/Divider'
import { Link } from 'react-router-dom'

export default function myRunMate() {
  return (
    <div className="min-h-screen bg-white pt-32">
   
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/src/assets/georgeSignImage.png')] bg-cover bg-center px-4">
      <div className="bg-opacity-0 p-8 rounded-lg w-full max-w-5xl mx-auto">
      <img 
          src={runningMateImage} 
          alt="" 
          className="w-full h-auto mb-6"
        />
        
        </div>
        <Divider width="51%"/>
        <div className="bg-opacity-0 p-8 rounded-lg w-full max-w-6xl mx-auto">
        
        <h1 className="mb-3 mt-2 text-justify text-4xl text-[#BA2026] font-canarobold">
        PRESS RELEASE BY GEORGE TWUM-BARIMAH-ADU 2024 PRESIDENTIAL CANDIDATE OF THE REPUBLIC OF GHANA ON UNVEILING OF NYAABA-AWEEBA AZONGO A DEVELOPMENT CONSULTANT AS MY VICE-PRESIDENTIAL CANDIDATE
        </h1>
        </div>
        
        
         <div className="bg-opacity-0 p-8 rounded-lg w-full max-w-4xl mx-auto">
        <p className="mb-6 text-left text-black font-canarobook">
        George Twum-Barimah-Adu (uncle George) was born on 18 August 1963, the third child of the late Frank Brako Adu Snr, (Teacher Adu), a public servant and the late Beatrice Mariam Ama Acheampong, a government school teacher at Old Tafo. Uncle George is the nephew of the late Kwaku Boateng Esq, a former government Minister in the government of Osagyefo Dr. Kwame Nkrumah. A brother to Magaret Mary Adu (MD Aomega Lodges), Frank Brako Adu Jnr. (former MD of CAL Bank PLC); and the late Joseph Boakye-Danquah-Adu, (former MP of Abuakwa North Constituecy). Uncle George attended Castle Road Methodist Primary School (Adabraka), Englebert School (Airport Residential Area), and Garrison Primary (Burma Camp), before attending Presbyterian Boys’ Secondary School (PRESEC, Legon) now Presbyterian Boys’ Senior High School; from 1975 to 1980. After secondary school uncle George pursued a bachelor's degree in International Relations from the College of Arts and Sciences, Florida International University (FIU), Miami, Florida. And later a Master of Arts in International Studies at the same university; graduating on April 19, 1991. At FIU he was a student Senator, representing the College of Arts and Sciences, Chairman of the Board of Governors for the North Miami Campus, a Faculty Scholar, Member Faculty Scholars Executive Board and Chairman of the Faculty Scholars Committee on Housing.
        </p>
        <div className="flex justify-end">
                  <Link
                    to="/register"
                    className="button-green-primary mt-2 mb-10"
                  >
                    <span className="button-text text-xl font-canarobold">Read More</span>
                  </Link>
                </div>
      </div>
      <Divider width="51%"/>
      <div className="bg-opacity-0 p-8 rounded-lg w-full max-w-5xl mx-auto">
      <img 
          src={thepairImage} 
          alt="" 
          className="w-full h-auto mb-6"
        />
        
        </div>
    </div>
    <Breaking2BottomBannerComp/>
  </div>
  )
}
