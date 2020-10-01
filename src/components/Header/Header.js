import React from 'react';

import {
    HeaderWrapper,
    HeaderContainer,
    HeaderLogo,
    HeaderMenu,
    HeaderItem,
    HeaderLink,
    HeaderLogoLink,
    HeaderButton,
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
                </HeaderContainer>
            </HeaderWrapper>
        </>
    );
}

export default Header;
