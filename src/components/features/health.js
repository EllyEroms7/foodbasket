import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './styles/health.module.scss'

const Health = () => {
    return (
        <div id='health'>
            <div className={clsx(styles.card, 'flex', 'flex-wrap', 'flex-row-reverse', 'gap-2', 'bg-red-600')}>

                <div className={clsx(styles.text, 'flex', 'flex-col', 'w-full', 'p-[10%]')}>

                    <h1 className={clsx(styles.head, 'text-[1.5rem]', 'mb-4', 'md:text-[2.4rem]', 'sm:text-[3vw]', 'lg:text-[4vw]')}>Healthy Bakes, Sweet Health</h1>

                    <p className={clsx(styles.body, 'w-[100%]', 'text-[1rem]', 'md:text-[1.4rem]', 'sm:text-[1.6vw]', 'xl:text-[2vw]')}>
                        We are committed to our customers&lsquo; health and well-being. Our treats are made with wholesome ingredients, ensuring every bite is both delicious and nourishing. Enjoy our healthy bakes and embrace sweet health.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Health;