'use client';
import { useRive } from '@rive-app/react-canvas';
import React from 'react';
import { motion } from "motion/react";
import Scroll from '../rive/scroll';

const Title = () => {
    const sentence = 'Taste The Art Of Quality Baking'
    return (
        <div className=''>
            <div className='flex flex-wrap gap-[0.6rem] sm:gap-[1rem] 2xl:gap-[1.2vw] w-full mx-auto sm:text-[5rem] 2xl:text-[5vw] lg:text-[6rem] xl:text-[6rem] text-[3rem] justify-center items-center title'>
                {sentence.split(' ').map((word, index) => (
                    <motion.div className={`word ${word}`} key={index}
                        initial={{
                            opacity: 0,
                            y: 35,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: index * 0.08 + 3,
                            duration: 0.3,
                            ease: 'easeOut',
                        }}
                    >{word}</motion.div>
                ))}

                <motion.div className=' w-[40vw] absolute bottom-[10%] lg:w-[30%] cta'
                    initial={{
                        opacity: 0,
                        y: -30,
                        x: 0,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        x: 0,
                    }}
                    transition={{
                        delay: 7 * 0.08 + 3,
                        duration: 0.4,
                        ease: 'easeOut'
                    }}
                >
                    <div className="product desktop-nav-link text-[2.1vh] lg:text-[2vw] p-3 px-4 rounded-full 2xl:p-5 2xl:px-6">
                        <a href="">
                            <p className='text-center'>PRODUCTS</p>
                        </a>
                    </div>
                </motion.div>

            </div>
        </div>
    )
};

export default Title;