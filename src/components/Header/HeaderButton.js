import React from 'react';
import styled from 'styled-components';

import Ripple from './Ripple';

export const Button = styled.button`
    padding: 10px 25px;
    font-size: 1.15rem;
    font-family: 'Source Code Pro';
    font-weight: bold;
    background-color: transparent;
    border-radius: 20px;
    border: none;
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

    @media screen and (max-width: 520px) {
        padding: 5px 10px;
        font-size: 0.8rem;

        &:hover {
            color: white;
        }
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
