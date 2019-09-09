import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

const Wrapper = styled(Row)`
    margin-bottom: 100px;

    @media screen and (max-width: 37.5em) {
        margin-bottom: 50px;
    }
`;

const ProjectItemWrapper = ({ children }) => {
    return <Wrapper className="wow fadeInUp">{children}</Wrapper>;
};

export default ProjectItemWrapper;
