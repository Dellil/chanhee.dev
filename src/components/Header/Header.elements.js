import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from '../../GlobalStyles';

export const HeaderWrapper = styled.header`
    width: 100%;
    height: ${(props) => props.theme.header.height};
    background-color: ${(props) => props.theme.header.backgroundColor};
    font-family: 'Source Code Pro';
`;

export const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

export const HeaderLogo = styled.div`
    display: flex;
    justify-content: flex-start;
`;

// HEADER MENU
export const HeaderMenu = styled.ul`
    list-style-type: none;
    display: flex;
`;

export const HeaderItem = styled.li`
    display: flex;
    align-items: center;

    &:nth-child(2) {
        margin-left: 15px;
    }
`;

export const HeaderText = styled.p`
    color: white;
`;

export const HeaderLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    height: ${(props) => props.theme.header.height};
    padding: 0 15px;
    transition: all 0.15s ease-out;

    & * {
        transition: all 0.15s ease-out;
    }
    &:hover {
        text-decoration-color: #ced4da;
        & * {
            color: #ced4da;
        }
    }
`;

// LOGO
export const HeaderLogoLink = styled(HeaderLink)`
    display: flex;
    align-items: center;
    text-decoration: underline;
    color: white;
`;
