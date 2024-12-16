'use client';
import Link from 'next/link';
import NavButton from '../rive/navButton';
import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import Lenis from 'lenis';
import { motion, useAnimationControls } from 'motion/react'


export default function Nave() {
  const lenis = useRef(null);
  const [status, setStatus] = useState(false)
  const control = useAnimationControls()
  const handleClick = () => {
    if (!status) {
      control.start({
        x: 0
      })
      setStatus(true)
    } else if (status) {
      control.start({
        x: 100
      })
      setStatus(false)
    }
  }

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 0.6, // Duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Easing function
      smooth: true,
      smoothTouch: true,
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.current.destroy();
    };
  }, []);
  //works perfect for desktop and tablet
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      lenis.current.scrollTo(element);
    }
  };


  return (
    <>
      {/* Nav Bar */}
      <div className=" overflow-hidden">

        {/* desktop navigation*/}
        <div className="sm:flex p-2 sm:justify-between hidden">
          <div className="desktop">
            <div className="desktop-nav">
              <div className="desktop-nav-links">
                <div className="home desktop-nav-link text-[1.3rem] xl:text-[1.3vw]">
                  <Link href="/">
                    <p className='text-center'>HOME</p>
                  </Link>
                </div>

                <div className="products desktop-nav-link text-[1.3rem] xl:text-[1.3vw]">
                  <Link href="#contact" onClick={() => scrollTo('contact')}>
                    <p className='text-center'>CONTACT</p>
                  </Link>
                </div>

                <div className="product desktop-nav-link text-[1rem] xl:text-[1vw] p-3 px-4 rounded-full 2xl:p-5 2xl:px-6">
                  <a href="">
                    <p className='text-center'>PRODUCTS</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile navigation */}
        <div className='flex flex-col items-center'>
          <div className='h-[15vw] w-[15vw] sm:hidden sm:w-0 sm:h-0 rounded-full' onTouchStart={handleClick}>
            <NavButton />
          </div>

          <div className='sm:hidden sm:w-0 sm:h-0 block options fixed top-24'>
            <motion.div
              variants={{
                initial: {
                  x: 100,
                },
                slide: {
                  x: 0,
                }
              }}
              initial='initial'
              animate={control}
              transition={{
                duration: 0.5,
                delay: .8,
                ease: 'backOut'
              }}
            >
              <Link href="/">
                <Icon icon="lsicon:home-filled" width="26" height="26" style={{ color: '#ffffff' }} />
              </Link>
            </motion.div>

            <motion.div variants={{
              initial: {
                x: 100,
              },
              slide: {
                x: 0,
              }
            }}
              initial='initial'
              animate={control}
              transition={{
                duration: 0.5,
                delay: .9,
                ease: 'backOut'
              }}>
              <Link href=''>
                <Icon icon="teenyicons:cart-solid" width="26" height="26" style={{ color: '#ffffff' }} />
              </Link>
            </motion.div>

            <motion.div variants={{
              initial: {
                x: 100,
              },
              slide: {
                x: 0,
              }
            }}
              initial='initial'
              animate={control}
              transition={{
                duration: 0.5,
                delay: 1,
                ease: 'backOut'
              }}>
              <Link href="#contact" onClick={() => scrollTo('contact')}>
                <Icon icon="mingcute:phone-fill" width="26" height="26" style={{ color: '#ffffff' }} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
