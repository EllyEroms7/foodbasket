import React from 'react';
import styles from './styles/design.module.scss';
import clsx from 'clsx';
import Image from 'next/image';

const Design = () => {
    return (
        <div id='design'>
            <div className={clsx(styles.card, 'flex', 'flex-wrap', 'gap-2')}>
                <div className={clsx(styles.text, 'flex', 'flex-col', 'w-full')}>
                    <h1 className={clsx(styles.head, 'text-[2.1rem]', 'mb-4')}>Crafting the Perfect Design</h1>
                    <p className={clsx(styles.body, 'w-[100%]', 'text-[1.1rem]')}> Our <em>designs</em> capture the essence of celebration, showcasing uniqueness and elegance. Each piece of art is crafted to reflect individuality, ensuring that every occasion is truly special.</p>
                </div>
                <div className={clsx(styles.img)}>
                    <Image
                        alt='design'
                        width={600}
                        height={400}
                        placeholder='blur'
                        blurDataURL='/images/design.jpg'
                        src='/images/design.jpg'
                        className='rounded-lg shadow-lg shadow-[#ff004458]'
                    />
                </div>
            </div>
        </div>
    );
};

export default Design;