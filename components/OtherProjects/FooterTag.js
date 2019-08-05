import React from 'react';
import styled from 'styled-components';

const TagItem = styled.li`
    font-size: 12px;
    line-height: 1.75;
    margin-right: 15px;
    color: ${props => {
        return props.theme.lightBlue;
    }};
    font-family: ${props => {
        return props.theme.sfmono;
    }};
`;

const FooterTag = props => {
    return <TagItem>{props.tag}</TagItem>;
};

export default FooterTag;
