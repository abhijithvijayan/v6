import React from 'react';
import styled from 'styled-components';

const FooterText = styled.p`
    margin: 5px 0px 3px;

    a {
        color: ${props => {
            return props.theme.skyBlue;
        }};
        font-size: 13px;
        font-family: ${props => {
            return props.theme.sfmono;
        }};
    }
`;

const RepoLink = () => {
    return (
        <FooterText>
            <a
                className="fade-link"
                href="https://github.com/abhijithvijayan/abhijithvijayan.in"
                target="_blank"
                rel="nofollow noopener noreferrer"
            >
                Developed by abhijithvijayan
            </a>
        </FooterText>
    );
};

export default RepoLink;
