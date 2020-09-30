import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const theme = {
    header: {
        height: '70px',
        backgroundColor: '#7048e8',
    },
};

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
`;
