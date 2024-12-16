import { useRive } from '@rive-app/react-canvas';
import React from 'react';

const Scroll = () => {
    /**
     * Scroll illustration telling the user to scroll
     */

    const { rive, RiveComponent } = useRive({
        // autoplay: true,
        stateMachines: 'main',
        src: '/rive/scroll.riv',
    })
    setTimeout(() => {
        if (rive) {
            rive.play()
        }
    }, 1000)
    return (
        <RiveComponent />
    );
};

export default Scroll;