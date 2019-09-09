import React from 'react';
import styled from 'styled-components';
import { Row, Tab } from 'react-bootstrap';

const ContentWrapper = styled(Row)`
    padding-left: 15px;
`;

const ExperienceContentHolder = ({ children }) => {
    return (
        <Tab.Container id="exp" defaultActiveKey="1">
            <ContentWrapper className="wow fadeInUp">{children}</ContentWrapper>
        </Tab.Container>
    );
};

export default ExperienceContentHolder;
