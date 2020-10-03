import styled from 'styled-components';

import { Container } from '../../GlobalStyles';

export const ProfileContainer = styled(Container)`
    margin-top: 20px;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    border: 1px solid ${({ theme }) => theme.profile.borderColor};
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    pointer-events: none;
    user-select: none;
    background-color: ${({ theme }) => theme.profile.backgroundColor};
    margin: 0 20px;
    @media screen and (max-width: 840px) {
        flex-direction: column;
    }
`;

export const ProfileImageContainer = styled.div`
    border-right: 2px solid ${({ theme }) => theme.profile.border};
    flex-basis: 33.333%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 840px) {
        border-right: none;
        border-bottom: 2px solid ${({ theme }) => theme.profile.border};
    }
`;

export const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    @media screen and (max-width: 840px) {
        border-top-right-radius: 20px;
        border-bottom-left-radius: 0px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 50px 15px 0;
    flex-basis: 33.333%;

    &:not(:last-child) {
        border-right: 3px solid ${({ theme }) => theme.profile.border};
    }

    @media screen and (max-width: 1200px) {
        padding: 30px 10px 0;
    }

    @media screen and (max-width: 840px) {
        padding-top: 30px;
        padding-left: 30px;
        &:not(:last-child) {
            border-right: none;
            border-bottom: 3px solid ${({ theme }) => theme.profile.border};
        }
    }
`;

export const Texts = styled.div`
    font-family: 'Nanum Gothic Coding';
    letter-spacing: 1.3px;
`;

export const TitleText = styled.h1`
    font-size: 2.3rem;
    color: ${({ theme }) => theme.profile.primaryColor};

    @media screen and (max-width: 1200px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 840px) {
        font-size: 2.3rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const SubText = styled.h3`
    display: inline-block;
    padding: 5px;
    background-color: ${({ theme }) => theme.profile.primaryColor};
    color: ${({ theme }) => theme.backgroundColor};
    margin-top: 10px;

    @media screen and (max-width: 1200px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 840px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.profile.secondColor};
    line-height: 1.4rem;
    /* font-weight: bold; */

    &:first-of-type {
        margin-top: 45px;
    }
    & + p {
        margin-top: 10px;
    }

    @media screen and (max-width: 1200px) {
        &:first-of-type {
            margin-top: 10px;
        }

        & + p {
            margin-top: 5px;
        }

        &:last-of-type {
            padding-bottom: 10px;
        }

        font-size: 0.7rem;
    }

    @media screen and (max-width: 840px) {
        &:first-of-type {
            padding-top: 20px;
        }

        &:last-of-type {
            padding-bottom: 40px;
        }

        & + p {
            margin-top: 10px;
        }

        font-size: 1rem;
    }

    @media screen and (max-width: 480px) {
        &:first-of-type {
            padding-top: 15px;
        }

        &:last-of-type {
            padding-bottom: 30px;
        }

        & + p {
            margin-top: 5px;
        }

        font-size: 0.9rem;
    }
`;
