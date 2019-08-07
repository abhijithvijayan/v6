/* eslint-disable camelcase */
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

class RepoStats extends Component {
    constructor(props) {
        super(props);
        this.state = { forksCount: 0, stargazersCount: 0 };
    }

    async componentDidMount() {
        const {
            data: { forks_count, stargazers_count },
        } = await axios({
            method: 'GET',
            url: 'https://api.github.com/repos/abhijithvijayan/abhijithvijayan.in',
        });
        this.setState({ forksCount: forks_count, stargazersCount: stargazers_count });
    }

    render() {
        const { forksCount, stargazersCount } = this.state;
        return (
            <RepoStatsWrapper>
                <StatGroup>
                    <i className="fas fa-star"></i>
                    <span>{stargazersCount}</span>
                </StatGroup>
                <StatGroup>
                    <i className="fas fa-code-branch"></i>
                    <span>{forksCount}</span>
                </StatGroup>
            </RepoStatsWrapper>
        );
    }
}

export default RepoStats;
