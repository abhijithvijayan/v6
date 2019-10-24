import React, { useState } from 'react';
import styled from 'styled-components';

import TitleItem from './TitleItem';
import DetailItem from './DetailItem';
import TitlesHolder from './TitlesHolder';
import DetailsHolder from './DetailsHolder';
import ExperienceHeader from './ExperienceHeader';
import ExperienceContentHolder from './ExperienceContentHolder';

const ExperienceWrapper = styled.div`
    position: relative;
    max-width: 700px;
    margin: 0px auto;
`;

const Highlighter = styled.span`
    display: block;
    width: 2px;
    height: 42px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 10;
    background: rgb(100, 255, 218);
    border-radius: 2px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
    transform: translateY(
        ${props => {
            return props.activeTabId > 0 ? props.activeTabId * 41 : 0;
        }}px
    );

    @media screen and (max-width: 575px) {
        width: 100%;
        height: 2px;
        top: auto;
        bottom: 0px;
        max-width: 152px;
        transform: translateX(
            ${props => {
                return props.activeTabId > 0 ? props.activeTabId * 152 : 0;
            }}px
        );
    }
`;

const Experience = ({ content }) => {
    const [activeTabId, setActiveTabId] = useState(0);

    if (!content.length) {
        return null;
    }
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
                            return (
                                <TitleItem setActiveTabId={setActiveTabId} title={title} id={index + 1} key={index} />
                            );
                        })}
                        <Highlighter activeTabId={activeTabId} />
                    </TitlesHolder>
                    <DetailsHolder>
                        {content.map((item, index) => {
                            return <DetailItem data={item} id={index + 1} key={index} />;
                        })}
                    </DetailsHolder>
                </ExperienceContentHolder>
            </ExperienceWrapper>
        </section>
    );
};

export default Experience;
