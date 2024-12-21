'use client';
import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import './styles/home.modules.scss';
import Nave from './nave';
import Block from './block';
import Title from './title';


export default function Home() {

  const video = useRef(null);
  const [controls, setControl] = useState("icon-park-solid:play");
  const [controlsColour, setControlColour] = useState("snow");

  const pause = () => {
    if (!video.current.paused) {
      video.current.pause()
      setControl("gridicons:pause")
    } else {
      video.current.play()
      setControl("icon-park-solid:play")
    }
  }

  const controlOver = () => { setControlColour('rgb(255, 4, 3)') }
  const controlOut = () => { setControlColour('snow') }


  return (
    <>
      <div id="home">
        <div className="overflow-x-hidden">

          {/*Video background */}
          <video autoPlay playsInline loop muted ref={video}>
            <source src="/video/intro.webm" type="video/webm" />
            <source src="/video/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Navigation */}
          <nav className='fixed top-0 left-0 right-0 py-3 mt-3 sm:py-4 px-0 justify-between z-10 flex items-center'>
            <div className='logo w-[55vw] sm:w-[23vh] xl:w-[19vw] sm:ml-5 ml-3 mt-0'>
              <Block />
            </div>
            <div className='mr-5 h-fit'>
              <Nave />
            </div>
          </nav>


          {/* Controls  */}
          <div className="heading opacity-95 absolute bottom-12 right-12">
            <button
              className="cursor-pointer transition duration-200 ease-in-out hover:scale-110"
              onClick={pause}
              onMouseOver={controlOver}
              onMouseOut={controlOut}
            >
              <Icon
                icon={controls}
                width="2.5vw"
                height="2.5vw"
                style={{ color: controlsColour }}
              />
            </button>
          </div>

          {/* Title */}
          <div className='sm:w-[70%] lg:w-[80%] w-[90%] 2xl:w-[70%] mx-auto h-[80vh] sm:h-[95vh] flex justify-center items-center relative'>
            <Title />
          </div>
        </div> {/*container ending div*/}
      </div>
    </>
  )
}