'use client';
import { useRef } from 'react';
import styles from './styles/design.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';


const Design = (props) => {

    const design = useRef(null)
    const isInView = useInView(design, {
        margin: '0% 0% 0% 10%', //top left bottom right
        amount: .3,
        once: true,
    })

    return (
        <div id='design' className=''>
            <div className={clsx(styles.card, 'flex', 'flex-wrap', 'gap-2', 'xl:w-full', 'xl:justify-between', 'xl:items-center')} ref={design}>

                <div className={clsx(styles.text, 'flex', 'flex-col', 'w-full', 'xl:w-[40%]')}>

                    <motion.h1 variants={props.variantsT} initial='initial' animate={isInView ? 'animate' : ''} transition={{
                        duration: .5,
                        delay: .3,
                    }} className={clsx(styles.head, 'text-[2.1rem]', 'xl:text-[3vw]', 'mb-4', 'md:text-[2.4rem]')}>
                        Crafting the Perfect Design
                    </motion.h1>

                    <motion.p variants={props.variantsBL} initial='initial' animate={isInView ? 'animate' : ''} transition={{
                        duration: .5,
                        delay: .5,
                        ease: 'backOut'
                    }} className={clsx(styles.body, 'w-[100%]', 'xl:text-[2vw]', 'text-[1.1rem]', 'md:text-[1.4rem]')}> Our <em>designs</em> capture the essence of celebration, showcasing uniqueness and elegance. Each piece of art is crafted to reflect individuality, ensuring that every occasion is truly special.</motion.p>
                </div>

                <motion.div className={clsx(styles.img)} variants={props.variantsI} initial='initial' animate={isInView ? 'animate' : ''} transition={{
                    duration: .5,
                    delay: .7,
                }}>
                    <Image
                        alt='design'
                        width={600}
                        height={400}
                        placeholder='blur'
                        blurDataURL='/images/design.jpg'
                        src='/images/design.jpg'
                        className='rounded-lg xl:rounded-[1vw] shadow-lg shadow-[#ff03035c] xl:w-[44vw] xl:[66vh]'
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Design;