import React from 'react';
import styled from 'styled-components';

import { repoURL } from '../../config';

import FooterText from './FooterText';
import RepoStats from './RepoStats';

const FooterInfoWrapper = styled.div`
    margin: 5px 0px 3px;

    a {
        color: ${({ theme }) => {
            return theme.skyBlue;
        }};
        font-size: 13px;
        font-family: ${({ theme }) => {
            return theme.sfmono;
        }};
        &:hover span svg {
            color: ${({ theme }) => {
                return theme.whiteYellow;
            }} !important;
        }
    }
`;

const RepoLink = () => {
    return (
        <FooterInfoWrapper>
            <a className="fade-link" href={repoURL} target="_blank" rel="nofollow noopener noreferrer">
                <FooterText />
                <RepoStats />
            </a>
        </FooterInfoWrapper>
    );
};

export default RepoLink;
