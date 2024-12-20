import React from 'react';
import styles from './styles/design.module.scss';
import clsx from 'clsx';
import Image from 'next/image';

const Design = () => {
    return (
        <div id='design'>
            <div className={clsx(styles.card, 'flex', 'flex-wrap', 'gap-2', 'xl:w-full', 'xl:justify-between', 'xl:items-center')}>
                <div className={clsx(styles.text, 'flex', 'flex-col', 'w-full', 'xl:w-[40%]')}>

                    <h1 className={clsx(styles.head, 'text-[2.1rem]', 'xl:text-[3vw]', 'mb-4', 'md:text-[2.4rem]')}>Crafting the Perfect Design</h1>

                    <p className={clsx(styles.body, 'w-[100%]', 'xl:text-[2vw]', 'text-[1.1rem]', 'md:text-[1.4rem]')}> Our <em>designs</em> capture the essence of celebration, showcasing uniqueness and elegance. Each piece of art is crafted to reflect individuality, ensuring that every occasion is truly special.</p>
                </div>
                <div className={clsx(styles.img)}>
                    <Image
                        alt='design'
                        width={600}
                        height={400}
                        placeholder='blur'
                        blurDataURL='/images/design.jpg'
                        src='/images/design.jpg'
                        className='rounded-lg xl:rounded-[1vw] shadow-lg shadow-[#ff004458] xl:w-[44vw] xl:[66vh]'
                    />
                </div>
            </div>
        </div>
    );
};

export default Design;