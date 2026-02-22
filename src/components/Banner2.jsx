import BannerPng from "../assets/fruit-plate2.png" 
import { motion } from "framer-motion" 
import { FadeUp } from './animation'

const Banner2 = () => {
  return <section>  
    <div className='md:px-12 px-6 py-10 md:py-24 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 '>

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
            FruitStore is your trusted destination for farm-fresh, handpicked fruits delivered straight to your doorstep. Our mission is to provide premium quality fruits that are nutritious, delicious, and responsibly sourced.
            </motion.p>
            <motion.p 
             variants={FadeUp(0.9)}
             initial="hidden"
             whileInView="visible"
             viewport={{once:true}} 
            >
              From early morning breakfasts to refreshing evening snacks, FruitStore brings nature’s goodness to your table — fresh, fast, and affordable.
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}  
              initial="hidden"
              animate="visible" 
              className='flex justify-center md:justify-start'>
              <button className='bg-[#de2c4d] text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#de0029]'>Download the App</button>
            </motion.div>  
        </div>
      </div>

       {/* Banner Image */}
        <div className='flex justify-center items-center'> 
          <motion.img 
            initial = {{opacity:0, x:200, rotate:75}}
            whileInView = {{opacity:1, x:0, rotate:0}}
            transition = {{duration:1, delay:0.2}} 
            viewport = {{once:true}}
            src={BannerPng} alt="" className='w-87 md:max-w-125 h-full object-cover drop-shadow'/> 
        </div> 
    </div>
  </section>
}

export default Banner2 
