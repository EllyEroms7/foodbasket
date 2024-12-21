'use client';
import styles from './contact.module.scss';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import PhoneSvg from './phone';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';


export default function Contact(props) {
  const contact = useRef(null)
  const isInView = useInView(contact, {
    margin: '0% 0% 0% 10%', //top left bottom right
    amount: .3,
    once: true,
  })

  return (
    <div id="contact" ref={contact}>
      <div>
        <div className='p-[10%] flex justify-between items-center'>
          <div className='flex flex-col gap-7 lg:gap-9 xl:gap-[3vw]'>
            <div className={clsx(styles.extra)}>

              <motion.h1
                variants={props.variantsT} initial='initial' animate={isInView ? 'animate' : ''} transition={{
                  duration: .5,
                  delay: .3,
                }}
                className={clsx(styles.h13, 'text-[2.5rem]', 'md:text-[3.1rem]', 'lg:text-[7vw]', 'xl:text-[5vw]')}>Get in touch now...</motion.h1>

              <motion.h3 variants={props.variantsT} initial='initial' animate={isInView ? 'animate' : ''} transition={{
                duration: .5,
                delay: .5,
              }} className={clsx(styles.h3, 'text-[1rem]', 'md:text-[1.4rem]', 'lg:text-[2.5vw]', 'xl:text-[1.6vw]')}>...and experience the best with us!</motion.h3>
            </div>

            {/* address */}
            <motion.div
              variants={props.variantsBL} initial='initial' animate={isInView ? 'animate' : ''} transition={{
                duration: .5,
                delay: .7,
                ease: 'backOut'
              }}
              className='w-[65%] md:text-[1.5rem] lg:text-[2.6vw] xl:text-[1.7vw] xl:w-[40%]'>
              <address>Plot 4, Block IX, Mainland Park Estates, Lagos-Ibadan Expressway, Mowe, Ogun State, Nigeria.</address>
            </motion.div>

            <div className='flex gap-[2rem] flex-wrap w-[100%]'>
              <motion.a initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
                transition={{
                  duration: .5,
                  delay: 1,
                }} href='https://wa.link/xb7yqg' target='blank'>
                <div className='whatsapp transition-transform border-solid border-[#ff0403] rounded-full border-[2px] flex justify-center items-center gap-4 px-6 py-1 xl:py-4 xl:px-[1vw] overflow-hidden'>
                  <div className='w-[3rem] h-[3rem] xl:w-[2vw] xl:h-[2vw]'>
                    <Icon icon="mdi:whatsapp" width="100%" height="100%" style={{ color: '#ff0403' }} />
                  </div>
                  <p className='text-[1.4rem] xl:text-[1.7vw] lg:text-[2.5vw] text-[#ff0403]'>Whatsapp</p>
                </div>
              </motion.a>

              <motion.a initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
                transition={{
                  duration: .5,
                  delay: 1,
                }} href="http://bit.ly/4gr0f25" target='blank'>
                <div className='instagram transition-transform border-solid border-[#ff0403] rounded-full border-[2px] flex justify-center items-center gap-4 px-6 py-1 xl:py-4 xl:px-[1vw] overflow-hidden'>
                  <div className='w-[3rem] h-[3rem] xl:w-[2vw] xl:h-[2vw]'>
                    <Icon icon="hugeicons:instagram" width="100%" height="100%" style={{ color: '#ff0403' }} />
                  </div>
                  <p className='text-[1.4rem] xl:text-[1.7vw] text-[#ff0403] lg:text-[2.5vw]'>Instagram</p>
                </div>
              </motion.a>
            </div>
          </div>

          {/* phone icon available only on desktops */}
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
            transition={{
              duration: .5,
              delay: 1.3,
            }} className='w-[55%] h-[55%]'>
            <PhoneSvg />
          </motion.div>
        </div>
      </div>
      <hr />
      <footer className='text-center italic text-[1rem] text-black p-5 xl:text-[1.2vw]'>
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </footer>
    </div>
  )
}
