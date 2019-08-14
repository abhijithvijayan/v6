import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

const DescriptionWrapper = styled.div`
    position: relative;
    z-index: 2;
    border-radius: 3px;
    background-color: ${({ theme }) => {
        return theme.darkPurple;
    }};
    box-shadow: rgba(
            $color:
                ${({ theme }) => {
                    return theme.darkPurple;
                }},
            $alpha: 0.4
        )
        8px 10px 10px;
    padding: 25px;
    min-width: 500px;
    color: ${({ theme }) => {
        return theme.lightBlue;
    }};

    @media screen and (max-width: 37.5em) {
        min-width: 100px;
    }

    p {
        font-size: 16px;
        margin: 0px;
    }
`;

const TitleDescription = props => {
    const { customClass = '', text = '' } = props;
    return <DescriptionWrapper className={customClass}>{parse(text)}</DescriptionWrapper>;
};

export default TitleDescription;
