import React from 'react';
import styled from 'styled-components';

const TitleLink = styled.a`
    color: ${props => {
        return props.theme.navyBlue;
    }};
    font-family: ${props => {
        return props.theme.sfmono;
    }};
    font-weight: ${props => {
        return props.theme.medium;
    }};
    letter-spacing: 0.5px;
    font-size: 14px;
    padding: 0px 18px 2px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    border-left: 2px solid
        ${props => {
            return props.theme.blueLight;
        }};
    white-space: nowrap;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 37.5em) {
        border-bottom: 2px solid
            ${props => {
                return props.theme.blueLight;
            }};
        border-left: 0px;
        min-width: 120px;
    }

    &:hover {
        background-color: ${props => {
            return props.theme.lightPurple;
        }};
        color: ${props => {
            return props.theme.whiteYellow;
        }} !important;
    }
`;

const TitleButton = props => {
    const { title, classNames = '', ...other } = props;
    return (
        <TitleLink {...other} className={`${classNames} nav-link`} data-toggle="tab" role="tab">
            {title}
        </TitleLink>
    );
};

export default TitleButton;
