import React from 'react';
import styled from 'styled-components';
import { Row, Tab } from 'react-bootstrap';

import TitlesHolder from './TitlesHolder';
import DetailsHolder from './DetailsHolder';

const ContentWrapper = styled(Row)`
    padding-left: 15px;
`;

const ExperienceContentHolder = () => {
    return (
        <Tab.Container id="experience__tabs" defaultActiveKey="first">
            <ContentWrapper>
                <TitlesHolder />
                <DetailsHolder />
            </ContentWrapper>
        </Tab.Container>
    );
};

export default ExperienceContentHolder;
