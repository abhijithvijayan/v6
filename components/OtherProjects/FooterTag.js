import React from 'react';
import styled from 'styled-components';

const TagItem = styled.li`
    font-size: 12px;
    line-height: 1.75;
    margin-right: 15px;
    color: ${({ theme }) => {
        return theme.lightBlue;
    }};
    font-family: ${({ theme }) => {
        return theme.sfmono;
    }};
`;

const FooterTag = props => {
    return <TagItem>{props.tag}</TagItem>;
};

export default FooterTag;
