import React from 'react';

import { ProjectsContainer, ProjectsWrapper } from './ProjectList.elements';
import Project from '../Project/Project';

import datas from './data';

function ProjectList() {
    return (
        <ProjectsContainer>
            <ProjectsWrapper>
                {datas.map((v, i) => {
                    // eslint-disable-next-line react/no-array-index-key
                    return <Project {...v} key={i} />;
                })}
            </ProjectsWrapper>
        </ProjectsContainer>
    );
}
export default ProjectList;
