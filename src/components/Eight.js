import React from 'react';
import backgroundImage from '../assets/Blue.jpg'; // Import your background image
import checkIcon from '../assets/Check.png'; // Import your check icon

const Eight = () => {
    const points = [
        "Accept payments in 200 markets and 130 currencies",
        "Make payouts in 200 markets",
        "Acquiring in 47 markets",
        "Wide range of payment methods",
        "Recurring billing capabilities",
        "Network tokenization",
        "Batch and real-time account updater",
        "Advanced predictive risk solution",
        "PCI-compliant vault",
        "Chargeback protection",
        "Dispute automation",
        "IC++ pricing available",
        "White glove onboarding and support",
        "Flexible, scalable integration",
        "24/7 monitoring & optimization",
        "Global support center" ];
  return (
    <div className="relative bg-cover bg-center rounded-lg overflow-hidden h-screen h-90" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-white text-left">
        <div className="text-white text-center lg:text-left">
          <h2 className="text-4xl lg:text-4xl mb-4 ">Our modular solution can<br/>grow with you</h2>
          <p className="text-lg lg:text-xl mb-80">Turn on the feature you want, connect with the<br/>partners in your payments ecosystem, and keep<br/>the rest in your back pocket for whatever comes<br/>next.</p>
          <div className="flex items-center mb-50"> {/* Link and arrow */}
              <a href="#" className="text-blue-300 font-semibold hover:underlin ">Connect with a payments expert</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
        </div>
      </div>
     
      <div className="absolute top-1/2 right-0 bg-white rounded-l-lg px-4 py-8 lg:w-1/3 lg:transform lg:-translate-y-1/2">
        <ul className="divide-y divide-gray-300 mt-10"> {/* Added margin top */}
          {/* List items */}
                 {points.map((point, index) => (
            <li key={index} className="flex items-center justify-between py-4 w-full"> {/* Added w-full class */}
              <span>{point}</span>
              <img src={checkIcon} alt="Check" className="w-6 h-6 border border-green-500 rounded-full" />
            </li>

          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Eight;
