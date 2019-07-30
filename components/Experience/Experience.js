import React from 'react';
import styled from 'styled-components';

import ExperienceHeader from './ExperienceHeader';
import ExperienceContentHolder from './ExperienceContentHolder';

const ExperienceWrapper = styled.div`
    position: relative;
    max-width: 700px;
    margin: 0px auto;
`;

const Experience = () => {
    return (
        <section id="experience">
            <ExperienceWrapper className="wrapper">
                <ExperienceHeader />
                <ExperienceContentHolder />
            </ExperienceWrapper>
        </section>
    );
};

export default Experience;
