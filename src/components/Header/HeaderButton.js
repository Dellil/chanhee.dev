import React from 'react';
import styled from 'styled-components';

import Ripple from './Ripple';

export const Button = styled.button`
    padding: 10px 25px;
    font-size: 1.15rem;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 20px;
    cursor: pointer;
    color: white;
    text-align: center;

    position: relative;
    overflow: hidden;

    transition: all 0.15s ease-out;
    &:hover {
        color: #ced4da;
    }
    &:active {
        outline: none;
    }
    &:focus {
        outline: none;
    }
`;

export default function HeaderButton({ children }) {
    return (
        <Button>
            {children}
            <Ripple />
        </Button>
    );
}