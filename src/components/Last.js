import React from 'react'
import logo from '../assets/logo.webp'

function Last() {
  return (
    <footer className="bg-white-200 py-8">
  {/* Centered paragraph */}
  <p className="text-sm text-center mb-4 text-gray-600">
<p>1 For the purpose of this study , Forester aggregated data from four enterprise merchants to create a single composite merchant with $500 million in revenue processed yearly. Individual <br/> results will vary.</p>
<p> 2.Forrester, Commissioned by PayPal, December 2021, Forrester constructed a Total Economic Impact framework for those orgainzations considering an investement in the PayPal's <br/> enterprise payment platform, powered by Braintree. </p>

<p> 3. B2B International, commissioned by Paypal, Nov-Dec-2021, B2B International surveyed amongst 504 mid-market and large enterprises in US, UK, and DE during November/December<br/>2021. LE defined as merchants with annual revenue 100M; Mid- market defined as merchants with annual between 20M-100M. Bae N: Enterprise Braintree Users =21</p>
 <p> 4. Major globaal payments network and PayPal internal data analysis form transaction over a 12-month period from Q4 2020-Q3 2021 in 8 markets(US, UK, DE, AU, FR, IT, ES, CA) across<br/> 12 verticals. Does not include transactions from domestic schemes (e.g. Cartes Bancaires, EFTPOS).</p>
 
  </p>
  <br/>

  {/* Logo and navigation */}
  <div className="flex flex-col md:flex-row justify-left items-center mb-4 md:mb-0 mx-4">
    <img src={logo} alt="PayPal Logo" className="w-24 h-auto mr-2" />
    <br/><br/>
    <ul className="flex flex-wrap justify-center text-blue-900 font-bold">
      <li className="mx-2">Help</li>
      <li className="mx-2">Contact</li>
      <li className="mx-2">Fees</li>
      <li className="mx-2">Security</li>
      <li className="mx-2">Apps</li>
      <li className="mx-2">Shop</li>
      <li className="mx-2">Enterprise</li>
      <li className="mx-2">Partners</li>
      <li className="mx-2">Feedback</li>
    </ul>
  </div>

  {/* Horizontal line */}
  
  <hr className="border-gray-400 mb-4" />

  {/* Footer links */}
  
  <div className="flex flex-col md:flex-row justify-between items-center text-sm mx-4 text-blue-900 font-bold">
    <ul className="flex flex-wrap justify-center md:justify-start">
      <li className="mr-4">About</li>
      <li className="mr-4">Newsroom</li>
      <li className="mr-4">Jobs</li>
      <li className="mr-4">Investor Relations</li>
      <li className="mr-4">Value in Action</li>
      <li className="mr-4">Public Policy</li>
      <li className="mr-4">Sitemap</li>
    </ul>
    <p>&copy; 1999-2022 Accessibility Privacy Cookies</p>
  </div>
</footer>

  )
}

export default Last