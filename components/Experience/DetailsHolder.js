import React from 'react';
import styled from 'styled-components';
import { Col, Tab } from 'react-bootstrap';

const DetailsWrapper = styled(Col)`
    padding-top: 7px;
    padding-left: 30px;
`;

const DetailsHolder = ({ children }) => {
    return (
        <DetailsWrapper sm={9}>
            <Tab.Content>{children}</Tab.Content>
        </DetailsWrapper>
    );
};

export default DetailsHolder;
