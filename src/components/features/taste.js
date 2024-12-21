'use client';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './styles/taste.module.scss'

const Taste = (props) => {
    const taste = useRef(null)
    const isInView = useInView(taste, {
        margin: '0% 0% 0% 10%', //top left bottom right
        amount: .3,
        once: true,
    })

    return (
        <div id='taste'>
            <div className={clsx(styles.card, 'flex', 'flex-wrap', 'gap-2', 'xl:w-full', 'xl:justify-between', 'xl:items-center')} ref={taste}>
                <div className={clsx(styles.text, 'flex', 'flex-col', 'w-full', 'xl:w-[40%]')}>

                    <motion.h1
                        variants={props.variantsT} initial='initial' animate={isInView ? 'animate' : ''} transition={{
                            duration: .5,
                            delay: .3,
                        }}
                        className={clsx(styles.head, 'text-[2.1rem]', 'mb-4', 'xl:text-[3vw]', 'md:text-[2.4rem]')}>Elevate Your Palate</motion.h1>

                    <motion.p variants={props.variantsBL} initial='initial' animate={isInView ? 'animate' : ''} transition={{
                        duration: .5,
                        delay: .5,
                    }} className={clsx(styles.body, 'w-[100%]', 'xl:text-[2vw]', 'text-[1.1rem]', 'md:text-[1.4rem]')}>
                        Experience a satisfying flavour that transforms every bite into a celebration of culinary excellence, enhancing your appreciation for food and your sense of taste.
                    </motion.p>
                </div>
                <motion.div
                    variants={props.variantsI} initial='initial' animate={isInView ? 'animate' : ''} transition={{
                        duration: .5,
                        delay: .7,
                    }}
                    className={clsx(styles.img)}>
                    <Image
                        alt='taste'
                        width={600}
                        height={400}
                        placeholder='blur'
                        blurDataURL='/images/taste.jpg'
                        src='/images/taste.jpg'
                        className='rounded-lg shadow-lg xl:rounded-[1vw] shadow-[#c2b280] xl:w-[44vw] xl:[66vh]'
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Taste;