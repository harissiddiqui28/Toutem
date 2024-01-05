import React from "react";
import heroimg from "../assets/images/Ellipse 1.png"
import heroimgTwo from '../assets/images/Group 48.png'

function Hero(){
return(

    <>
   

<div class="bg-white Hero text-white p-4 flex mx-auto flex-col sm:flex-row relative">
    
    <div class="lg:w-1/2 pr-4 p-4  text-center  sm:text-left secOne  relative z-10">
        <h1 class="text-6xl mt-4 font-semibold leading-snug ">Pear kiwi</h1>
        <h1 class="text-6xl mt-4 font-semibold leading-snug ">&Mint</h1>

        <p class="mt-8">They say that home is where the heart is. Perhaps that is
            <br />why a feeling of loss is so apparent
            <br />when you are far from the ones you love.
        </p>
    </div>

    
    <div class="lg:w-1/2  sm:flex  herePic  mt-4 p-4 mb-12 justify-center secTwo ">
        <img src={heroimgTwo} alt="" />
    </div> 

</div>
















    </>
)


}

export default Hero;