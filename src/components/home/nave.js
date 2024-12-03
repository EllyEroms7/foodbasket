import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';


export default function Nave() {
  const [show, setShow] = useState(false);
  const navRef = useRef(null);
  const navButtonRef = useRef(null);
  const toggleNav = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('active')
      navButtonRef.current.classList.toggle('active')
      setShow(!show)
    }
  };


  // const smoothScroll = (target) => {
  //   const element = document.querySelector(target);
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // useEffect(() => {
  //   const id = document.querySelectorAll('a[href^="#"]')
  //   id.forEach((id) => {
  //     id.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       smoothScroll(id.getAttribute('href'))
  //     })
  //   })
  //   return () => {
  //     id.forEach(id => id.removeEventListener('click', smoothScroll));
  //   };
  // }, [])


  return (
    <>
      <div className=" overflow-hidden">
        {/* Nav Bar */}
        <div className="flex p-2 justify-between">

          {/* mobile nav button */}
          <div className="mobile-nav-button z-10 hid fixed right-0" onClick={toggleNav} ref={navButtonRef}>
            <button>
              <Icon icon="gg:options" width="1.5rem" height="1.5rem" style={{ color: "black" }} />
            </button>
          </div>

          {/* desktop navigation     */}
          <nav className="desktop z-10 fixed right-20 top-5">
            <div className="desktop-nav">
              <div className="desktop-nav-links">
                <div className="home desktop-nav-link">
                  <Link href="/">
                    <p className='text-center'>Home</p>
                  </Link>
                </div>

                <div className="contact desktop-nav-link">
                  <a href="#contact">
                    <p className='text-center'>Contact</p>
                  </a>
                </div>

                <div className="catalogue desktop-nav-link">
                  <Link href="">
                    <p className='text-center'>Products</p>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* mobile navigation */}
        <div className="mobile hid" ref={navRef}>
          <div className="mobile-nav shadow-2xl">
            <div className="nav-links">

              <div className="nav-link explore">
                <Link className="flex align-middle gap-[.7rem] bg-red-600" href="/" onClick={toggleNav}>
                  <Icon icon="iconamoon:home-bold" width="70" height="70" style={{ color: "black" }} />
                  <p>Home</p>
                </Link>
              </div>

              <div className="nav-link contact">
                <a href="#contact" className="flex align-middle gap-[.7rem] bg-red-600" onClick={toggleNav}>
                  <Icon icon="solar:phone-broken" width="70" height="70" style={{ color: "black" }} />
                  <p>Contact</p>
                </a>
              </div>

              <div className="nav-link catalogue">
                <Link href="" className="flex gap-[.7rem] align-middle bg-red-600" onClick={toggleNav}>
                  <Icon icon="ant-design:product-outlined" width="70" height="70" style={{ color: "black" }} />
                  <p>Products</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
