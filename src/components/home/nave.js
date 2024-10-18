import React from 'react';
import { useRef,useState,useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useRotate } from '../hooks/useGsap';


export default function Nave() {
    const [show, setShow] = useState(false);
    const navRef = useRef(null);
    const navButtonRef = useRef(null);
    

    useRotate(navButtonRef,show)

    const toggleNav = () => {
        if (navRef.current) {
          navRef.current.classList.toggle('active')
          navButtonRef.current.classList.toggle('active')
          setShow(!show)
        }
      };

      const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
          });
        }
      };

      useEffect(()=>{
        const id = document.querySelectorAll('a[href^="#"]')
        id.forEach((id)=>{
          id.addEventListener('click',(e)=>{
            e.preventDefault();
            smoothScroll(id.getAttribute('href'))
          })
      })
      return () =>{
        id.forEach(id => id.removeEventListener('click', smoothScroll));
    };
      },[])


  return (
    <>
          <div className=" overflow-hidden">
          {/* Nav Bar */}
          <div className="flex p-2 justify-between">
            {/*header*/}
            <div className="logo mt-2 ml-3 z-10">
                <p className="text-[2.3rem] font-serif text-center text-red-600">FOOD BASKET</p>
                <p className="text-[1.6rem] font-[Calibri] w-fit">Confectionery Ventures</p>
            </div>      

            {/* mobile nav button */}
              <div className="mobile-nav-button z-10 hid" onClick={toggleNav} ref={navButtonRef}>
                <button>
                  <Icon icon="gg:options" width="1.5rem" height="1.5rem"  style={{color: "black"}} />
                </button>
              </div>  

              {/* desktop and tablet navigation     */}
              <nav className="desktop z-10 fixed right-0">
                <div className="desktop-nav">
                  <div className="desktop-nav-links">
                    <div className="home desktop-nav-link">
                      <a href="/">
                        <div className="icon">
                      <Icon icon="iconamoon:home-bold" width="30" height="30"  style={{color: "black"}} />
                      </div>
                        <p className='text-center'>Home</p>
                      </a>
                    </div>

                    <div className="contact desktop-nav-link">
                      <a href="#contact">
                        <div className="icon">
                      <Icon icon="solar:phone-broken" width="30" height="30"  style={{color: "black"}} /> </div>
                      <p>Contact</p>
                      </a>
                    </div>

                    <div className="catalogue desktop-nav-link">
                      <a href="">
                        <div className="icon">
                        <Icon icon="ant-design:product-outlined" width="30" height="30"  style={{color: "black"}} />
                      </div>
                      <p>Products</p>
                      </a>
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
                  <a className="flex align-middle gap-[.7rem] bg-red-600" href="/">
                    <Icon icon="iconamoon:home-bold" width="70" height="70"  style={{color: "black"}} />
                    <p>Home</p>
                  </a>
                </div>

                <div className="nav-link contact">
                <a href="#contact" className="flex align-middle gap-[.7rem] bg-red-600">
                      <Icon icon="solar:phone-broken" width="70" height="70"  style={{color: "black"}} />
                      <p>Contact</p>
                  </a>
                </div>

                <div className="nav-link catalogue">
                <a href="" className="flex gap-[.7rem] align-middle bg-red-600">
                        <Icon icon="ant-design:product-outlined" width="70" height="70"  style={{color: "black"}} />
                      <p>Products</p>
                      </a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
