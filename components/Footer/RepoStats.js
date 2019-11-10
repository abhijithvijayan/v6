/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { repoAPIendpoint } from '../../config';
import InsertIcon from '../Icons/InsertIcon';

const StatGroup = styled.span`
    display: inline-flex;
    align-items: center;
    margin: 0px 7px;
    svg {
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
        color: ${({ theme }) => {
            return theme.skyBlue;
        }};
        font-size: 13px;
        margin-right: 5px;
    }
`;

const RepoStats = () => {
    const [repoStats, updateRepoStats] = useState({ forksCount: 0, stargazersCount: 0 });

    useEffect(() => {
        const fetchRepoInfo = async () => {
            const {
                data: { forks_count, stargazers_count },
            } = await axios({
                method: 'GET',
                url: repoAPIendpoint,
            });

            updateRepoStats({ forksCount: forks_count, stargazersCount: stargazers_count });
        };

        fetchRepoInfo();
    }, []);

    const { forksCount, stargazersCount } = repoStats;

    return (
        <div style={{ marginTop: '10px' }}>
            <StatGroup>
                <InsertIcon icon="star" />
                <span>{stargazersCount}</span>
            </StatGroup>
            <StatGroup>
                <InsertIcon icon="fork" />
                <span>{forksCount}</span>
            </StatGroup>
        </div>
    );
};

export default RepoStats;
