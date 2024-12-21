'use client';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import clsx from 'clsx';
import styles from './styles/health.module.scss'

const Health = (props) => {
    const health = useRef(null)
    const isInView = useInView(health, {
        margin: '0% 0% 0% 10%', //top left bottom right
        amount: .3,
        once: true,
    })

    return (
        <div id='health'>
            <motion.div className={clsx(styles.card, 'flex', 'flex-wrap', 'flex-row-reverse', 'gap-2', 'bg-red-600')} ref={health}>

                <div className={clsx(styles.text, 'flex', 'flex-col', 'w-full', 'p-[10%]')}>

                    <motion.h1 variants={props.variantsBR} initial='initial' animate={isInView ? 'animate' : ''} transition={{
                        duration: .5,
                        delay: .3,
                        ease: 'easeOut'
                    }} className={clsx(styles.head, 'text-[1.5rem]', 'mb-4', 'md:text-[2.4rem]', 'sm:text-[3vw]', 'lg:text-[4vw]')}>Healthy Bakes, Sweet Health</motion.h1>

                    <motion.p variants={props.variantsBL} initial='initial' animate={isInView ? 'animate' : ''} transition={{
                        duration: .5,
                        delay: .3,
                        ease: 'easeOut'
                    }} className={clsx(styles.body, 'w-[100%]', 'text-[1rem]', 'md:text-[1.4rem]', 'sm:text-[1.6vw]', 'xl:text-[2vw]')}>
                        We are committed to our customers&lsquo; health and well-being. Our treats are made with wholesome ingredients, ensuring every bite is both delicious and nourishing. Enjoy our healthy bakes and embrace sweet health.
                    </motion.p>

                </div>
            </motion.div>
        </div>
    );
};

export default Health;