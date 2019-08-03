import React from 'react';
import styled from 'styled-components';

const SocialListItemWrapper = styled.li`
    position: relative;

    &:last-child::after {
        content: '';
        display: block;
        width: 1px;
        height: 90px;
        background-color: ${props => {
            return props.theme.lightBlue;
        }};
        margin: 0px auto;
    }

    a {
        display: inline-block;
        padding: 8px;
        font-size: 19px;
    }
`;

const SocialListItem = props => {
    const { icon, ...other } = props;
    return (
        <SocialListItemWrapper>
            <a
                {...other}
                className="fade-link"
                data-toggle="tooltip"
                data-placement="right"
                target="_blank"
                rel="nofollow noopener noreferrer"
            >
                <i className={icon}></i>
            </a>
        </SocialListItemWrapper>
    );
};

export default SocialListItem;
