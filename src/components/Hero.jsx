import React from 'react' 
import { IoBagHandleOutline } from 'react-icons/io5' 
import Heropng from "../assets/fruit-plate.png" 
import Leafpng from "../assets/leaf.png" 
import { motion } from "framer-motion" 
import { FadeRight } from './animation'

const Hero = () => {
  return <section>
    <div className='md:px-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:min-h-screen items-start lg:items-center lg:-mt-10 relative md:mb-10'>
       {/* Hero info */} 
       <div className='flex flex-col justify-start md:mt-20 lg:mt-0 py-14 md:py-0 relative z-10'> 
        <div className='text-center md:text-left space-y-4 max-w-md lg:max-w-xl'>   
            <motion.h1
            variants={FadeRight(0.6)} 
            initial="hidden"
            animate="visible" 
            className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose averia'>
            Healthy 
            <br />
            Fresh <span className='text-[#fb923c]'>Fruits!</span>
            </motion.h1>

            <motion.p
            variants={FadeRight(0.9)} 
            initial="hidden"
            animate="visible"
            className='text-2xl tracking-wide'>Order Now For Fresh Healthy Life</motion.p>

            <motion.p
            variants={FadeRight(1.2)}  
            initial="hidden"
            animate="visible"
            className='text-gray-400'>Healthy and yummy food for fresh morning breakfast. Eat Daily for good health and mind Order now and get 20% off on your first order</motion.p> 

            {/* button section */}
            <motion.div
             variants={FadeRight(1.5)}  
             initial="hidden"
             animate="visible" 
             className='flex justify-center md:justify-start'>
              <button className='bg-[#de2c4d] text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#de0029] hover:scale-110 duration-300 flex items-center gap-2'>
             <span><IoBagHandleOutline/></span>
              Order Now</button>
            </motion.div>  
        </div>
       </div>

       {/* Hero images */}
       <div className='flex justify-center items-center mt-20'> 
         <motion.img
          initial={{opacity:0, x:200, rotate:75}}
          animate={{opacity:1, x:0, rotate:0}}
          transition={{duration:1, delay:0.2}} 
          src={Heropng} alt="" className='w-88 md:w-137 drop-shadow-[-6px_8px_15px_rgba(0,0,0,0.2)]'/> 
       </div>

       <div className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-40'> 
        <motion.img 
         initial={{opacity:0, y:-200, rotate:75}}
         animate={{opacity:1, y:0, rotate:0}} 
         transition={{duration:1, delay:1.5}} 
         src={Leafpng} alt="" className='w-full md:max-w-75'/> 
       </div>
    </div>
  </section>
}

export default Hero
