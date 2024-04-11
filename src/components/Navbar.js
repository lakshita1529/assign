import React, { useState } from 'react';
import paypalLogo from '../assets/Paypal.png'; // Import your PayPal logo image
import barsIcon from '../assets/bar.jpg'; // Import your custom bars icon image

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={paypalLogo} alt="PayPal Logo" className="h-8 w-auto mr-4" />
          
          <div className="hidden lg:flex">
            <button className="text-blue-800 font-semibold px-4 py-2 hover:text-gray-800">Personal</button>
            <button className="text-blue-800 font-semibold px-4 py-2 hover:text-gray-800">Business</button>
            <button className="text-blue-800 font-semibold px-4 py-2 hover:text-gray-800">Developer</button>
            <button className="text-blue-800 font-semibold px-4 py-2 hover:text-gray-800">Help</button>
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleDropdown} className="bg-white p-2 rounded-md">
            <img src={barsIcon} alt="Menu" className="h-6 w-auto" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
              <button className="block w-full text-left px-4 py-2 text-blue-900 hover:bg-gray-100">Personal</button>
              <button className="block w-full text-left px-4 py-2 text-blue-900 hover:bg-gray-100">Business</button>
              <button className="block w-full text-left px-4 py-2 text-blue-900 hover:bg-gray-100">Developer</button>
              <button className="block w-full text-left px-4 py-2 text-blue-900 hover:bg-gray-100">Help</button>
              <div className="border-t border-gray-200 mt-2">
                <button className="block w-full text-left px-4 py-2 text-blue-900 hover:bg-gray-100">Sign Up</button>
                <button className="block w-full text-left px-4 py-2 text-blue-900 hover:bg-gray-100">Log In</button>
              </div>
            </div>
          )}
        </div>
        <div className="hidden lg:flex">
        <button className="bg-white border border-blue-900 text-blue-900 font-semibold rounded-full px-4 py-2 ml-4 hover:bg-gray-100">Log In</button>
          <button className="bg-blue-900 text-white font-semibold rounded-full px-4 py-2 ml-4 hover:bg-blue-600">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
