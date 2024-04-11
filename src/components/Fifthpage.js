import React from 'react';
import image from '../assets/Money.jpg'; // Import your JPG image

const FifthPage = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0"> {/* Image on the left */}
            <img src={image} alt="Payment methods" className="w-auto h-auto rounded" />
          </div>
          <div className="lg:w-1/2 lg:pl-8"> {/* Content on the right */}
            <h2 className="text-3xl lg:text-4xl  text-black mb-4">Boost approval rates</h2>
            <p className="text-lg lg:text-xl text-gray-700 mb-4">Optimize your backend payments setup with granular, clean<br/>messaging and the right payment rails, so you can help boost<br/> apporval chances and capture more of your hard-earned<br/> revenue.</p>
          
          </div>
        </div>
     
        <div className=" bg-yellow-50 mt-8"> {/* Space between content and footer */}
          <div className="bg-yellow-50 py-8 flex flex-wrap justify-between"> {/* Flex footer */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4"> {/* First flex item */}
              <h3 className="text-lg font-semibold mb-2">Keep data fresh</h3>
              <p>Use Account Updater to<br/>securely make batch and<br/>real-time updates for Visa,<br/>Matercard, and Discover.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4"> {/* Second flex item */}
              <h3 className="text-lg font-semibold mb-2">Adopt network<br/>tokenization</h3>
              <p> Boost security and <br/> approvals with a partner<br/>who ahs already tokenized<br/>hundreds of millions of <br/>credit cards.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4"> {/* Third flex item */}
              <h3 className="text-lg font-semibold mb-2">Retry failed transactions</h3>
              <p>We strive to Optimize<br/>approvals right from the<br/>start.But if they fail, we can<br/>retry the trasaction on <br/>alternative acquiring<br/>networks</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4"> {/* Fourth flex item */}
              <h3 className="text-lg font-semibold mb-2">Optimize routing</h3>
              <p>Route transaction to global<br/> acquirers and networks that <br/>will yield the fastest, most <br/> reliable and least expansive <br/> transaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default FifthPage;
