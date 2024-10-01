import React,{useEffect, useState} from 'react'

export default function CountdownTimer() {
    const calculateTimeLeft = () => {
        const targetDate = new Date('December 7, 2024 00:00:00').getTime();
        const currentDate = new Date().getTime();
        const difference = targetDate - currentDate;
    
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        // Clear interval on component unmount
        return () => clearInterval(timer);
      }, []);
  return (
    <div className="flex flex-col items-center bg-[#b92026] pt-4 space-y-4 px-4">
      <h1 className="text-2xl text-white font-canarobold md:text-4xl">Countdown to Elections</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 w-full max-w-md sm:max-w-xl">
        <div className="p-4 bg-white text-black rounded-lg text-center">
          <span className="text-3xl font-canarobold md:text-4xl">{timeLeft.days || '0'}</span>
          <p className="text-sm font-canarobook md:text-lg">Days</p>
        </div>
        <div className="p-4 bg-white text-black rounded-lg text-center">
          <span className="text-3xl font-canarobold md:text-4xl">{timeLeft.hours || '0'}</span>
          <p className="text-sm font-canarobook md:text-lg">Hours</p>
        </div>
        <div className="p-4 bg-white text-black rounded-lg text-center">
          <span className="text-3xl font-canarobold md:text-4xl">{timeLeft.minutes || '0'}</span>
          <p className="text-sm font-canarobook md:text-lg">Minutes</p>
        </div>
        <div className="p-4 bg-white text-black rounded-lg text-center">
          <span className="text-3xl font-canarobold md:text-4xl">{timeLeft.seconds || '0'}</span>
          <p className="text-sm font-canarobook md:text-lg">Seconds</p>
        </div>
      </div>
    </div>
  )
}
