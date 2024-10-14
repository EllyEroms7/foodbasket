'use client';

import './feature.modules.scss';
import { Typewriter } from 'react-simple-typewriter';


export default function Feature() {

  return (
    <div id="feature">
        <div className="">
            {/* heading */}
                  <div className="text-center pt-14">
                    <h1><span className='font-[500]'> <Typewriter  words={['CARING', 'QUALITY', 'PERFECTION']}
            loop={0}
            cursor
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
            /></span><br/> FOR EVERY DETAIL</h1>
                  </div>

            {/* main sections */}
            <section className="mobile-bento flex flex-col flex-1 shrink">
            <div className='cake rounded-[20px] text-white'>
                <div className='cakeText p-[3rem]'>
                  <h1>Unique Taste</h1>
                  <p>We are passionate about crafting unique tastes that will leave you wanting more.</p>
                  <p>From rich flavors to perfect pairings, we have the perfect treat for every occasion.</p>
                </div>
              </div>

              <div className='design rounded-[20px] text-white m-[24px]'>
                <div className='designText p-[3rem]'>
                  <h1>Decent Design</h1>
                  <p>Our cake designs are masterpieces of culinary art, made with care and with the finest ingredients.</p>
                  <p>Suitable for any occasion, our cakes are the perfect centrepiece for life&apos;s most cherished moments.</p>
                </div>
              </div>

              <div className='quality rounded-[20px] text-white'>
                <div className='qualityText p-[3rem]'>
                    <h1>High Quality</h1>
                    <p>Our bread is a masterpiece of exceptional quality, crafted with precision and perfection.</p>
                    <p>Suitable for any discerning palate, our bread is the perfect indulgence for those who demand the very best.</p>
                  </div>
              </div>

              <div className='pastry rounded-[20px] text-white m-[24px]'>
                <div className='pastryText p-[3rem]'>
                      <h1>Pastry Bliss</h1>
                      <p>Indulge in our exquisite pastries, crafted to brighten up your day and mood.</p>
                      <p>Perfect for any occasion, our heavenly treats, a centrepiece for the best moments, will transport you to a state of pure bliss.</p>
                </div>
              </div>

              <div className='ingredient rounded-[20px] text-white m-[24px]'>
                <div className='ingredientText p-[3rem]'>
                        <h1>Perfect Element</h1>
                        <p>The secret to our baked delights lies in the quality of our ingredients.</p>
                        <p>We are dedicated to sourcing only the finest ingredients, from the softest doughs to create truly exceptional baked goods that surpass your expectations.</p>
                  </div>
              </div>

              <div className='help rounded-[20px] text-white'>
                <div className='helpText p-[3rem]'>
                    <h1>Help</h1>
                    <p>We are dedicated to providing expert guidance, so you can make more informed choices that cater to your unique preferences and dietary needs.</p>
                      <p>Whether you are looking for a classic favourite or something new to try, we are here to offer personalised recommendations and ensure you leave with a smile.</p>
                  </div>
              </div>

              <div className='health rounded-[20px] text-white m-[24px]'>
                <div className='healthText p-[3rem] '>
                    <h1>Health is Wealth</h1>
                    <p>We are committed to crafting baked goods that not only impress your taste buds but also nourish your body.</p>
                      <p>From wholesome ingrediens to carefully balanced recipes, we are dedicated to helping you make healthy choices that benefit your wellbeing, so you can savour every moment with confidence.</p>
                  </div>
              </div>


            </section>
        </div>
    </div>
  )
}
