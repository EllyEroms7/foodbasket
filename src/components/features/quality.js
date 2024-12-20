import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './styles/quality.module.scss'
const Quality = () => {
    return (
        <div id='quality'>
            <div className={clsx(styles.card, 'flex', 'flex-wrap', 'flex-row-reverse', 'gap-2', 'xl:w-full', 'xl:justify-between', 'xl:items-center')}>

                <div className={clsx(styles.text, 'flex', 'flex-col', 'w-full', 'xl:w-[40%]')}>

                    <h1 className={clsx(styles.head, 'text-[2.1rem]', 'xl:text-[3vw]', 'md:text-[2.4rem]', 'mb-4')}>Quality Speaks for Us</h1>

                    <p className={clsx(styles.body, 'w-[100%]', 'text-[1.1rem]', 'xl:text-[2vw]', 'md:text-[1.4rem]')}>
                        <em>Quality</em> has been overlooked by many, but we have made it our guiding principle. At the heart of everything we do we prioritise <em>quality</em>, ensuring our products stand out. </p>

                </div>
                <div className={clsx(styles.img)}>
                    <Image
                        alt='quality'
                        width={600}
                        height={400}
                        placeholder='blur'
                        blurDataURL='/images/quality.jpg'
                        src='/images/quality.jpg'
                        className='rounded-lg shadow-lg shadow-[#fca211bd] xl:rounded-[1vw] xl:w-[44vw] xl:[66vh]'
                    />
                </div>
            </div>
        </div>
    );
};

export default Quality;