import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import React, { useEffect } from 'react';

//this nav button is only for mobile phones
const NavButton = () => {
    const { rive, RiveComponent } = useRive({
        stateMachines: 'State Machine 1',
        autoplay: true,
        src: '/rive/navbutton.riv',
    })
    const on = useStateMachineInput(rive, "State Machine 1", 'on');
    return (
        <RiveComponent onClick={() => on && (on.value = !on.value)} />
    );
};

export default NavButton;