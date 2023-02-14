import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiClipboard } from 'react-icons/hi'
import Previous from '../utils/Previous'
import MiddleNum from '../utils/MiddleNum'
import Next from '../utils/Next'

const Tokenomics = ({ next, prev }) => {
    const [contactAddress, setContact] = useState('0x0000000000000000')
    const [clicked, setClicked] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(contactAddress)
        setClicked(true)

        setTimeout(() => {
            setClicked(false)

        }, 1000);

    }

    return (
        <motion.section initial={{ skew: "-15deg, -15deg" }} animate={{ skew: "0deg, 0deg" }} exit={{ opacity: 0, skew: "-15deg, -15deg" }} transition={{ duration: 0.5 }} className='w-full h-screen bg-token bg-cover flex items-center lg:px-10 px-7 text-white sm:bg-left bg-[center_left_27%]'>
            <nav className='w-full h-auto flex justify-between items-center z-10 absolute top-0 left-0 lg:p-10 p-7'>
                <motion.div initial={{ opacity: 0, x: -150 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 1.5, delay: 0.4, ease: [.21, 1.03, .27, 1] }} className='flex items-center gap-x-4'>
                    <img src="/logo.webp" alt="Logo" className='w-[3rem]'></img>
                    <h3 className='font-orbit lg:text-2xl'>AlienFloki</h3>
                </motion.div>
            </nav>


            <MiddleNum num="03" />
            <Previous text="About us" prev={prev} />
            <Next text="Roadmap" next={next} />


            <div className='relative h-auto w-fit px-0 z-10'>
                <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className='font-orbit md:text-5xl font-bold text text-3xl ml-[5px]' data-text="TOKENOMICS">TOKENOMICS</motion.h1>
                <div className='ml-3'>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className='font-orbit text-heroblue font-semibold'>TRANSACTION TAX</motion.h1>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} >
                        <h1 className='font-orbit md:text-2xl font-semibold sm:text-xl ml-[5px] mt-10'>FOR BUYING</h1>
                        <h1 className='font-orbit text-4xl font-bold ml-[5px] text-heroblue'>5%</h1>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className='mt-7'>
                        <h1 className='font-orbit md:text-2xl font-semibold sm:text-xl ml-[5px]'>FOR SELLING</h1>
                        <h1 className='font-orbit text-4xl font-bold ml-[5px] text-heroblue'>5%</h1>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className='mt-7'>
                        <div className='flex items-center gap-x-2'>
                            <HiClipboard className='sm:text-2xl cursor-pointer text-xl' onClick={handleCopy} />
                            <h1 className='font-orbit md:text-2xl font-semibold sm:text-xl ml-[5px]'>{clicked ? "Copied to clipboard!" : "Contact Address:"}</h1>

                        </div>
                        <h1 className='font-orbit sm:text-xl text-sm font-bold ml-[5px] text-heroblue'>{contactAddress}</h1>
                    </motion.div>

                </div>



            </div>


        </motion.section>
    )
}

export default Tokenomics