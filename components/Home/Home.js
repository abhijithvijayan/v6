import React from 'react';
import styled from 'styled-components';

import HomeMainContent from './HomeMainContent';
import HomeSubContent from './HomeSubContent';
import GetInTouch from './GetInTouch';

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    margin: 0px auto;

    @media screen and (max-width: ${props => {
            return props.theme.screenSmMin;
        }}) {
        padding-top: 150px;
    }
`;

const Home = () => {
    return (
        <HomeWrapper className="wrapper">
            <HomeMainContent />
            <HomeSubContent />
            <GetInTouch />
        </HomeWrapper>
    );
};

export default Home;
