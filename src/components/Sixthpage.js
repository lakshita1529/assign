import React from 'react';
import image from '../assets/card.jpeg'; // Import your JPG image

const SixthPage = () => {
  return (
    <div className="bg-white-500 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0"> {/* Content on the left */}
            <h2 className="text-4xl lg:text-4xl  text-black mb-4">Orchestration made simple</h2><br/>
            <p className="text-lg lg:text-xl text-gray-700 mb-4">Move on from piecemeal management of disparate tools, <br/> reporting systems, and processers. Use our flexible tools to  <br/>manage the entire payment process, help increase resiliency, <br/>and reduce operational complexity.</p>

            
          </div>
          <div className="lg:w-1/2 lg:text-right"> {/* Image on the right */}
            <img src={image} alt="Payment methods" className="w-80 lg:w-full h-auto mx-auto lg:mr-0 lg:ml-auto rounded" />
          </div>
          </div>
        <div className="flex flex-wrap justify-between my-20"> {/* Flex footer */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4"> {/* First flex item */}
            <h3 className="text-lg font-semibold mb-2">Orchestrate multiple<br/>payments partners</h3>
            <p>You always maintain full<br/> control of your data and<br/>configure partner access</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4"> {/* Second flex item */}
            <h3 className="text-lg font-semibold mb-2">Easily create secure data <br/>connections</h3>
            <p>Use just a few snippets of<br/>code to securely share data<br/>with partners you choose</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4"> {/* Third flex item */}
            <h3 className="text-lg font-semibold mb-2">Streamline reconciliation</h3>
            <p>Enable separate accounts to <br/> connect and share <br/> information.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4"> {/* Fourth flex item */}
            <h3 className="text-lg font-semibold mb-2">Unlock new sales channels</h3>
            <p>Connect to commercial<br/>partners so you can accept <br/> payments on their websites</p>
          </div>
        </div>
        </div>
      </div>
    
  );
};

export default SixthPage;
