import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

export const InfoContainer = styled(Container)`
    margin-top: 20px;
`;

export const InfoLink = styled.a`
    display: block;
    flex-basis: 25%;
    max-width: 25%;
    margin: 0 20px;
    text-decoration: none;
    z-index: 500;
    transition: all 0.15s;
    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 840px) {
        flex-basis: 50%;
        max-width: 50%;

        &:not(:first-child) {
            margin-top: 20px;
        }
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    margin-bottom: 20px;

    @media screen and (max-width: 840px) {
        flex-direction: column;
    }
`;

export const InfoCard = styled.div`
    font-family: 'Nanum Gothic Coding';

    background-color: ${({ theme }) => theme.info.backgroundColor};
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
`;

export const InfoMain = styled.div`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${(props) => props.backgroundColor};

    padding: 80px 0 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-basis: 80%;
`;

export const InfoMainText = styled.p`
    display: inline;
    color: white;
    font-size: 1.8rem;
    text-align: center;

    @media screen and (max-width: 1000px) {
        font-size: 1.5rem;
    }
`;

export const InfoContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 20%;
    height: 100%;
`;

export const InfoText = styled.p`
    text-align: center;
    width: 100%;
    padding: 15px 10px 15px;
    line-height: 1.3rem;
    color: ${({ theme }) => theme.info.secondColor};

    @media screen and (max-width: 1000px) {
        font-size: 0.9rem;
    }
`;
