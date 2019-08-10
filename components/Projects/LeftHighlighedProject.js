import React from 'react';

import ProjectItemWrapper from './ProjectItemWrapper';
import ImageHolder from './ImageHolder';
import ContentHolder from './ContentHolder';
import TitleHeader from './TitleHeader';
import TitleLink from './TitleLink';
import TitleDescription from './TitleDescription';
import StackHolder from './StackHolder';
import StackItem from './StackItem';
import FeaturedLinksWrapper from './FeaturedLinksWrapper';
import FeaturedLink from './FeaturedLink';

const LeftHighlighedProject = ({ content }) => {
    const { image } = content;
    return (
        <ProjectItemWrapper>
            <ImageHolder image={image} />
            <ContentHolder customClass="align-right">
                <TitleHeader />
                <TitleLink url="/" title="ABC" />
                <TitleDescription customClass="tx-100" />
                <StackHolder>
                    <StackItem title="React" />
                    <StackItem title="JS" />
                </StackHolder>
                <FeaturedLinksWrapper>
                    <FeaturedLink url="/" title="GitHub" icon="fab fa-github" />
                    <FeaturedLink url="/" title="Download" icon="fas fa-external-link-alt" />
                </FeaturedLinksWrapper>
            </ContentHolder>
        </ProjectItemWrapper>
    );
};

export default LeftHighlighedProject;
