import React from "react";
import heroTwoimg from "../assets/images/Blob.png"
import heroTwoimgTwo from '../assets/images/Rectangletwo.png'

function HeroTwo(){
return(

    <>
   <div class="bg-white Hero text-white  mb-16 flex mx-auto flex-col sm:flex-row relative items-center">
{/*     
    <div class="lg:w-1/3 sm:w-full mb-12 sm:mb-0">
        <img class="w-full" src={heroTwoimg} alt="" />
        
    </div> */}

    <div class="lg:w-1/2 bg-image sm:w-full mb-12 sm:mb-0">
        <img class="w-full" src={heroTwoimgTwo} alt="" />
    </div>
    
   

    
    <div class="lg:w-1/2 pr-4 p-4 text-center sm:text-left secOne mt-12 mb-12 relative z-10">
        <h1 class="text-4xl mt-4 font-semibold leading-snug">Improve your well-being</h1>
        <h1 class="text-4xl mt-4 font-semibold leading-snug"> with Aromatherapy</h1>
        <p class="mt-8">Diffusing can be exactly what you need to add purpose and focus to your daily tasks.
            <br /> We've got tons of fun diffuser blends,
            <br /> with scents to suit every mood, day, and situation.
        </p>
        <button class="Herobtn">Explore the Collection</button>
    </div>
</div>












    </>
)


}

export default HeroTwo;