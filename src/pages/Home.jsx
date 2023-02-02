import React from "react";
import BrandAll from "../components/BrandAll";
import '../assets/css/Homestyle.css'
import Categories from "../components/Categories";
import Latest from "../components/Latest";


const Home = () => {
  return (
    <>
    
<section class=" h-[70vh] w-[100%]  slider ">
  

  <div class="flex h-full w-[100%] items-center justify-center container mx-auto px-8">
    <div class="max-w-2xl text-center">
      <h1 class="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-4xl">All About Your Dream CAR</h1>

      <p class="mt-6 lg:text-lg text-white">Get all information about your Dream Cars </p>

      <div class="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
        <input id="email" type="text" class="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2" placeholder="Search Cars" />

        <button class="transform rounded-md bg-green-500 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">Search</button>
      </div>
    </div>
  </div>

  
</section>

<Categories/>
<Latest/>

<BrandAll/>


    

    </>
  );
};

export default Home;
