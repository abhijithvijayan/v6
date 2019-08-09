import React from 'react';
import styled from 'styled-components';
import { Col, Tab } from 'react-bootstrap';

import InlineLink from './InlineLink';

const DetailsWrapper = styled(Col)`
    padding-top: 7px;
    padding-left: 30px;

    h2 {
        font-size: 20px;
        color: ${props => {
            return props.theme.blueWhite;
        }};
        font-weight: ${props => {
            return props.theme.semibold;
        }};

        .company__at {
            color: ${props => {
                return props.theme.whiteYellow;
            }};

            .company__name {
                color: ${props => {
                    return props.theme.whiteYellow;
                }};
                position: relative;
                display: inline-block;

                &:hover {
                    color: ${props => {
                        return props.theme.whiteYellow;
                    }};
                }
            }
        }
    }

    h5 {
        font-size: 14px;
        margin-bottom: 30px;
        font-weight: normal;
        letter-spacing: 0.5px;
        font-family: ${props => {
            return props.theme.sfmono;
        }};
    }

    ul {
        font-size: 16px;

        li {
            position: relative;
            padding-left: 30px;
            margin-bottom: 10px;
            color: ${props => {
                return props.theme.lightBlue;
            }};

            &::before {
                content: '▹';
                position: absolute;
                left: 0px;
                color: ${props => {
                    return props.theme.whiteYellow;
                }};
                line-height: 20px;
            }

            .list__item--link {
                color: ${props => {
                    return props.theme.whiteYellow;
                }};
            }
        }
    }

    .disabled {
        pointer-events: none !important;
    }
`;

const DetailsHolder = () => {
    return (
        <DetailsWrapper sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="1">
                    <h2>
                        Full Stack Developer
                        <span className="company__at">
                            &nbsp;@&nbsp;
                            <InlineLink
                                url="/"
                                title="theBlueDoor"
                                text="Visit"
                                customClass="disabled company__name"
                                placement="top"
                            />
                        </span>
                    </h2>
                    <h5>Feb 2019 - Present</h5>
                    <ul>
                        <li>Develop and maintain code for in-house and client websites</li>
                        <li>
                            Writes modern, performant, maintainable code for a diverse array of clients and internal
                            projects
                        </li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                    <h2>Front-End Developer</h2>
                    <h5>Jan 2018 - Feb 2019</h5>
                    <ul>
                        <li>Developed static websites for clients and internal projects.</li>
                        <li>Occasionally contributed to Open-Source community.</li>
                        <li>Wrote modern, performant, maintainable code for internal projects</li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                    <h2>Designer</h2>
                    <h5>Aug 2018 - Present</h5>
                    <ul>
                        <li>Designed various Logos, Posters, & UI for the clients</li>
                        <li>
                            Includes works for in-house and clients for various occations. Some of the works were
                            featured by the community.
                        </li>
                        <li>
                            Check out some designs at{' '}
                            <InlineLink
                                url="https://www.behance.net/abhijithvijayan"
                                title="Behance"
                                text="View Designs"
                                customClass="list__item--link"
                            />
                        </li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                    <h2>
                        Tech Lead
                        <span className="company__at">
                            &nbsp;@&nbsp;
                            <InlineLink
                                url="https://github.com/ceadoor"
                                title="tracecea"
                                text="Visit"
                                customClass="company__name"
                                placement="top"
                            />
                        </span>
                    </h2>
                    <h5>Aug 2016 - Present</h5>
                    <ul>
                        <li>Lead of the Technical Activities conducted by TRACE CEA</li>
                        <li>Developed and Contributed to the projects hosted for the student community</li>
                        <li>
                            Collaborated with a small team of designers and developers to spearhead new designs and
                            projects for student-led organisation at{' '}
                            <InlineLink
                                url="https://github.com/ceadoor"
                                title="ceadoor"
                                text="Visit"
                                customClass="list__item--link"
                            />
                        </li>
                    </ul>
                </Tab.Pane>
            </Tab.Content>
        </DetailsWrapper>
    );
};

export default DetailsHolder;
