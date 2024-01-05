import React from "react";
import right from '../assets/images/Right Side.png'


function Banner () {
    return(

        <>
      




<div class="banner items-center h-full flex flex-col md:flex-row justify-between mt-6">
  <div class="flex flex-col justify-center p-8 md:w-2/3 lg:w-3/4 xl:w-1/2 h-full text-center mb-4 md:mb-0">
    <h1 class="text-4xl font-extrabold text-white mb-4">
      Our luxury soaps are 100% natural, providing nourishing benefits for your skin.
    </h1>
    <button class="BannerBtn text-black px-4 py-2 rounded">Shop All</button>
  </div>
  <div class="flex items-center h-full">
    <img src={right} alt="Soap Image" class="w-full max-w-2xl h-full"/>
  </div>
</div>



        </>
    )
}

export  default Banner;