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
        profile: {
            borderColor: '#dee2e6',
            borderRight: '#dee2e6',
            backgroundColor: 'white',
            primaryColor: '#343a40',
            secondColor: '#868e96',
        },
        backgroundColor: 'ghostwhite',
    },
    dark: {
        header: {
            height: '70px',
            backgroundColor: '#343a40',
        },
        profile: {
            borderColor: '#495057',
            borderRight: '#212529',
            backgroundColor: '#343a40',
            primaryColor: '#f1f3f5',
            secondColor: '#ced4da',
        },
        backgroundColor: '#495057',
    },
};

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
`;
