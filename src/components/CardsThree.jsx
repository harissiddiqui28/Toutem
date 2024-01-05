import React from "react";
import Recthree from '../assets/images/Background.png'
import Recfour from '../assets/images/Background (2).png'

function Cardsthree(params) {
    return(
        <>


<div class=" flex items-center justify-center">

<div class="flex  flex-wrap items-center justify-center md:justify-around">
    <div class="w-full md:w-72 p-6 m-4 text-center ">
    <div class="  md:w-72 w-full items-center bg-cover justify-center">
    <h1 class="text-4xl mt-4 best font-semibold leading-snug">Trends</h1>
        <button class="mt-4 ml-2 shopbtn text-white px-8 py-4 rounded">Shop All</button>
        </div>
    </div>
    <div class="w-full md:w-72 p-6 m-4 text-center">
    <img  src={Recfour} alt="Image" class="w-full h-full object-cover rounded"/>
        <div class=" p-4">
            <h1 class="font-bold mb-2">Basket INNER BEAUTY</h1>
            <div class="flex items-center text-center">
                <p class="text-gray-700 text-xs">Original product comes in three styles of color, USB charger
                </p>
            </div>
        </div>
    </div>
    <div class="w-full md:w-72 p-6 m-4 text-center">
    <img src={Recthree} alt="Image" class="w-full h-full object-cover rounded "/>
        <div class=" p-4">
            <h1 class="font-bold mb-2">Uplift Handcrafted Soap </h1>
            <div class="flex items-center text-center">
                <p class="text-gray-700 text-xs">Beautiful decorative object, perfumes the space with your favorite fragrance.</p>
            </div>
        </div>
    </div>
</div>


</div>

        </>
    )
}
export default Cardsthree;