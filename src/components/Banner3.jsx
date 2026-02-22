import BannerPng from "../assets/banner-bg.jpg"  
import {motion} from "framer-motion"
import { FadeLeft } from './animation'

const bgstyle = {
    backgroundImage: `url(${BannerPng})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: "0 30px"  
}

const Banner3 = () => {
  return <section className="md:px-12 px-6 py-10 mb-12">   
    <div
     style={bgstyle}  
     className='md:px-12 px-6 py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 rounded-3xl'>
      {/* Blank div */} 
      <div></div>

      {/* Banner Info */}
      <div className='flex flex-col justify-center'>
        <div className='text-center md:text-left space-y-4 lg:max-w-100'>
            <motion.h1 
             variants={FadeLeft(0.5)}
             initial="hidden"
             whileInView="visible"
             viewport={{once:true}} 
             className='text-3xl lg:text-6xl font-bold uppercase'>Get Fresh Fruits Today
            </motion.h1>
            <motion.p
             variants={FadeLeft(0.7)}
             initial="hidden"
             whileInView="visible"
             viewport={{once:true}} 
            >
             At FruitStore, we’re redefining healthy living. We deliver fresh, juicy, and nutrient-packed fruits straight from farms to your home. No compromise on quality, no delay in freshness.
            </motion.p>
            <motion.div
              variants={FadeLeft(0.9)}    
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

export default Banner3

