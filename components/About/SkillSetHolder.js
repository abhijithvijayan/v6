import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

const SkillsWrapper = styled(Col)`
    p {
        line-height: 1.6;
    }
    ul {
        display: grid;
        grid-template-columns: minmax(140px, 200px) minmax(140px, 200px);
        margin-top: 20px;
        overflow: hidden;
        li {
            position: relative;
            margin-bottom: 10px;
            padding-left: 20px;
            font-family: $font-family-sfmono;
            font-size: 14px;
            color: $color-sky-blue;

            &::before {
                content: '▹';
                position: absolute;
                left: 0px;
                color: $color-white-yellow;
                font-size: 14px;
                line-height: 12px;
            }
        }
    }
`;

const SkillSetHolder = () => {
    return (
        <SkillsWrapper md={6}>
            <p className="subtitle">
                I'm a Computer enthusiast who loves coding and aspires to build things for good. I love developing
                awesome and efficient applications / tools.
            </p>
            <p className="subtitle">
                I also do share my thoughts and knowledge with others coz that helps me question my knowledge as well.
            </p>
            <p className="subtitle">Here's a few things I'm experienced with:</p>
            <ul>
                <li>Node</li>
                <li>Express</li>
                <li>React</li>
                <li>Redux</li>
                <li>Next.js</li>
                <li>JavaScript (ES6)</li>
                <li>CSS / SASS</li>
                <li>Java / C</li>
                <li>Dependency Managers</li>
                <li>Adobe Creative Suite</li>
            </ul>
        </SkillsWrapper>
    );
};

export default SkillSetHolder;
