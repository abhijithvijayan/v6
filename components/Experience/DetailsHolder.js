import React from 'react';
import styled from 'styled-components';
import { Col, Tab } from 'react-bootstrap';

const DetailsWrapper = styled(Col)`
    padding-top: 7px;
    padding-left: 30px;
`;

const DetailsHolder = () => {
    return (
        <DetailsWrapper sm={9}>
            <Tab.Content>
                {/* show active classNames */}
                <Tab.Pane eventKey="first">
                    <h2 className="exp__title">
                        Full Stack Developer
                        <span className="company__at">
                            &nbsp;@&nbsp;
                            <a href="/" title="theBlueDoor" className="company__name" target="_blank" rel="noopener">
                                theBlueDoor
                            </a>
                        </span>
                    </h2>
                    <h5 className="exp__timeline">Mar 2019 - Present</h5>
                    <ul className="exp__list">
                        <li className="exp__list--item">Develop and maintain code for in-house and client websites</li>
                        <li className="exp__list--item">
                            Writes modern, performant, maintainable code for a diverse array of clients and internal
                            projects
                        </li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <h2 className="exp__title">Front-End Developer</h2>
                    <h5 className="exp__timeline">Jan 2018 - Feb 2019</h5>
                    <ul className="exp__list">
                        <li className="exp__list--item">
                            Developed static websites for clients and internal projects.
                        </li>
                        <li className="exp__list--item">Occasionally contributed to Open-Source community.</li>
                        <li className="exp__list--item">
                            Wrote modern, performant, maintainable code for internal projects
                        </li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <h2 className="exp__title">Designer</h2>
                    <h5 className="exp__timeline">Aug 2018 - Present</h5>
                    <ul className="exp__list">
                        <li className="exp__list--item">Designed various Logos, Posters, & UI for the clients</li>
                        <li className="exp__list--item">
                            Includes works for in-house and clients for various occations. Some of the works were
                            featured by the community.
                        </li>
                        <li className="exp__list--item">
                            Check out some designs at{' '}
                            <a
                                className="exp__list--itemLink"
                                title="View"
                                href="https://www.behance.net/abhijithvijayan"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Behance
                            </a>
                        </li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="forth">
                    <h2 className="exp__title">
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
                                rel="noopener noreferrer"
                            >
                                tracecea
                            </a>
                        </span>
                    </h2>
                    <h5 className="exp__timeline">Aug 2016 - Present</h5>
                    <ul className="exp__list">
                        <li className="exp__list--item">Lead of the Technical Activities conducted by TRACE CEA</li>
                        <li className="exp__list--item">
                            Developed and Contributed to the projects hosted for the student community
                        </li>
                        <li className="exp__list--item">
                            Collaborated with a small team of designers and developers to spearhead new designs and
                            projects for student-led organisation at
                            <a
                                className="exp__list--itemLink"
                                title="Visit"
                                href="https://github.com/ceadoor"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                target="_blank"
                                rel="noopener noreferrer"
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
