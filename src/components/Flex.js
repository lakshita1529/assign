import React from 'react'
import icon from '../assets/Contact.png'
import image from '../assets/Developer.jpg'
import time from '../assets/time.jpg'

function Flex() {
  return (
    <div className="bg-gray-200 ">
<div className="flex flex-col md:flex-row justify-left items-center mb-4 md:mb-0 mx-5 ">
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card bg-white">
            <div className="p-5 flex flex-col ">
                <div className="rounded-xl overflow-hidden ">
                    <img src={icon} alt=""/>
                </div>
                <h5 className="text-2xl md:text-3xl font-medium mt-3">Contact our sales <br/> team</h5>
        <p className='text-slate-500 text-lg mt-3'>Learn how payments can be leveraged as a catalyst<br/>for growth</p>
            <a href='#' className="text-center bg-blue-800 text-white py-2 rounded-full mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Contact sales</a>
        </div>
            </div>
            <div className="card bg-white">
            <div className="p-5 flex flex-col ">
                <div className="rounded-xl overflow-hidden ">
                    <img src={time} alt=""/>
                </div>
                <h5 className="text-2xl md:text-3xl font-medium mt-3">24/7<br/>Availability</h5>
                <br/>
        <p className='text-slate-500 text-lg mt-3'>We're available 24/7 to assist you with any inquiries or concerns. Our dedicated support team is here around the clock to provide assistance whenever you need it</p>
            <a href='#' className="text-center bg-blue-800 text-white py-2 rounded-full mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Contact sales</a>
        </div>
            </div>
            <div className="card bg-white ">
            <div className="p-5 flex flex-col   ">
                <div className="rounded-xl overflow-hidden" >
                    <img src={image} alt=""/>
                </div>
                <h5 className="text-2xl md:text-3xl font-medium mt-3">Explore developer<br/>documentation</h5>
        <p className='text-slate-500 text-lg mt-3'>See how our flexible and interoperable technology <br/>helps to simplify integration</p>
            <a href='#' className="text-center bg-blue-800 text-white py-2 rounded-full mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Contact sales</a>
        </div>
    <br/>
    <br/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Flex