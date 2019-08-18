import React from 'react';
import styled from 'styled-components';

import { socialMedia } from '../../config';

import ListIcon from './ListIcon';

const IconsWrapper = styled.div`
    color: ${({ theme }) => {
        return theme.lightBlue;
    }};
    width: 100%;
    max-width: 270px;
    margin: 0px auto 10px;

    @media screen and (min-width: 768px) {
        display: none !important;
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const SocialIcons = () => {
    return (
        <IconsWrapper>
            <ul>
                {socialMedia.map(item => {
                    const { icon, url, name } = item;
                    return <ListIcon title={name} icon={icon} href={url} key={name} />;
                })}
            </ul>
        </IconsWrapper>
    );
};

export default SocialIcons;
