import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './styles/taste.module.scss'
const Taste = () => {
    return (
        <div id='taste'>
            <div className={clsx(styles.card, 'flex', 'flex-wrap', 'gap-2', 'xl:w-full', 'xl:justify-between', 'xl:items-center')}>
                <div className={clsx(styles.text, 'flex', 'flex-col', 'w-full', 'xl:w-[40%]')}>

                    <h1 className={clsx(styles.head, 'text-[2.1rem]', 'mb-4', 'xl:text-[3vw]', 'md:text-[2.4rem]')}>Elevate Your Palate</h1>

                    <p className={clsx(styles.body, 'w-[100%]', 'xl:text-[2vw]', 'text-[1.1rem]', 'md:text-[1.4rem]')}>
                        Experience a satisfying flavour that transforms every bite into a celebration of culinary excellence, enhancing your appreciation for food and your sense of taste.
                    </p>
                </div>
                <div className={clsx(styles.img)}>
                    <Image
                        alt='taste'
                        width={600}
                        height={400}
                        placeholder='blur'
                        blurDataURL='/images/taste.jpg'
                        src='/images/taste.jpg'
                        className='rounded-lg shadow-lg xl:rounded-[1vw] shadow-[#c2b280] xl:w-[44vw] xl:[66vh]'
                    />
                </div>
            </div>
        </div>
    );
};

export default Taste;