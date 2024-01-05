import React from "react";
import Card1 from "../assets/images/first.png"
import Card2 from "../assets/images/second.png"
import Card3 from "../assets/images/third.png"
import Card4 from "../assets/images/fourth.png"

function Cards() {
    return(

        <>
        
<div class="mx-auto Cards mb-16 mt-16 max-w-screen-lg">
  <div class="flex flex-col md:flex-row gap-4">
 
    <div class="flex-1 mt-4 bg-gray-200 p-4 ">
      <img src={Card1} class="mx-auto" alt="Image 1"/>
      <p class="text-center">Essential oils </p>
    </div>

    <div class="flex-1 mt-4 bg-gray-200  p-4 ">
      <img src={Card2} class="mx-auto" alt="Image 2"/>
      <p class="text-center">Natural cosmetics</p>
    </div>

    <div class="flex-1 mt-4 cardthree bg-emerald-500  p-4 ">
      <img src={Card3} class="mx-auto" alt="Image 3"/>
      <p class="text-center">Diffusers</p>
    </div>

    
    <div class="flex-1 mt-4 bg-gray-200  p-4 ">
      <img src={Card4} class="mx-auto" alt="Image 4"/>
      <p class="text-center">Aromatherapy</p>
    </div>
  </div>
</div>


        
        </>
    )
    
}
export default Cards;