import styled from 'styled-components';

export const ProjectContainer = styled.a`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 33%;
    text-decoration: none;

    margin: 0 20px;

    background-color: ${({ theme }) => theme.project.backgroundColor};
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const ProjectTitle = styled.div`
    background-color: ${({ theme }) => theme.project.titleBackground};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
`;

export const ProjectTitleText = styled.p`
    font-family: 'Nanum Gothic Coding';
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.project.primaryColor};
`;

export const ProjectContent = styled.div`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: ${({ theme }) => theme.project.contentBackground};
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ProjectText = styled.div`
    font-family: 'Nanum Gothic Coding';
    font-size: 1.5rem;

    padding: 20px;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${({ theme }) => theme.project.secondColor};
`;

export const ProjectDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;

    height: 100px;
`;

export const ProjectDate = styled.div`
    height: 50px;

    display: flex;
    align-items: flex-start;
    padding-left: 10px;
    padding-top: 10px;
`;

export const ProjectDateText = styled.span`
    border: 1px solid ${({ theme }) => theme.project.secondColor};
    color: ${({ theme }) => theme.project.secondColor};
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
`;

export const ProjectDescription = styled.div`
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ProjectDescriptionText = styled.p`
    color: ${({ theme }) => theme.project.secondColor};
`;
