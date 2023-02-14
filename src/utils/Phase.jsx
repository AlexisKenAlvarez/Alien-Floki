import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Phase = ({ phase }) => {

    const [ref, inView] = useInView()

    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.3, delay: 0.1 }} ref={ref} className="m-3">
            <h2 className='text-heroblue font-orbit md:text-3xl font-bold'>{phase}</h2>
            <p className='font-gruppo md:text-xl text-md leading-6 mt-2 text-mygrey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.</p>
        </motion.div>
    )
}

export default Phase