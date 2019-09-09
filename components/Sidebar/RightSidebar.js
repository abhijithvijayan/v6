import React from 'react';
import styled from 'styled-components';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { email } from '../../config';

const EmailWrapper = styled.div`
    font-family: ${({ theme }) => {
        return theme.sfmono;
    }};
    font-weight: ${({ theme }) => {
        return theme.medium;
    }};
    width: 40px;
    position: fixed;
    bottom: 0px;
    right: 40px;

    div {
        width: 100%;
        margin: 0px auto;
        position: relative;
        text-align: center;

        &::after {
            content: '';
            display: block;
            width: 1px;
            height: 90px;
            background-color: ${({ theme }) => {
                return theme.lightBlue;
            }};
            margin: 0px auto;
        }

        a {
            writing-mode: vertical-rl;
            font-size: 13px;
            letter-spacing: 2px;
            margin: 20px auto;
            padding: 10px;
        }
    }
`;

const RightSidebar = () => {
    return (
        <EmailWrapper className="d-md-block d-none animated fadeIn delay-1s">
            <div>
                <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-right">Email</Tooltip>}>
                    <a className="fade-link" href={`mailto:${email}`}>
                        {email}
                    </a>
                </OverlayTrigger>
            </div>
        </EmailWrapper>
    );
};

export default RightSidebar;
