import React from 'react';

import {
    HeaderWrapper,
    HeaderContainer,
    HeaderLogo,
    HeaderMenu,
    HeaderItem,
    HeaderLink,
    HeaderLogoLink,
    HeaderText,
} from './Header.elements';

function Header() {
    return (
        <>
            <HeaderWrapper>
                <HeaderContainer>
                    <HeaderLogo>
                        <HeaderLogoLink to="/">
                            <h1>JCH</h1>
                        </HeaderLogoLink>
                    </HeaderLogo>
                    <HeaderMenu>
                        <HeaderItem>ThemeSwitcher</HeaderItem>
                        <HeaderItem>
                            <HeaderLink to="/">
                                <HeaderText>HOME</HeaderText>
                            </HeaderLink>
                        </HeaderItem>
                        <HeaderItem>
                            <HeaderLink to="/projects">
                                <HeaderText>PROJECTS</HeaderText>
                            </HeaderLink>
                        </HeaderItem>
                    </HeaderMenu>
                </HeaderContainer>
            </HeaderWrapper>
        </>
    );
}

export default Header;
