import React from 'react';
import image from '../assets/mouse.jpg'; // Import your JPG image

const Seventh = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
    <div className="container mx-auto px-4 py-8">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0"> {/* Image on the left */}
          <img src={image} alt="Payment methods" className="w-50 h-50 rounded" />
        </div>
        <div className="lg:w-1/2 lg:pl-8"> {/* Content on the right */}
          <h2 className="text-3xl lg:text-4xl  text-black mb-4">Manage risk and compliance</h2>
          <p className="text-lg lg:text-xl text-gray-700 mb-4">We can help you identify and manage potential security<br/> fraud, and compliance risk-sp you can focus on what matters most:growing your business</p>
 <div className="flex items-center"> {/* Link and arrow */}
              <a href="#" className="text-blue-800 font-semibold hover:underline mr-2 my-4">Learn more about managing risk</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
        
        </div>
      </div>
   
      <div className=" bg-yellow-50 mt-8"> {/* Space between content and footer */}
        <div className="bg-yellow-50 py-8 flex flex-wrap justify-between"> {/* Flex footer */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4"> {/* First flex item */}
            <h3 className="text-lg font-semibold mb-2">Right size your fraud<br/> solution</h3>
            <p>Choose the level of fraud<br/> protection you need-from <br/> our built-in fraud checks to <br/>advance tools</p>
            <div className="flex items-center"> {/* Link and arrow */}
              <a href="#" className="text-blue-800 font-semibold hover:underline mr-2 my-4">About Fraud<br/>Protection</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4"> {/* Second flex item */}
            <h3 className="text-lg font-semibold mb-2">Am yourself against<br/>cahrgebacks</h3>
            <p> We can handle fraud<br/>analysis, plus cover any<br/>eligible chargeback losses<br/>and dispute fees.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4"> {/* Third flex item */}
            <h3 className="text-lg font-semibold mb-2">Keep up with compliance</h3>
            <p>Work with one of the most<br/>connected fintech providers<br/> guidanceto help repsond to changing <br/>risk and compliance<br/>guidance</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4"> {/* Fourth flex item */}
            <h3 className="text-lg font-semibold mb-2">Let us manage disputes</h3>
            <p>Our disputes automation<br/>solution pulls data from<br/>your payment records and<br/>submits responses to<br/>issuers in real time.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default Seventh;
