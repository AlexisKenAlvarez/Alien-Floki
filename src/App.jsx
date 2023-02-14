import React, { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import { AnimatePresence } from 'framer-motion'

const App = () => {

    const [page, setPage] = useState(1)

    const handleNext = () => {
        setPage(curr => curr + 1)
    }

    const pageList = [
        {
            num: 1,
            comp: <Hero next={handleNext} key="HERO" />
        },
        {
            num: 2,
            comp: <About key="ABOUT" />
        }
    ]

    return (
        <section className='w-full h-screen overflow-hidden'>
            <div className='w-full h-full'>

                <AnimatePresence>
                    {pageList.map((items, i) => {
                        return (
                            items.num === page ? items.comp : null
                        )
                    })}
                </AnimatePresence>


            </div>
        </section>
    )
}

export default App