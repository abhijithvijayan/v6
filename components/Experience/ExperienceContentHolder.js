import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import TitlesHolder from './TitlesHolder';
import DetailsHolder from './DetailsHolder';

const ContentWrapper = styled(Row)`
    padding-left: 15px;
`;

const ExperienceContentHolder = () => {
    return (
        <ContentWrapper>
            <TitlesHolder />
            <DetailsHolder />
        </ContentWrapper>
    );
};

export default ExperienceContentHolder;
