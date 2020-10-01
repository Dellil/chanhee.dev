import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const ThemeContainer = styled.div`
    width: 80px;
    height: 40px;
    border-radius: 20px;

    background: transparent;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const Paper = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.bgColor};
`;

const ThemePaper = styled.div`
    display: flex;
    align-items: center;
`;

const LightTheme = () => {
    return (
        <ThemePaper>
            <Paper
                bgColor="#f8f9fa"
                style={{ paddingLeft: '5px', cursor: 'pointer' }}
            >
                <FaBars />
            </Paper>
            <Paper bgColor="#f8f9fa" style={{ paddingRight: '5px' }}>
                <FaSun />
            </Paper>
        </ThemePaper>
    );
};

const DarkTheme = () => {
    return (
        <IconContext.Provider value={{ color: 'white' }}>
            <ThemePaper>
                <Paper bgColor="#495057" style={{ paddingLeft: '5px' }}>
                    <FaMoon />
                </Paper>
                <Paper
                    bgColor="#495057"
                    style={{ paddingRight: '5px', cursor: 'pointer' }}
                >
                    <FaBars />
                </Paper>
            </ThemePaper>
        </IconContext.Provider>
    );
};

const ThemeWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    position: absolute;
    top: 0;
    left: ${(props) => (props.isDark ? '0%' : '-100%')};

    transition: all 0.5s;
`;

function ThemeSwitcher({ theme, toggleTheme }) {
    const [isDark, setDark] = useState(theme === 'dark');

    const onClick = () => {
        setDark(!isDark);
        toggleTheme();
    };

    return (
        <>
            <ThemeContainer>
                <ThemeWrapper onClick={onClick} isDark={isDark}>
                    <LightTheme />
                    <DarkTheme />
                </ThemeWrapper>
            </ThemeContainer>
        </>
    );
}

export default ThemeSwitcher;
