import React from "react";
 
import Blogimg from '../assets/images/blog.png'

function Blogs() {
    return(
        <>

<h1 class="text-6xl blogH mt-4 flex justify-center font-semibold leading-snug ">Blog</h1>


<body class="p-8">

<div class="flex flex-col md:flex-row md:justify-center md:space-x-8">

  <div class="Blogcard p-4 w-full md:w-72 mb-4 md:mb-0">
    <img src={Blogimg} alt="Image" class="w-full h-40 object-cover mb-4"/>
    <h2 class="font-bold text-sm mb-2">How to create your own essential oil diffuser blends</h2>
    <p class="text-black font-bold text-sm">As you begin creating your own diffuser blends, it’s important to keep a few...</p>
  </div>

  <div class="Blogcard p-4 w-full md:w-72 mb-4 md:mb-0">
    <img src={Blogimg} alt="Image" class="w-full h-40 object-cover mb-4"/>
    <h2 class="font-bold text-sm mb-2">How to create your own essential oil diffuser blends</h2>
    <p class="text-black font-bold text-sm">As you begin creating your own diffuser blends, it’s important to keep a few...</p>
  </div>

  <div class="Blogcard p-4 w-full md:w-72 mb-4 md:mb-0">
    <img src={Blogimg} alt="Image" class="w-full h-40 object-cover mb-4"/>
    <h2 class="font-bold text-sm mb-2">How to create your own essential oil diffuser blends</h2>
    <p class="text-black font-bold text-sm">As you begin creating your own diffuser blends, it’s important to keep a few...</p>
  </div>

</div>

</body>

        </>
    )
}

export default Blogs;