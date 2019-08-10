import React from 'react';

import ProjectItemWrapper from './ProjectItemWrapper';
import ContentHolder from './ContentHolder';
import TitleHeader from './TitleHeader';
import TitleLink from './TitleLink';
import TitleDescription from './TitleDescription';
import StackHolder from './StackHolder';
import StackItem from './StackItem';
import FeaturedLinksWrapper from './FeaturedLinksWrapper';
import FeaturedLink from './FeaturedLink';
import ImageHolder from './ImageHolder';

const RightHighlighedProject = ({ content }) => {
    const { image } = content;
    return (
        <ProjectItemWrapper>
            <ContentHolder customClass="align-left">
                <TitleHeader />
                <TitleLink url="/" title="ABC" />
                <TitleDescription />
                <StackHolder>
                    <StackItem title="React" />
                    <StackItem title="JS" />
                </StackHolder>
                <FeaturedLinksWrapper>
                    <FeaturedLink url="/" title="GitHub" icon="fab fa-github" />
                    <FeaturedLink url="/" title="Download" icon="fas fa-external-link-alt" />
                </FeaturedLinksWrapper>
            </ContentHolder>
            <ImageHolder image={image} />
        </ProjectItemWrapper>
    );
};

export default RightHighlighedProject;
