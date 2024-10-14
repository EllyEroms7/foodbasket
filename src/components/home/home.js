'use client';
import React, {useRef,useState} from 'react';
import { Icon } from '@iconify/react';
import './home.modules.scss';
import { useRotate } from '../hooks/useGsap';

export default function Home() {

  const video = useRef(null);
  const [controls, setControl] = useState("icon-park-solid:play");
  const [contolsColour,setControlColour] = useState("snow"); 
  const [show, setShow] = useState(false);

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

  const controlOver = () =>{ setControlColour('orange') }
  const controlOut = () =>{ setControlColour('snow')}


  //Animations

  // useSlide(navRef, show);
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
      <div className="overflow-hidden">
        {/*Video background */}
            <video  autoPlay playsInline loop muted ref={video}>
              <source src="/video/intro.mp4" type="video/mp4"/>
              Your browser is very old
            </video>

          {/* Nav Bar */}
          <div className="flex p-2 justify-between">
            {/*header*/}
            <div className="logo mt-2 ml-3 z-10">
                <p className="text-[1.9rem] font-serif text-center text-red-600">FOOD BASKET</p>
                <p className="text-[1rem] font-[Calibri] w-fit">Confectionary Ventures</p>
            </div>      

              <div className="mobile-nav-button z-10 hid" onClick={toggleNav} ref={navButtonRef}>
                <button>
                  <Icon icon="gg:options" width="1.5rem" height="1.5rem"  style={{color: "black"}} />
                </button>
              </div>  

              {/* desktop navigation     */}
              <nav className="desktop z-10">
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
        
                <div className="nav-link explore">
                  <a className="flex align-middle gap-[.7rem]" href="">
                    <Icon icon="material-symbols-light:explore-outline" width="70" height="70"  style={{color: "black"}} />
                    <p>Explore</p>
                  </a>
                </div>

                <div className="nav-link contact">
                <a href="" className="flex align-middle gap-[.7rem]">
                      <Icon icon="solar:phone-broken" width="70" height="70"  style={{color: "black"}} />
                      <p>Contact</p>
                  </a>
                </div>

                <div className="nav-link catalogue">
                <a href="" className="flex gap-[.7rem] align-middle">
                        <Icon icon="ant-design:product-outlined" width="70" height="70"  style={{color: "black"}} />
                      <p>Products</p>
                      </a>
                </div>
              </div>
            </div>
          </div>

          {/*heading*/}
          <div className='text-white text-center title z-10'>
            <h1>TASTE</h1>
            <h2>GREAT QUALITY</h2>
            <p>Why settle for less?</p>

            <div className='catalogue-button'>
              <button>View Catalogue</button>
            </div>
          </div>

         {/* controls  */}
          <div className="heading relative opacity-95 right-[-10px] bottom-[160px]">

              <button className="" onClick={pause} onMouseOver={controlOver} onMouseOut={controlOut}><Icon icon={controls} width="2.3rem" height="2.3rem"  style={{color: contolsColour}} /></button>

          </div>
      </div> {/*container ending div*/}
    </div>
    </>
  )
}