import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
    color: ${props => {
        return props.theme.whiteYellow;
    }};
    font-size: 40px;
`;

const HeaderIcon = () => {
    return (
        <IconWrapper>
            <i className="far fa-folder-open"></i>
        </IconWrapper>
    );
};

export default HeaderIcon;
