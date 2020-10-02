import React from 'react';

import {
    HeaderWrapper,
    HeaderContainer,
    HeaderLogo,
    HeaderMenu,
    HeaderItem,
    HeaderLink,
    HeaderLogoLink,
} from './Header.elements';

import HeaderButton from './HeaderButton';
import ThemeSwitcher from './ThemeSwitcher';

function Header({ theme, toggleTheme }) {
    return (
        <>
            <HeaderContainer>
                <HeaderWrapper>
                    <HeaderLogo>
                        <HeaderLogoLink to="/">
                            <h1>JCH</h1>
                        </HeaderLogoLink>
                    </HeaderLogo>
                    <HeaderMenu>
                        <HeaderItem>
                            <ThemeSwitcher
                                theme={theme}
                                toggleTheme={toggleTheme}
                            />
                        </HeaderItem>
                        <HeaderItem>
                            <HeaderLink to="/">
                                <HeaderButton>
                                    <p>HOME</p>
                                </HeaderButton>
                            </HeaderLink>
                        </HeaderItem>
                        <HeaderItem>
                            <HeaderLink to="/projects">
                                <HeaderButton>
                                    <p>PROJECTS</p>
                                </HeaderButton>
                            </HeaderLink>
                        </HeaderItem>
                    </HeaderMenu>
                </HeaderWrapper>
            </HeaderContainer>
        </>
    );
}

export default Header;
