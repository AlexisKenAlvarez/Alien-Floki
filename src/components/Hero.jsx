import React, { useState } from 'react'
import videoBg from '../assets/herovideo.mp4'
import { SlArrowDown } from "react-icons/sl";
import { motion } from 'framer-motion';

const Hero = () => {

    const [onHover, setHover] = useState(false)

    return (
        <main className='min-w-full h-full bg-black lg:p-10 p-7 text-white flex overflow-hidden lg:items-end items-start'>
            <motion.nav initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5}} className='w-full h-auto flex justify-between items-center z-10 absolute top-0 left-0 lg:p-10 p-7'>
                <div className='flex items-center gap-x-4'>
                    <img src="/logo.webp" alt="Logo" className='w-[3rem]'></img>
                    <h3 className='font-orbit lg:text-2xl'>AlienFloki</h3>
                </div>
                <p className='font-orbit lg:text-lg md:text-sm text-xs'>Lorem ipsum</p>
            </motion.nav>
            <div className='absolute top-0 left-0 w-full h-full bg-[rgba(15,15,15,0.80)] z-[9]'></div>

            <video src={videoBg} autoPlay loop muted className='w-full object-cover h-full z-0 absolute top-0 left-0' ></video>

            <div className='relative z-10 pb-20 mt:pt-0 pt-28'>
                <motion.h1 initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.7}} className='font-orbit md:text-5xl font-bold text text-3xl' data-text="THE ALIENS ARE HERE">THE ALIENS ARE HERE</motion.h1>
                <motion.p  initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.7, delay: 0.05}} className='font-gruppo max-w-[40rem] md:text-xl text-md mt-3 leading-6 text-mygrey ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.</motion.p>

                <motion.div   initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.7, delay: 0.1}} className='mt-9 flex items-center gap-x-9 font-gruppo ml-3'>
                    <div className='border-[1px] border-white w-fit h-auto cursor-pointer px-8 py-2 hover:text-black hover:font-bold hover:bg-white transition-all ease-in-out duration-300 min-w-[8.8rem] max-h-[2.6em]'>
                        <p className='md:text-lg text-md mt-[-3px]'>Buy token</p>
                    </div>
                    <p className='cursor-pointer lg:text-md text-sm'>More Info</p>
                </motion.div>
            </div>

            <motion.img initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} alt="inner" src="/circinner.webp" className='sm:block hidden z-10 absolute bottom-0 right-0 md:w-[45vh] w-[40vh]  transition-all ease-in-out duration-300' style={onHover ? { width: "47vh" } : {}}></motion.img>
            <motion.img initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5, delay: 0.050}} alt="inner" src="/circouter.webp" className='sm:block hidden z-10 absolute bottom-0 right-0 md:w-[80vh] w-[70vh] transition-all ease-in-out duration-300' style={onHover ? { width: "90vh" } : {}}></motion.img>

            <div className='absolute z-10 right-10 bottom-9'>
                <div className='flex items-center gap-x-6 cursor-pointer'>
                    <p className='font-orbit md:text-md text-sm'>About us</p>
                    <div className='flex h-auto w-fit md:p-5 p-3 rounded-full border-[1px] border-white hover:scale-[1.1] trasition-all ease-in-out duration-300' onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
                        <SlArrowDown className='md:text-sm text-xs' />
                    </div>
                </div>
            </div>


        </main>
    )
}

export default Hero