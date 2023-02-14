import React from 'react'
import { motion } from 'framer-motion'
import { SlArrowDown } from "react-icons/sl";


const About = ({ prev, next }) => {
    return (
        <motion.section initial={{ skew: "-15deg, -15deg" }} animate={{ skew: "0deg, 0deg" }} exit={{ opacity: 0, skew: "-15deg, -15deg" }} transition={{ duration: 0.5 }} className='w-full h-screen bg-[#020102] text-white flex flex-col items-start md:justify-between py-10'>

            <nav  className='w-full h-auto flex justify-between items-center z-10 absolute top-0 left-0 lg:p-10 p-7'>
                <motion.div initial={{ opacity: 0, x: -150 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.4, ease: [.21, 1.03, .27, 1] }} className='flex items-center gap-x-4'>
                    <img src="/logo.webp" alt="Logo" className='w-[3rem]'></img>
                    <h3 className='font-orbit lg:text-2xl'>AlienFloki</h3>
                </motion.div>
            </nav>

            <img alt="Alien" src="/about.webp" className='absolute z-[9] right-0 bottom-0 md:w-[85vh] h-[45vh] md:h-auto '></img>

            <motion.h1 initial={{ opacity: "0%" }} animate={{ x: [-200, 0], opacity: "10%" }} transition={{ duration: 1, delay: 0.1 }} className='md:px-11 px-6 md:mt-32 mt-20 md:text-8xl text-6xl font-orbit font-bold text-white pb-10 md:pb-0 z-10'>ABOUT</motion.h1>

            <div className='relative h-auto w-fit md:px-10 pb-20 px-5 z-10'>
                <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className='font-orbit md:text-5xl font-bold text text-3xl ml-[5px]' data-text="MY ORIGIN">MY ORIGIN</motion.h1>
                <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className='font-orbit ml-3 text-heroblue font-semibold'>ABOUT ALIENFLOKI</motion.h1>

                <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className='font-gruppo max-w-[40rem] md:text-xl text-md mt-3 leading-6 text-mygrey ml-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.</motion.p>

                <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className='font-orbit ml-3 mt-20 md:text-sm text-xs'>CONTACT US AT <span className="text-heroblue">ALIENFLOKI@GMAIL.COM</span></motion.p>
            </div>

            <div className='select-none absolute z-10 right-10 bottom-9'>
                <div className='flex items-center gap-x-6 cursor-pointer' onClick={next}>
                    <motion.p initial={{ opacity: 0, x: -150 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.4, ease: [.21, 1.03, .27, 1] }} className='font-orbit md:text-md text-sm'>Tokenomics</motion.p>
                    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.4, ease: [.21, 1.03, .27, 1] }} className='flex h-auto w-fit md:p-5 p-3 rounded-full border-[1px] border-white'>
                        <SlArrowDown className='md:text-sm text-xs' />
                    </motion.div>
                </div>
            </div>

            <div className='select-none absolute right-11 my-auto md:top-[-4rem] top-0 bottom-0 z-10 h-fit items-center gap-x-2 sm:flex hidden'>
                <motion.h1 initial={{ opacity: 0, x: 150 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.4, ease: [.21, 1.03, .27, 1] }} className='font-gruppo text-lg'>02</motion.h1>
                <motion.div initial={{ opacity: 0, x: 150 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.5, ease: [.21, 1.03, .27, 1] }} className='w-14 h-[1px] bg-white'></motion.div>
            </div>

            <div className='select-none absolute z-10 right-10 top-9'>
                <div className='flex items-center gap-x-6 cursor-pointer'>
                    <motion.p initial={{ opacity: 0, x: -150 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.4, ease: [.21, 1.03, .27, 1] }} className='font-orbit md:text-md text-sm'>Home</motion.p>
                    <motion.div initial={{ opacity: 0, y: -150 }} animate={{ y: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.4, ease: [.21, 1.03, .27, 1] }} className='flex h-auto w-fit md:p-5 p-3 rounded-full border-[1px] border-white' onClick={prev}>
                        <SlArrowDown className='md:text-sm text-xs rotate-180' />
                    </motion.div>
                </div>
            </div>


        </motion.section>
    )
}

export default About