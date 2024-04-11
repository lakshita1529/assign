import React from 'react';

const Nine = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Video Section */}
      <div className="lg:w-1/2 lg:p-8">
        <video className="w-full lg:max-w-full rounded" controls>
          <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 lg:p-8">
        <h2 className="text-2xl lg:text-4xl mb-4 mx-5 ">Your Partner for <br/>Innovations</h2>
        <p className="mb-2 mx-5 ">See how Pressed partnered with PayPal to <br/>help their development team build<br/> an innovative solution with limited<br/> resources - all powered by Braintree <br/> technology.</p>
        <div className="text-sm lg:text-base mb-2 mx-5  "> {/* Link and arrow */}
              <a href="#" className="text-blue-800 font-semibold hover:underline mr-2 my-4">Play the video</a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
      </div>
    </div>
  );
};

export default Nine;
