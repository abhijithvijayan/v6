import React from 'react';
import styled from 'styled-components';

import TitleItem from './TitleItem';
import TitlesHolder from './TitlesHolder';
import DetailsHolder from './DetailsHolder';
import ExperienceHeader from './ExperienceHeader';
import ExperienceContentHolder from './ExperienceContentHolder';

const ExperienceWrapper = styled.div`
    position: relative;
    max-width: 700px;
    margin: 0px auto;
`;

const Experience = ({ content }) => {
    return (
        <section id="experience">
            <ExperienceWrapper className="wrapper">
                <ExperienceHeader />
                <ExperienceContentHolder>
                    <TitlesHolder>
                        {content.map((item, index) => {
                            const {
                                attributes: { title },
                            } = item;
                            return <TitleItem title={title} id={index + 1} key={index} />;
                        })}
                    </TitlesHolder>
                    <DetailsHolder />
                </ExperienceContentHolder>
            </ExperienceWrapper>
        </section>
    );
};

export default Experience;
