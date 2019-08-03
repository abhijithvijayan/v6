import React from 'react';
import styled from 'styled-components';
import { Col, Tab } from 'react-bootstrap';

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

            .list__item--Link {
                color: ${props => {
                    return props.theme.whiteYellow;
                }};
            }
        }
    }
`;

const DetailsHolder = () => {
    return (
        <DetailsWrapper sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <h2>
                        Full Stack Developer
                        <span className="company__at">
                            &nbsp;@&nbsp;
                            <a href="/" title="theBlueDoor" className="company__name" target="_blank" rel="noopener">
                                theBlueDoor
                            </a>
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
                <Tab.Pane eventKey="second">
                    <h2>Front-End Developer</h2>
                    <h5>Jan 2018 - Feb 2019</h5>
                    <ul>
                        <li>Developed static websites for clients and internal projects.</li>
                        <li>Occasionally contributed to Open-Source community.</li>
                        <li>Wrote modern, performant, maintainable code for internal projects</li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
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
                            <a
                                className="list__item--Link"
                                title="View"
                                href="https://www.behance.net/abhijithvijayan"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                Behance
                            </a>
                        </li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="forth">
                    <h2>
                        Tech Lead
                        <span className="company__at">
                            &nbsp;@&nbsp;
                            <a
                                href="https://github.com/ceadoor"
                                title="Visit"
                                className="company__name"
                                data-toggle="tooltip"
                                data-placement="top"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                tracecea
                            </a>
                        </span>
                    </h2>
                    <h5>Aug 2016 - Present</h5>
                    <ul>
                        <li>Lead of the Technical Activities conducted by TRACE CEA</li>
                        <li>Developed and Contributed to the projects hosted for the student community</li>
                        <li>
                            Collaborated with a small team of designers and developers to spearhead new designs and
                            projects for student-led organisation at{' '}
                            <a
                                className="list__item--Link"
                                title="Visit"
                                href="https://github.com/ceadoor"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                            >
                                ceadoor
                            </a>
                        </li>
                    </ul>
                </Tab.Pane>
            </Tab.Content>
        </DetailsWrapper>
    );
};

export default DetailsHolder;
