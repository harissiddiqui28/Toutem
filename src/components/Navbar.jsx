import React from "react";

import Logo from '../assets/images/Vector.png'

import { useState } from 'react'; 



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return(
        <>
    {/* <body className="bg-white">
      <nav className="px-8 py-4">
        <div className="md:flex xl:flex 2xl:flex items-center justify-between">
          <div className="text-white font-bold text-2xl">
           <div className="logo">
            <div className="flex">
            <img className="w-8 md:w-8 lg:w-8 xl:w-8 2xl:w-8" src={Logo} alt="" />
            <p className="text-black ">Toutem</p>
            </div>
           
            <div className="md:hidden">
            <button
              className="text-black hover:text-black mt-4"
              id="menu-toggle"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
           </div>

          </div>
         
          <div className={`flex  md:inline  flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row space-x-6 items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
            <a href="#" className="text-black hover:text-gray-300 ml-4" >
              HOME
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              ABOUT US
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              SHOP
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              CONTACT Us
            </a>
           
          </div> 
          <button className="hidden sm:hidden md:inline lg:inline xl:inline 2xl:inline text-black hover:text-gray-300 p-2">
            
            <span class="material-symbols-outlined">storefront</span>
            <span class="material-symbols-outlined">search</span>




          </button>
        
        </div>
      </nav>
    </body> */}

    <body className="bg-white">
      <nav className="px-8 py-4">
        <div className="md:flex xl:flex 2xl:flex items-center justify-between">
          <div className="text-white font-bold text-2xls flex justify-center">
            {/* <img className="w-16 md:w-32 lg:w-48 xl:w-48 2xl:w-48 items-center" src={Nav} alt="" /> */}
            <div className="flex">
            <img className="w-8 md:w-8 lg:w-8 xl:w-8 2xl:w-8" src={Logo} alt="" />
            <p className="text-black ">Toutem</p>
            </div>
          </div>
          <div className="md:hidden flex justify-end">
            <button
              className="text-black hover:text-black"
              id="menu-toggle"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className={`flex md:inline flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row space-x-6 items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="text-black hover:text-gray-300 ml-4" >
              HOME
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              ABOUT US
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              SHOP
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              CONTACT Us
            </a>
           
      </div>
          <button className="bg-black text-white px-4 py-2 rounded hidden  md:block">
          Sign In
        </button>
        
        </div>
      </nav>
    </body>

        </>
    )
}


export default Navbar;