import React from 'react';
import styled from 'styled-components';

import { socialMedia } from '../../config';

import SocialListItem from './SocialListItem';

const SocialIconsWrapper = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 40px;
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;

        li:last-child {
            a {
                margin-bottom: 20px;
            }
        }
    }
`;

const LeftSidebar = () => {
    return (
        <SocialIconsWrapper className="d-md-block d-none animated fadeIn delay-1s">
            <ul>
                {socialMedia.map(item => {
                    const { icon, url, name } = item;
                    return <SocialListItem title={name} icon={icon} href={url} key={name} />;
                })}
            </ul>
        </SocialIconsWrapper>
    );
};

export default LeftSidebar;
