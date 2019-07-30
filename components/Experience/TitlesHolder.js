import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

import TitleButton from './TitleButton';

const TitlesWrapper = styled.div`
    @media screen and (max-width: 37.5em) {
        flex-wrap: nowrap;
        margin-bottom: 30px;
        width: 100%;
        overflow-x: scroll;
    }
    .active__highlighter {
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

        @media screen and (max-width: 37.5em) {
            width: 100%;
            max-width: 120px;
            height: 2px;
            top: auto;
            bottom: 0px;
        }
    }
`;

const TitlesHolder = () => {
    return (
        <Col sm={3} className="pl-0">
            <TitlesWrapper className="nav flex-row flex-sm-column" role="tablist" aria-orientation="vertical">
                {/* ToDo: Pass classnames `active active__tab` */}
                <TitleButton
                    title="Full Stack Dev"
                    classNames="active active__tab"
                    id="first__tab"
                    href="#first__exp"
                    aria-controls="first__exp"
                    aria-selected="true"
                />
                <TitleButton
                    title="Front-end Dev"
                    id="second__tab"
                    href="#second__exp"
                    aria-controls="second__exp"
                    aria-selected="false"
                />
                <TitleButton
                    title="Designer"
                    id="third__tab"
                    href="#third__exp"
                    aria-controls="third__exp"
                    aria-selected="false"
                />
                <TitleButton
                    title="Tech Lead"
                    id="forth__tab"
                    href="#forth__exp"
                    aria-controls="forth__exp"
                    aria-selected="false"
                />
                <span className="active__highlighter d-none d-sm-block"></span>
            </TitlesWrapper>
        </Col>
    );
};

export default TitlesHolder;
