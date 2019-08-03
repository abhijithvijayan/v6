import React from 'react';
import styled from 'styled-components';

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
        <SocialIconsWrapper className="d-md-block d-none">
            <ul>
                <SocialListItem title="Github" icon="fab fa-github" href="https://github.com/abhijithvijayan" />
                <SocialListItem
                    title="LinkedIn"
                    icon="fab fa-linkedin-in"
                    href="https://in.linkedin.com/in/abhijith-vijayan/"
                />
                <SocialListItem
                    title="Stack Overflow"
                    icon="fab fa-stack-overflow"
                    href="https://stackoverflow.com/users/9387542/abhijithvijayan?tab=profile"
                />
                <SocialListItem
                    title="Behance"
                    icon="fab fa-behance-square"
                    href="https://www.behance.net/abhijithvijayan"
                />
                <SocialListItem title="Medium" icon="fab fa-medium-m" href="https://medium.com/@abhijithvijayan" />
                <SocialListItem title="Twitter" icon="fab fa-twitter" href="https://twitter.com/_abhijithv" />
            </ul>
        </SocialIconsWrapper>
    );
};

export default LeftSidebar;
