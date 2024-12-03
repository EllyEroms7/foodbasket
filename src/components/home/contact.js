'use client';
import React, { useRef } from 'react';
import './styles/contact.modules.scss';
import { Icon } from '@iconify/react';
import Form from './form';
import ContactHeader from './contactHeader';


export default function Contact() {

  const copyRef = useRef(null);

  const copying = async () => {
    const text = '+2349077630593';
    try {
      await navigator.clipboard.writeText(text);
      copyRef.current.classList.remove('opacity-0')
      setTimeout(() => { copyRef.current.classList.add('opacity-0') }, 3000)
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  return (
    <div id="contact">
      <div className="">
        <footer>

          <ContactHeader />

          <div className='grid foot'>
            {/* forms */}
            {/* address */}
            <div>
              <div>
                <address>Plot 4, Block IX, Mainland Park Estates, Lagos-Ibadan Expressway, Mowe, Ogun State, Nigeria.</address>
              </div>

              <div className='flex gap-[2rem]'>
                <a href='https://wa.link/xb7yqg' target='blank'>
                  <div className='whatsapp hover:scale-[1.2] transition-transform'>
                    <Icon icon="mdi:whatsapp" width="3rem" height="3rem" style={{ color: 'white' }} />
                  </div>
                </a>

                <a href="https://www.instagram.com/foodbasket_1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='blank'>
                  <div className='instagram hover:scale-[1.2] transition-transform'>
                    <Icon icon="hugeicons:instagram" width="3rem" height="3rem" style={{ color: 'white' }} />
                  </div>
                </a>
              </div>
              <div className=' text-white text-[1.3rem] gap-4'> <p>+2349027670186</p>
                <button className='bg-blue-800 p-2 rounded-xl hover:bg-orange-400 active:bg-red-600 transition-all' onClick={copying}>
                  <Icon icon="si:copy-line" width="1.4rem" height="1.4rem" style={{ color: 'white' }} />
                </button>
                <span ref={copyRef} className='opacity-0 transition-opacity ml-3'>copied!</span>
              </div>
            </div>
          </div>
        </footer>
        <hr />
        <div className='text-center italic text-[1rem] text-white'>
          <p>&copy; 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
