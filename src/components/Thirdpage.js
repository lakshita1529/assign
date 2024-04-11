import React from 'react'

function Thirdpage() {
  return (
    <div className="bg-gray-100 min-h-screen my-10">
      <div className="container mx-auto px-4 py-8 ">
     
     <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-4 border-r border-gray-300 mb-8 lg:mb-0">
            <div className="mb-8">
              <h2 className="text-9xl lg:text-9xl font-bold text-blue-900 mt-4">401%</h2>
              <p className="text-lg lg:text-xl text-black-700 my-8">ROI for the composite<br/> merchant, estimated by Forrester with PayPal<br/> enterprise payment<br/> solution</p>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-4">
            <div className="mb-8">
              <h3 className="text-4xl lg:text-6xl font-bold text-blue-900">86%</h3>
              <p className="text-lg lg:text-xl text-black-700 mb-4 my-5">of our enterprise users indicate that we had a positive impact<br/> on authorization rates since adoption</p>
              <hr className="border-gray-300 mb-4" />
            </div>
            <div className="mb-8">
              <h3 className="text-4xl lg:text-5xl font-bold text-blue-900">4 bps</h3>
              <p className="text-lg lg:text-xl text-black-700 my-4">In the US, Braintree can help reduce chargeback rate by <br/> 4 bps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thirdpage