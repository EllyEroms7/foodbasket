import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './styles/quality.module.scss'
const Quality = () => {
    return (
        <div id='quality'>
            <div className={clsx(styles.card, 'flex', 'flex-wrap', 'flex-row-reverse', 'gap-2')}>

                <div className={clsx(styles.text, 'flex', 'flex-col', 'w-full')}>

                    <h1 className={clsx(styles.head, 'text-[2.1rem]', 'mb-4')}>Quality Speaks for Us</h1>

                    <p className={clsx(styles.body, 'w-[100%]', 'text-[1.1rem]')}>
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
                        className='rounded-lg shadow-lg shadow-[#fca211bd]'
                    />
                </div>
            </div>
        </div>
    );
};

export default Quality;