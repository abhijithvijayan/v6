import React from 'react';
import { Col } from 'react-bootstrap';

import TitleHeader from './TitleHeader';
import TitleLink from './TitleLink';
import TitleDescription from './TitleDescription';
import StackHolder from './StackHolder';
import StackItem from './StackItem';
import FeaturedLinksWrapper from './FeaturedLinksWrapper';
import FeaturedLink from './FeaturedLink';

const ContentHolder = () => {
    return (
        <Col md={5}>
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
        </Col>
    );
};

export default ContentHolder;
