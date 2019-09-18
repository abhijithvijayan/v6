import React from 'react';

import ProjectsHeader from './ProjectsHeader';
import ProjectsWrapper from './ProjectsWrapper';
import LeftHighlighedProject from './LeftHighlighedProject';
import RightHighlightedProject from './RightHighlighedProject';

const Projects = ({ content }) => {
    let id = 1;

    const renderLeftHighlighted = (item, key) => {
        return <LeftHighlighedProject item={item} key={key} />;
    };

    const renderRightHighlighted = (item, key) => {
        return <RightHighlightedProject item={item} key={key} />;
    };

    if (!content.length) {
        return null;
    }

    return (
        <section id="projects">
            <div className="wrapper">
                <ProjectsHeader />
                <ProjectsWrapper>
                    {content.map(item => {
                        const { show } = item.attributes;
                        if (show === 'true') {
                            id += 1;
                            if (id % 2 === 0) {
                                return renderLeftHighlighted(item, id);
                            }
                            return renderRightHighlighted(item, id);
                        }
                        return null;
                    })}
                </ProjectsWrapper>
            </div>
        </section>
    );
};

export default Projects;
