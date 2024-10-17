'use client';
import React from 'react';
import './contact.modules.scss';
import { Icon } from '@iconify/react';

export default function Contact() {

  const resizeArea = (event) => {
    event.target.style.height = `${event.target.scrollHeight}px`;
  }

  return (
    <div id="contact">
        <div className="">
          <footer>
            <div className='connect'>
              <h1>Connect with us </h1>
            </div> 

            <div className='grid foot'>
            {/* forms */}
              <div>
                <form>
                  <div>
                    <label for="Name">Your Name:</label>
                    <input type='text' id="Name" placeholder='John Doe'
                    required/>
                  </div>
                  <div>
                    <label for="Email">Your Email:</label>
                    <input type="email" required id="Email" placeholder='Johndoe@email.com'/>
                  </div>

                  <div>
                    <label for="Question">Share Your Thoughts:</label>
                    <textarea onInput={resizeArea} placeholder='... We are the best' required></textarea>
                  </div>

                  <input type="submit" value="Send" />
                </form>
              </div>

              <div>
                <div>
                  <address>Mainland Park Estates, Lagos-Ibadan Expressway, Mowe, Plot 4, Block IX, Ogun State</address>
                </div>

                <div className='flex gap-[2rem]'>
                  <div className='whatsapp hover:scale-[1.2] transition-transform'>
                  <Icon icon="mdi:whatsapp" width="3rem" height="3rem"  style={{color: 'white'}} />
                  </div>

                  <div className='instagram hover:scale-[1.2] transition-transform'>
                  <Icon icon="hugeicons:instagram" width="3rem" height="3rem"  style={{color: 'white'}} />
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <hr/>
          <div className='text-center italic text-[1rem] text-white'>
            <p>&copy; 2024. All rights reserved.</p>
          </div>  
        </div>
    </div>
  )
}
