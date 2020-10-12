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
            border: '#dee2e6',
            backgroundColor: 'white',
            primaryColor: '#343a40',
            secondColor: '#495057',
        },
        info: {
            backgroundColor: 'white',
            border: '#dee2e6',
            primaryColor: '#343a40',
            secondColor: '#495057',
        },
        project: {
            backgroundColor: '#fcfeff',
            titleBackground: 'white',
            contentBackground: '#e9ecef',
            primaryColor: '#343a40',
            secondColor: '#495057',
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
            border: '#212529',
            backgroundColor: '#343a40',
            primaryColor: '#f1f3f5',
            secondColor: '#ced4da',
        },
        info: {
            backgroundColor: '#343a40',
            border: '#dee2e6',
            primaryColor: '#f1f3f5',
            secondColor: '#ced4da',
        },
        project: {
            backgroundColor: '#343a40',
            titleBackground: '#212529',
            contentBackground: '#2f353b',
            primaryColor: '#f1f3f5',
            secondColor: '#ced4da',
        },
        backgroundColor: '#495057',
    },
};

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;

    @media screen and (max-width: 840px) {
        padding: 0 50px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 480px) {
        padding: 0 20px;
    }
`;
