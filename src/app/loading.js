'use client';
import React from 'react';
import { useRive } from '@rive-app/react-canvas';


const Loading = () => {
    const { rive, RiveComponent } = useRive({
        autoplay: true,
        stateMachines: 'main',
        src: '/rive/loader.riv',
    })

    return (

        <div
            initial={{
                y: 0
            }} exit={{
                y: -200
            }} transition={{
                duration: 0.5,
                ease: 'easeOut'
            }} className="flex justify-center items-center w-screen h-screen"
        >
            <div className="flex flex-col justify-center items-center">
                <RiveComponent className="w-[50vw] h-[50vh]" />
            </div>
        </div>
    );
};

export default Loading;