import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import SkillSetHolder from './SkillSetHolder';
import ProfileHolder from './ProfileHolder';

const ContentWrapper = styled(Row)`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const AboutContentHolder = () => {
    return (
        <ContentWrapper>
            <SkillSetHolder />
            <ProfileHolder />
        </ContentWrapper>
    );
};

export default AboutContentHolder;
