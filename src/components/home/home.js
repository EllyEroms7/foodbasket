'use client';
import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import './styles/home.modules.scss';
import Nave from './nave';


export default function Home() {

  const video = useRef(null);
  const [controls, setControl] = useState("icon-park-solid:play");
  const [contolsColour, setControlColour] = useState("snow");

  const pause = () => {
    if (!video.current.paused) {
      video.current.pause()
      setControl("gridicons:pause")
    } else {
      video.current.play()
      setControl("icon-park-solid:play")
    }
  }

  const controlOver = () => { setControlColour('orange') }
  const controlOut = () => { setControlColour('snow') }



  return (
    <>
      <div id="home">
        <Nave />
        <div className="overflow-hidden">
          {/*Video background */}
          <video autoPlay playsInline loop muted ref={video}>
            <source src="/video/intro.mp4" type="video/mp4" />
            Your browser is very old
          </video>

          {/*heading*/}
          <div className='text-white text-center title z-10'>
            <h1>TASTE</h1>
            <h2>GREAT QUALITY</h2>
            <p>Why settle for less?</p>

            {/* <a href='https://wa.me/c/2349077630593' target='blank'>
              <div className='catalogue-button'>
                <button>View Catalogue</button>
              </div>
            </a> */}
          </div>

          {/* controls  */}
          <div className="heading relative opacity-95 right-[-10px] bottom-[160px]">

            <button className="" onClick={pause} onMouseOver={controlOver} onMouseOut={controlOut}><Icon icon={controls} width="2.3rem" height="2.3rem" style={{ color: contolsColour }} /></button>

          </div>
        </div> {/*container ending div*/}
      </div>
    </>
  )
}