import React from "react";

import Logo from '../assets/images/Vector.png' 

function Footer() {
    return(
    <>
    

    <div className="logo flex mt-16 bg-gray-100">
           <img className="w-8 md:w-8 mt-8 ml-4 lg:w-8 xl:w-8 2xl:w-8" src={Logo} alt="" />
            <h1 className="text-black  text-xl font-bold mt-8 ml-4 ">Toutem</h1>
           </div>
<body class="bg-gray-100  flex items-center justify-center">

<div class="flex footer flex-wrap items-center justify-center md:justify-around">
    <div class="w-full md:w-72 p-6 m-4 text-center">
        <h2 class="text-xl font-bold mb-4 text-gray-800">Customer Support</h2>
        <h3 class="text-gray-500 mb-2">Shipping</h3>
        <h3 class="text-gray-500 mb-2">Free Return</h3>
        <h3 class="text-gray-500 mb-2">Sustainability</h3>
        <h3 class="text-gray-500">Leader Support</h3>
    </div>
    <div class="w-full md:w-72 p-6 m-4 text-center">
        <h2 class="text-xl font-bold mb-4 text-gray-800">Customer Support</h2>
        <h3 class="text-gray-500 mb-2">Shipping</h3>
        <h3 class="text-gray-500 mb-2">Free Return</h3>
        <h3 class="text-gray-500 mb-2">Sustainability</h3>
        <h3 class="text-gray-500">Leader Support</h3>
    </div>
    <div class="w-full md:w-72 p-6 m-4 text-center">
        <h2 class="text-xl font-bold mb-4 text-gray-800">Customer Support</h2>
        <h3 class="text-gray-500 mb-2">Shipping</h3>
        <h3 class="text-gray-500 mb-2">Free Return</h3>
        <h3 class="text-gray-500 mb-2">Sustainability</h3>
        <h3 class="text-gray-500">Leader Support</h3>
    </div>
</div>


</body>

<p class=" bg-gray-100 mb-8 flex text-center justify-center text-gray-500 font-semibold leading-snug ">copyright © 2022 Toutem
all rights reserved.</p>





    </>
    )
}

export default Footer;