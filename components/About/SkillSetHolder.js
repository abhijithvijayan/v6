import React from 'react';
import styled from 'styled-components';

const SkillsWrapper = styled.ul`
    display: grid;
    grid-template-columns: minmax(140px, 200px) minmax(140px, 200px);
    margin-top: 20px;
    overflow: hidden;
    li {
        position: relative;
        margin-bottom: 10px;
        padding-left: 20px;
        font-family: ${({ theme }) => {
            return theme.sfmono;
        }};
        font-size: 14px;
        color: ${({ theme }) => {
            return theme.skyBlue;
        }};

        &::before {
            content: '▹';
            position: absolute;
            left: 0px;
            color: ${({ theme }) => {
                return theme.whiteYellow;
            }};
            font-size: 14px;
            line-height: 12px;
        }
    }
`;

const SkillSetHolder = ({ data }) => {
    return (
        <SkillsWrapper>
            {data.map(item => {
                return <li key={item}>{item}</li>;
            })}
        </SkillsWrapper>
    );
};

export default SkillSetHolder;
