import React from 'react';
import styled from 'styled-components';

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
                <ListIcon title="Github" url="https://github.com/abhijithvijayan" icon="fab fa-github" />
                <ListIcon
                    title="LinkedIn"
                    url="https://in.linkedin.com/in/abhijith-vijayan"
                    icon="fab fa-linkedin-in"
                />
                <ListIcon
                    title="Stack Overflow"
                    url="https://stackoverflow.com/users/9387542/abhijithvijayan?tab=profile"
                    icon="fab fa-stack-overflow"
                />
                <ListIcon title="Behance" url="https://www.behance.net/abhijithvijayan" icon="fab fa-behance-square" />
                <ListIcon title="Medium" url="https://medium.com/@abhijithvijayan" icon="fab fa-medium-m" />
                <ListIcon title="Twitter" url="https://twitter.com/_abhijithv" icon="fab fa-twitter" />
            </ul>
        </IconsWrapper>
    );
};

export default SocialIcons;
