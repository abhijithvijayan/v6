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

const LeftHighlighedProject = ({ item: { attributes, html } }) => {
    const { cover, external, github, title, tech } = attributes;
    return (
        <ProjectItemWrapper>
            <ImageHolder image={cover} title={title} />
            <ContentHolder customClass="align-right">
                <TitleHeader />
                <TitleLink url={external} title={title} />
                <TitleDescription text={html} customClass="tx-100" />
                <StackHolder>
                    {tech.map(item => {
                        return <StackItem title={item} key={item} />;
                    })}
                </StackHolder>
                <FeaturedLinksWrapper>
                    {github ? <FeaturedLink url={github} title="GitHub" icon="github" /> : null}
                    {external ? <FeaturedLink url={external} title="Visit" icon="external-link" /> : null}
                </FeaturedLinksWrapper>
            </ContentHolder>
        </ProjectItemWrapper>
    );
};

export default LeftHighlighedProject;
