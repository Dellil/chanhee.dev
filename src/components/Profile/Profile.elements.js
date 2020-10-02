import styled from 'styled-components';

import { Container } from '../../GlobalStyles';

export const ProfileContainer = styled(Container)`
    margin-top: 20px;
    padding: 0 20px;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 1px solid ${({ theme }) => theme.profile.borderColor};
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    pointer-events: none;
    user-select: none;

    background-color: ${({ theme }) => theme.profile.backgroundColor};
`;

export const ProfileImageContainer = styled.div`
    margin-right: 20px;
    max-height: 350px;
    border-right: 3px solid ${({ theme }) => theme.profile.borderRight};
`;

export const ProfileImage = styled.img`
    max-width: 350px;
    max-height: 350px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 25px;
`;

export const Texts = styled.div`
    font-family: 'Nanum Gothic Coding';
    letter-spacing: 1.3px;
`;

export const TitleText = styled.h1`
    color: ${({ theme }) => theme.profile.primaryColor};
`;

export const SubText = styled.h3`
    display: inline-block;
    padding: 5px;
    background-color: ${({ theme }) => theme.profile.primaryColor};
    color: ${({ theme }) => theme.backgroundColor};
    margin-top: 10px;
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.profile.secondColor};
    &:first-of-type {
        margin-top: 45px;
    }
    & + p {
        margin-top: 10px;
    }
`;
