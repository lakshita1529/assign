import React from 'react';
import image from '../assets/packing.jpg'
import icon from '../assets/Growth.jpg'

const Secondlast = () => {
  return (

    <div className="flex flex-col">
    {/* Part 1: Blue background with text and image */}
    <div className="bg-blue-800 text-white py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Text on the left */}
        <div className="md:w-1/2 md:pr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v7.586a1 1 0 0 1-.293.707l-5.414 5.414a1 1 0 0 1-1.414 0L2.293 10.293a1 1 0 0 1-.293-.707V3zm1-1a2 2 0 0 0-2 2v7.586a2 2 0 0 0 .586 1.414l5.414 5.414a2 2 0 0 0 2.828 0l5.414-5.414A2 2 0 0 0 17 11.586V3a2 2 0 0 0-2-2H7z" clipRule="evenodd" />
          </svg>
          <div className="text-left md:text-center mb-4 md:mb-0">
            <p className="text-lg md:text-xl">The user experience in terms of usability, trust, and<br/> flexibility is everything, especially for the digitally<br/> native customer. The experience PayPal helpsThe experience PayPal helps us <br/> provide is beating all consumer expectations.</p>
       <br/>
            <p > David Oksman</p>
            <p >Chief Marketing Officer</p><br/>
            <p className="text-lg font-bold ">Samsonite</p>
          </div>
        </div>
        
        {/* Image on the right */}
        <div className="md:w-1/2 md:pl-4">
          <img src={image} alt="Image" className="w-full h-auto md:w-3/4 mx-auto md:mx-0" />
        </div>
      </div>
    </div>
  
    {/* Part 2: White background with text */}
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Text 1 on the left */}
        <div className="md:w-1/2 md:pr-4">
          <h2 className="text font-bold mb-4"> Executive Guide: PayPal enterprise integration</h2>
          <p >Whether you're making a switch a upgrading your<br/> tools, learn how we make the integration process as<br/> flexible and seamless as possible</p>
          <div className="flex items-center">
          <a href="#" className="text-blue-800 font-semibold hover:underline mr-2 my-4">Get the guide</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
        </div>
        </div>
    
        
        {/* Line separator */}
        <div className="hidden md:block border-t border-gray-600 md:border-0 md:border-l-2 md:h-full mx-4"></div>
        
        {/* Text 2 on the right */}
        <div className="md:w-1/2 md:pl-4">
          <h2 className="text md:text font-bold mb-4">eBook: Signs you've outgrown your payment processor</h2>
          <p>Payments processer stunting your growth ? It might be <br/> time to look for a new one.</p>
          <div className="flex items-center">
          <a href="#" className="text-blue-800 font-semibold hover:underline mr-2 my-4">Read the ebook</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              </div>
        </div>
      </div>
    </div>
  
    {/* Part 3: Image and text */}
    <div className="bg-gray-200 py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Image on the left */}
        <div className="md:w-1/2 md:pr-4">
          <img src={icon} alt="Image" className="w-full h-auto md:w-3/4 mx-auto md:mx-0" />
        </div>
        
        {/* Line separator */}
        <div className="hidden md:block border-t-2 border-gray-600 md:border-0 md:border-l-2 md:h-full mx-4"></div>
        
        {/* Text on the right */}
        <div className="md:w-1/2 md:pl-4 text-center md:text-left">
        <p className="font-bold">Report: Forrster econmoic impact analysis</p>
          <p className='my-3'> Forrester concluded that our enterprise solution deliver credit card and alternative<br/> payment processing services fast and at scale, while enabling high authorization<br/> rates.</p>
          <div className="flex items-center">
          <a href="#" className="text-blue-800 font-semibold hover:underline mr-2 my-4">Get the report</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Secondlast;
