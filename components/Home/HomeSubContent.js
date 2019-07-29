import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

const SubContentWrapper = styled(Row)`
    margin-top: 25px;
    p {
        color: ${props => {
            return props.theme.skyBlue;
        }};
        font-size: 17px;
        line-height: 1.4;
        margin: 0px 0px 15px;
        strong {
            color: ${props => {
                return props.theme.whiteYellow;
            }};
        }
    }
`;

const HomeSubContent = () => {
    return (
        <SubContentWrapper>
            <Col md={6}>
                <p>
                    I'm a software engineering student based in Kerala, India specializing in developing exceptional,
                    high quality webapps and tools. Currently on the
                    <strong>6th Semester</strong> of
                    <strong>B.Tech Degree.</strong>
                </p>
            </Col>
        </SubContentWrapper>
    );
};

export default HomeSubContent;
