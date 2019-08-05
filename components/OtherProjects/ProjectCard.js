import React from 'react';
import styled from 'styled-components';

import CardHeader from './CardHeader';
import CardTitle from './CardTitle';
import CardFooter from './CardFooter';
import CardSubtitleHolder from './CardSubtitleHolder';

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    background-color: ${({ theme }) => {
        return theme.darkPurple;
    }};
    padding: 25px;
    border-radius: 2px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    @media screen and (min-width: ${({ theme }) => {
            return theme.screenXsMin;
        }}) {
        box-shadow: 0 20px 70px -10px ${({ theme }) => {
                    return theme.shadow;
                }},
            0 25px 100px 0
                ${({ theme }) => {
                    return theme.shadow;
                }};
    }

    &:hover {
        transform: translateY(-5px);
    }
`;

const ProjectCard = () => {
    return (
        <CardWrapper>
            <div>
                <CardHeader />
                <CardTitle title="AR-TreasureHunt" />
                <CardSubtitleHolder />
            </div>
            <CardFooter />
        </CardWrapper>
    );
};

export default ProjectCard;
