import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import TextContentWrapper from './TextContentWrapper';
import AboutTextContent from './AboutTextContent';
import SkillSetHolder from './SkillSetHolder';
import ProfileHolder from './ProfileHolder';

const ContentWrapper = styled(Row)`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const AboutContentHolder = ({ data: { attributes, body } }) => {
    const { avatar, skills } = attributes;
    return (
        <ContentWrapper>
            <TextContentWrapper>
                <AboutTextContent data={body} />
                <SkillSetHolder data={skills} />
            </TextContentWrapper>
            <ProfileHolder image={avatar} />
        </ContentWrapper>
    );
};

export default AboutContentHolder;
