import React from 'react';
import { Row } from 'react-bootstrap';

import TextContentWrapper from './TextContentWrapper';
import AboutTextContent from './AboutTextContent';
import SkillSetHolder from './SkillSetHolder';
import ProfileHolder from './ProfileHolder';

const AboutContentHolder = ({ data: { attributes, html } }) => {
    const { avatar, skills } = attributes;
    return (
        <Row className="d-flex justify-content-between align-items-start wow fadeInUp">
            <TextContentWrapper>
                <AboutTextContent data={html} />
                <SkillSetHolder data={skills} />
            </TextContentWrapper>
            <ProfileHolder image={avatar} />
        </Row>
    );
};

export default AboutContentHolder;
