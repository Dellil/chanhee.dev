import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.backgroundColor}
    }
`;

export const theme = {
    light: {
        header: {
            height: '70px',
            backgroundColor: '#7048e8',
        },
        backgroundColor: 'ghostwhite',
    },
    dark: {
        header: {
            height: '70px',
            backgroundColor: '#343a40',
        },
        backgroundColor: '#495057',
    },
};

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 20px;

    @media screen and (max-width: 520px) {
        padding: 0 10px;
    }
`;
