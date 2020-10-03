import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

export const InfoContainer = styled(Container)`
    margin-top: 20px;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const InfoCard = styled.div`
    font-family: 'Nanum Gothic Coding';
    flex-basis: 25%;
    margin: 0 8px;
    background-color: ${({ theme }) => theme.info.backgroundColor};
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
`;

export const InfoMain = styled.div`
    color: white;
    background-color: ${(props) => props.backgroundColor};
    text-align: center;
    font-size: 1.8rem;
    padding: 100px 0 100px;
`;

export const InfoContent = styled.div`
    padding: 30px 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InfoText = styled.p`
    display: inline-block;
    text-align: center;
    color: ${({ theme }) => theme.info.secondColor};
`;
