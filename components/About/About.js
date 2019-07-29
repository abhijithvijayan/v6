import React from 'react';
import styled from 'styled-components';

import AboutHeader from './AboutHeader';
import AboutContentHolder from './AboutContentHolder';

const AboutWrapper = styled.div`
    max-width: 1000px;
    position: relative;
`;

const About = () => {
    return (
        <AboutWrapper className="wrapper">
            <AboutHeader />
            <AboutContentHolder />
        </AboutWrapper>
    );
};

export default About;
