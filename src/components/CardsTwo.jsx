import React from "react";

import rectOne from '../assets/images/Rectangle 20.png'
import rectTwo from '../assets/images/Rectangle 51.png'

function CardTwo() {
    return(
        <>
    


<div class=" flex items-center justify-center">

<div class="flex  flex-wrap items-center justify-center md:justify-around">
    <div class="w-full md:w-72 p-6 m-4 text-center ">
    <div class="  md:w-72 w-full items-center bg-cover justify-center">
            <h1 class="text-4xl mt-4 best font-semibold leading-snug">BestSeller</h1>
            <button class="mt-4 ml-2 shopbtn text-white px-8 py-4 rounded">Shop All</button>
        </div>
    </div>
    <div class="w-full md:w-72 p-6 m-4 text-center">
    <img src={rectOne} alt="Image" class="w-full h-full object-cover rounded"/>
        <div class=" p-4">
            <h1 class="font-bold mb-2">Aroma Diffuser</h1>
            <div class="flex items-center text-center">
                <p class="text-gray-700 text-xs">Beautiful decorative object, perfumes the space with your .
                </p>
            </div>
        </div>
    </div>
    <div class="w-full md:w-72 p-6 m-4 text-center">
    <img src={rectTwo} alt="Image" class="w-full h-full object-cover rounded "/>
        <div class=" p-4">
            <h1 class="font-bold mb-2">Aroma Diffuser</h1>
            <div class="flex items-center text-center">
                <p class="text-gray-700 text-xs">Beautiful decorative object, perfumes the space with your .</p>
            </div>
        </div>
    </div>
</div>


</div>







        </>
    )
    
}
export default CardTwo;