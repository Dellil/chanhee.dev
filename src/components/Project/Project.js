import React from 'react';

import {
    ProjectContainer,
    ProjectTitle,
    ProjectTitleText,
    ProjectContent,
    ProjectImage,
    ProjectDescriptionContainer,
    ProjectText,
    ProjectDate,
    ProjectDateText,
    ProjectDescription,
    ProjectDescriptionText,
} from './Project.elements';

function Project({ title, image, text, date, description, link }) {
    return (
        <ProjectContainer href={link}>
            <ProjectTitle>
                <ProjectTitleText title={title}>{title}</ProjectTitleText>
            </ProjectTitle>
            <ProjectContent>
                {image ? (
                    <ProjectImage src={image} />
                ) : (
                    <ProjectText>{text}</ProjectText>
                )}
            </ProjectContent>
            <ProjectDescriptionContainer>
                <ProjectDate>
                    <ProjectDateText>{date}</ProjectDateText>
                </ProjectDate>
                <ProjectDescription>
                    <ProjectDescriptionText title={description}>
                        {description}
                    </ProjectDescriptionText>
                </ProjectDescription>
            </ProjectDescriptionContainer>
        </ProjectContainer>
    );
}

export default Project;
