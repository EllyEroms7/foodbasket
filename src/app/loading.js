'use client';
import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'motion/react';


const Loading = () => {
    const [loading, setLoading] = useState(true)
    const controls = useAnimationControls()
    useEffect(() => {
        window.addEventListener('load', () => {
            setTimeout(() => {
                controls.start({
                    y: -1300,
                    opacity: 0
                })
                setTimeout(() => {
                    setLoading(false)
                }, 600)
            }, 1000)
        })
    })
    return (
        <>
            {loading && (
                <motion.div
                    initial={{
                        y: 0,
                        opacity: 1

                    }}
                    animate={controls}
                    transition={{
                        duration: 0.5,
                        ease: 'easeOut'
                    }}
                    className="flex justify-center fixed bg-[#fffafa] z-50 items-center w-screen h-screen"
                >
                    <div className="flex flex-col justify-center items-center w-[60vw] h-[60vh]">
                        {/* <iframe src="https://lottie.host/embed/46181c0e-fc1a-4f2e-ad43-94ba7e4dd372/bqAGUdWB1b.lottie" className=" w-full h-full"></iframe> */}
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Loading;