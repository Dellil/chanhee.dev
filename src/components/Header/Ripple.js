import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';

export const RippleContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    span {
        transform: scale(0);
        border-radius: 100%;
        position: absolute;
        opacity: 0.75;
        background-color: ${(props) => props.color};
        animation-name: ripple;
        animation-duration: ${(props) => props.duration}ms;
    }

    @keyframes ripple {
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
`;

function Ripple({ duration = 850, color = '#fff' }) {
    const [rippleArray, setRippleArray] = useState([]);

    useLayoutEffect(() => {
        let bounce = null;
        if (rippleArray.length > 0) {
            clearTimeout(bounce);

            bounce = setTimeout(() => {
                setRippleArray([]);
                clearTimeout(bounce);
            }, duration * 4);
        }

        return () => clearTimeout(bounce);
    }, [rippleArray.length, duration, setRippleArray]);

    const addRipple = (event) => {
        const rippleContainer = event.currentTarget.getBoundingClientRect();
        const size =
            rippleContainer.width > rippleContainer.height
                ? rippleContainer.width
                : rippleContainer.height;

        const x = event.pageX - rippleContainer.x - rippleContainer.width / 2;
        const y = event.pageY - rippleContainer.y - rippleContainer.width / 2;
        const newRipple = {
            x,
            y,
            size,
            id: Math.random(),
        };

        setRippleArray((prevState) => [...prevState, newRipple]);
    };
    return (
        <RippleContainer
            duration={duration}
            color={color}
            onMouseDown={addRipple}
        >
            {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => {
                    return (
                        <span
                            key={ripple.id}
                            style={{
                                top: ripple.y,
                                left: ripple.x,
                                width: ripple.size,
                                height: ripple.size,
                            }}
                        />
                    );
                })}
        </RippleContainer>
    );
}

export default Ripple;
