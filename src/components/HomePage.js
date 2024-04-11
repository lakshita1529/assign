import React from 'react';
import bannerImage from '../assets/banner.png';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-6xl lg:text-6xl text-center text-black mb-4 my-5">Global Payment<br/>Processing Solutions</h1>
        <p className="text-lg lg:text-xl text-center text-gray-700 mb-8 my-4">Grow and optimize your business with a flexible, end-to-end payments platform <br/> powered by Braintree technology.</p>
        <div className="flex justify-center mb-8">
          <button className="bg-blue-900 text-white font-semibold rounded-full px-6 py-3 hover:bg-blue-600">Connect with Payment Experts</button>
        </div>
        <div className="w-90 h-90 flex justify-center items-center">
     <img src={bannerImage} alt="Banner" /> 
   
     </div>
      </div>
    </div>
    
  );
};

export default HomePage;
