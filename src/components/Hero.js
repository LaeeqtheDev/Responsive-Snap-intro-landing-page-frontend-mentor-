import React from 'react'
import Heroimage from '../images/image-hero-desktop.png'
import Heroimage2 from '../images/client-databiz.svg'
import Heroimage3 from '../images/client-audiophile.svg'
import Heroimage4 from '../images/client-maker.svg'
import Heroimage5 from '../images/client-meet.svg'

const Hero = () => {
  return (
  
  <>
    <div>
        <img class=" lg:block max-w-lg lg:max-w-lg xl:max-w-lg mr-[130px] float-right" src={Heroimage} alt="Header Cover"/>
    </div>
    <header
    class="mt-12 text-center lg:text-left px-10 flex flex-col lg:flex-row lg:items-end lg:mx-20 lg:gap-50 lg:mb-30"
  >
    
    <div class="flex flex-col content-between lg:mt-40">
      <h1 class="text-3xl font-bold lg:text-8xl xl:text-9xl">
        Make
        <br class="hidden lg:block" />
        <span>{''}</span>remote work
      </h1>
      <p
        class="font-light mt-6 text-lg lg:text-base xl:text-lg lg:mt-20 xl:max-w-lgtext-gray"
      >
        Get your team in sync, no matter your location.
        
        <p
        class="font-light  text-lg lg:text-base xl:text-lg  xl:max-w-lg lg:mb-15 text-gray"
      > Streamline processes, </p>
        create team rituals, and watch productivity soar.
      </p>
      <button
        class="mt-7 mb-9 lg:mb-20 w-36 bg-black text-white py-3 px-6 rounded-xl  lg:self-start sm:self-center hover:bg-white hover:text-black hover:border-black border-2 transition-colors"
      >
        Learn more
      </button>
      
      <div class="lg:flex items-center gap-5 xl:gap-10 px-2 sm:flex sm:items-center  ">
          <img
            class=" cursor-pointer"
            src={Heroimage2}
            alt="databiz icon"
          />
          <img
            class=" cursor-pointer"
            src={Heroimage3}
            alt="audiophil icon"
          />
          <img
            class=" cursor-pointer"
            src={Heroimage4}
            alt="meet icon"
          />
          <img
            class=" cursor-pointer"
            src={Heroimage5}
            alt="maker icon"
          />
          
        </div>
        
    </div>
    </header>

    </>    
   
    
  )
}

export default Hero

