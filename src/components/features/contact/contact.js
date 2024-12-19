import styles from './contact.module.scss';
import { Icon } from '@iconify/react';
import clsx from 'clsx';



export default function Contact() {

  return (
    <div id="contact">
      <div>
        <div className='p-[10%]'>
          <div className='flex flex-col gap-7'>
            <div className={clsx(styles.extra)}>
              <h1 className={clsx(styles.h13, 'text-[2.5rem]')}>Get in touch now...</h1>
              <h3 className={clsx(styles.h3, 'text-[1rem]')}>...and experience the best with us!</h3>
            </div>

            {/* address */}
            <div className='w-[65%]'>
              <address>Plot 4, Block IX, Mainland Park Estates, Lagos-Ibadan Expressway, Mowe, Ogun State, Nigeria.</address>
            </div>

            <div className='flex gap-[2rem] flex-wrap w-[100%]'>
              <a href='https://wa.link/xb7yqg' target='blank'>
                <div className='whatsapp hover:scale-[1.05] transition-transform border-solid border-[#ff0043] rounded-full border-[2px] flex justify-center items-center gap-4 px-6 py-1'>
                  <Icon icon="mdi:whatsapp" width="3rem" height="3rem" style={{ color: '#ff0043' }} /><p className='text-[1.4rem] text-[#ff0043]'>Whatsapp</p>
                </div>
              </a>

              <a href="https://www.instagram.com/foodbasket_1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='blank'>
                <div className='instagram hover:scale-[1.05] transition-transform border-solid border-[#ff0043] rounded-full border-[2px] flex justify-center items-center gap-4 px-6 py-1'>
                  <Icon icon="hugeicons:instagram" width="3rem" height="3rem" style={{ color: '#ff0043' }} /><p className='text-[1.4rem] text-[#ff0043]'>Instagram</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <footer className='text-center italic text-[1rem] text-white'>
        <p>&copy; 2024. All rights reserved.</p>
      </footer>
    </div>
  )
}
