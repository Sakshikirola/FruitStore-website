import BannerPng from "../assets/fruits-splash.png" 
import {motion} from "framer-motion"
import { FadeUp } from './animation'

const Banner = () => {
  return <section className='bg-[#fb923c]/10'> 
    <div className='md:px-12 px-6 py-10 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 '>
      {/* Banner Image */}
      <div className='flex justify-center items-center'>
        <motion.img 
        initial = {{opacity:0,scale:0.5}}
        whileInView = {{opacity:1, scale:1}}
        transition = {{type:"spring", stiffness: 100, delay:0.2}}
        viewport = {{once:true}}
        src={BannerPng} alt="" className='w-75 md:max-w-100 h-full object-cover drop-shadow'/> 
      </div> 

      {/* Banner Info */}
      <div className='flex flex-col justify-center'>
        <div className='text-center md:text-left space-y-4 lg:max-w-100'>
            <motion.h1 
             variants={FadeUp(0.5)}
             initial="hidden"
             whileInView="visible"
             viewport={{once:true}} 
             className='text-3xl lg:text-6xl font-bold uppercase'>Brand Info
            </motion.h1>
            <motion.p
             variants={FadeUp(0.7)}
             initial="hidden"
             whileInView="visible"
             viewport={{once:true}} 
            >
             At FruitStore, we’re redefining healthy living. We deliver fresh, juicy, and nutrient-packed fruits straight from farms to your home. No compromise on quality, no delay in freshness.
            </motion.p>
            <motion.p 
             variants={FadeUp(0.9)}
             initial="hidden"
             whileInView="visible"
             viewport={{once:true}} 
            >
              Whether you're starting your day strong or fueling your fitness journey, we make healthy eating simple, affordable, and exciting.
             Freshness you can taste. Health you can feel.
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}  
              initial="hidden"
              animate="visible" 
              className='flex justify-center md:justify-start'>
              <button className='bg-[#de2c4d] text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#de0029]'>Learn More</button>
            </motion.div>  
        </div>
      </div>
    </div>
  </section>
}

export default Banner
