import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.span`
    h2 {
        font-size: 50px;
        margin: 0px 0px 30px;
        font-family: ${props => {
            return props.theme.calibre;
        }};
        font-weight: ${props => {
            return props.theme.semibold;
        }};
        color: ${props => {
            return props.theme.headWhite;
        }};
    }

    div {
        p {
            margin: 0px 0px 15px;
            font-size: 17px;
            line-height: 1.5;
            font-weight: medium;
            color: ${props => {
                return props.theme.skyBlue;
            }};
        }
    }

    a {
        margin-top: 50px;
    }
`;

const ContactContentHolder = () => {
    return (
        <ContentWrapper>
            <h2>Get In Touch</h2>
            <div>
                <p>
                    My inbox is always open whether for a potential project or just to say hi, I'll try my best to
                    answer your email!
                </p>
            </div>
            <a href="mailto:iam@abhijithvijayan.in" target="_blank" rel="noopener noreferrer" className="button__main">
                Say Hello
            </a>
        </ContentWrapper>
    );
};

export default ContactContentHolder;
