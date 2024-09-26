'use client';
import React, {useRef,useEffect,useState} from 'react';
import Feature from './feature';
import { Icon } from '@iconify/react';
import './home.modules.scss';
import { useSlide,useRotate } from '../hooks/useGsap';

export default function HomeVideo() {

  const video = useRef(null);
  const [controls, setControl] = useState("icon-park-solid:play");
  const [show, setShow] = useState(false);
  // const ref = useRef(null);
 const navRef = useRef(null);
 const navButtonRef = useRef(null);
 const pause = () =>{
   if (!video.current.paused){
    video.current.pause()
    setControl("gridicons:pause")   
   }else{
    video.current.play()
    setControl("icon-park-solid:play")   
   }
  }

  useSlide(navRef, show);
  useRotate(navButtonRef,show)

  
  const toggleNav = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('active')
      navButtonRef.current.classList.toggle('active')
      setShow(!show)
    }
  };

 return (
  <>
    <div id="home">
      <div className="container">
        {/*Video background */}
            <video  autoPlay playsInline loop muted ref={video}>
              <source src="/video/intro.mp4" type="video/mp4"/>
              Your browser is very old
            </video>

          {/*Bar */}
          <div className="flex p-2 justify-between">
            {/*header*/}
            <div className="logo mt-2 ml-3">
                <p className="text-[1.9rem] font-serif text-center text-red-600">FOOD BASKET</p>
                <p className="text-[1rem] font-[Calibri] w-fit">Confectionary Ventures</p>
              </div>      

              <div className="mobile-nav-button hid" onClick={toggleNav} ref={navButtonRef}>
                <button>
                  <Icon icon="gg:options" width="1.5rem" height="1.5rem"  style={{color: "black"}} />
                </button>
              </div>  

              {/* desktop navigation     */}
              <nav className="desktop">
                <div className="desktop-nav">
                  <div className="desktop-nav-links">
                    <div className="explore desktop-nav-link">
                      <a href="">
                        <div className="icon">
                      <Icon icon="material-symbols-light:explore-outline" width="30" height="30"  style={{color: "black"}} />
                      </div>
                        <p>Explore</p>
                      </a>
                    </div>

                    <div className="contact desktop-nav-link">
                      <a href="">
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

          {/* mobile and tablet navigation */}
          <div className="mobile hid" ref={navRef}>
            <div className="mobile-nav shadow-2xl">
              <div className="nav-links">
                {/* an a tag will be here */}

                <div className="nav-link explore">
                  <a className="flex align-middle gap-[.7rem]" href="">
                    <Icon icon="material-symbols-light:explore-outline" width="30" height="30"  style={{color: "black"}} />
                    <p>Explore</p>
                  </a>
                </div>

                <div className="nav-link contact">
                <a href="" className="flex align-middle gap-[.7rem]">
                      <Icon icon="solar:phone-broken" width="30" height="30"  style={{color: "black"}} />
                      <p>Contact</p>
                  </a>
                </div>

                <div className="nav-link catalogue">
                <a href="" className="flex gap-[.7rem] align-middle">
                        <Icon icon="ant-design:product-outlined" width="30" height="30"  style={{color: "black"}} />
                      <p>Products</p>
                      </a>
                </div>
              </div>
            </div>
          </div>

          {/*heading*/}
          <header className="opacity-95" >
            <h1 className="text-left mt-3 text-[3rem] heading px-3 ml-2">Every <br/>Great <br/> Taste Has <br/>Great <br/> Quality</h1>
            <p className="text-left mt-2 text-[1.5rem] heading italic ml-6">Why Settle For Less?</p>
            
            <div className="heading controls rounded-full hover:bg-orange-500 transition-all active:bg-blue-700 text-center absolute opacity-95 right-[5%] bottom-[6%]" onClick={pause}>

              <button className=""><Icon icon={controls} width="1.9rem" height="1.9rem"  style={{color: "black"}} /></button>

            </div>

          </header>

          {/*Catalogue Button */}

          <div className="opacity-95 text-center catalogue-button relative">
            <button className="">
              <p>View Catalogue</p>
            </button>
          </div>
          {/* wave svg */}
        </div>
    </div>
    <Feature/>
    </>
  )
}