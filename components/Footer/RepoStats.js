import React from 'react';
import styled from 'styled-components';

const RepoStatsWrapper = styled.div`
    margin-top: 10px;
`;

const StatGroup = styled.span`
    display: inline-flex;
    align-items: center;
    margin: 0px 7px;
    i {
        color: ${props => {
            return props.theme.skyBlue;
        }};
        font-size: 13px;
        margin-right: 5px;
    }
`;

const RepoStats = () => {
    return (
        <RepoStatsWrapper>
            <StatGroup>
                <i className="fas fa-star"></i>
                <span>1</span>
            </StatGroup>
            <StatGroup>
                <i className="fas fa-code-branch"></i>
                <span>1</span>
            </StatGroup>
        </RepoStatsWrapper>
    );
};

export default RepoStats;
