'use client';
import React, {useRef,useEffect} from 'react';
import VanillaTilt from 'vanilla-tilt';
import { Icon } from '@iconify/react';
import './home.modules.scss';

export default function HomeVideo() {

  const logo = useRef(null);
  const video = useRef(null);
  const cata = useRef(null);

  useEffect(()=>{
    VanillaTilt.init(logo.current, {
      max: 4,
      speed: 30,
      glare:true,
      "max-glare": 0.3,
    });
    return () =>{
     VanillaTilt.init(logo.current,null)
    }
  },[])

 const pause = () =>{
   if (!video.current.paused){
    video.current.pause()   
   }else{
    video.current.play()
   }
  }

  return (
    <div>
      {/*Video background */}
        <div className="video-bg">
          <video  autoPlay playsInline loop muted poster="/images/poster.png" ref={video} onClick={pause} >
            <source src="/video/intro.mp4" type="video/mp4"/>
            <source src="/video/intro.webm" type="video/webm"/>
            Your browser is very old
          </video>
        </div>

        {/*Bar */}
        <div className="flex gap-[2rem] shrink grow justify-between bar">
          {/*header*/}
          <div className="logo rounded-md" ref={logo}>
              <p className="text-[2.2rem] font-serif text-center mr-20">FOOD BASKET</p>
              <p className="text-[1.5rem] font-[calibri] text-right mr-11">Confectionary Ventures</p>
            </div>

            {/*Nav Bar*/}
            <nav>
              <div className="bg-white w-[25rem] h-[5rem] rounded-full opacity-95 inline-block flex-1 nave p-3">
                <div className="flex shrink grow place-content-center naves gap-[4rem]">

                  <div className="explore">
                    <div className="mx-2">
                      <Icon icon="material-symbols-light:explore-outline" width="35" height="35" style={{color: "black"}} />
                    </div>  
                    <p>Explore</p>
                  </div>

                  <div className="contact text-center">
                    <div className="mx-2">
                      <Icon icon="solar:phone-broken" width="35" height="35"  style={{color: "black"}} />
                    </div>
                    <p>Contact</p>
                  </div>

                  <div className="catalogue text-center">
                    <div className="mx-2">
                      <Icon icon="bytesize:cart" width="35" height="35"  style={{color: "black"}} />
                    </div>
                    <p>Catalogue</p>
                  </div>
                </div>
              </div>
            </nav>
        </div>

        {/*heading*/}
        <header className="opacity-95" onClick={pause}>
          <h1 className="text-center mt-10 text-[6rem] heading">Every Flavour Has Quality</h1>
          <p className="text-center mt-4 text-[2rem] heading italic">Baked with passion</p>
          <p className="text-right mt-20 text-[1rem] heading mr-6">click to pause</p>
        </header>

        {/*Catalogue Button */}

        <div className="opacity-95 text-center">
          <button className="catalogue">
            <p>View Catalogue</p>
          </button>
        </div>
    </div>
  )
}