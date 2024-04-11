import React from 'react';
import image from '../assets/visa.jpg'; // Import your JPG image

const FourthPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0"> {/* Content on the left */}
            <h2 className="text-4xl lg:text-4xl  text-black mb-4">Offer a Range of Payment Methods Worldwide</h2><br/>
            <p className="text-lg lg:text-xl text-gray-700 mb-4">Reach new customers and give them the payment options<br/> they prefer so you don't miss a sale.</p>
            <p className="text-lg lg:text-xl text-gray-700 mb-4">Accept credit and debit cards, digital wallets, PayPal, and 20+<br/> local payment methods all in a single integration.</p>
            <div className="flex items-center"> {/* Link and arrow */}
              <a href="#" className="text-blue-800 font-semibold hover:underline mr-2 my-4">More about payment methods</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
          <div className="lg:w-1/2 lg:text-right"> {/* Image on the right */}
            <img src={image} alt="Payment methods" className="w-80 lg:w-full h-auto mx-auto lg:mr-0 lg:ml-auto" />
          </div>
          </div>
        <div className="flex flex-wrap justify-between my-20"> {/* Flex footer */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4"> {/* First flex item */}
            <h3 className="text-lg font-semibold mb-2">Enable multiple commerce<br/>scenarios</h3>
            <p>Web.Mobile.App.In store.<br/>Get paid in the channels<br/>where you sell today and<br/>tomrrow</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4"> {/* Second flex item */}
            <h3 className="text-lg font-semibold mb-2">Reach millions of <br/>consumers</h3>
            <p>Connect with our expansive<br/> network of shoppers around<br/>the world who love to use<br/>Paypal, Venma, and Pay<br/>Later.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4"> {/* Third flex item */}
            <h3 className="text-lg font-semibold mb-2">Vault customer payment<br/>info</h3>
            <p>Help drive conversion and<br/>make repeat purchases<br/> simple for your customers<br/>with secure data storage</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4"> {/* Fourth flex item */}
            <h3 className="text-lg font-semibold mb-2">Optimize checkout<br/>experience</h3>
            <p>Control the look and feel of<br/>your checkout page with<br/>drop-in UI, hosted fields,<br/>and customizable smart<br/>payment buttons.</p>
          </div>
        </div>
        </div>
      </div>
    
  );
};

export default FourthPage;
