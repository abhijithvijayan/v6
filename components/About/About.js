import React from 'react';
import styled from 'styled-components';

import AboutHeader from './AboutHeader';
import AboutContentHolder from './AboutContentHolder';

const AboutWrapper = styled.div`
    max-width: 1000px;
    position: relative;
`;

const About = ({ content }) => {
    const {
        attributes: { title },
    } = content[0];
    return (
        <section id="about">
            <AboutWrapper className="wrapper">
                <AboutHeader title={title} />
                <AboutContentHolder data={content[0]} />
            </AboutWrapper>
        </section>
    );
};

export default About;
