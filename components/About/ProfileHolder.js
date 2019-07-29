import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

const ProfileWrapper = styled(Col)`
    @media screen and (max-width: ${props => {
            return props.theme.screenXxsMax;
        }}) {
        width: 70%;
    }
    @media screen and (max-width: ${props => {
            return props.theme.screenSmMin;
        }}) {
        width: 80%;
        margin: 60px auto 0px;
    }

    position: relative;

    &:hover .image__holder::after {
        top: 16px;
        left: 16px;
    }

    .image__holder {
        position: relative;

        &::after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
            border-radius: 2px;
            transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
            top: 20px;
            left: 20px;
            border-width: 2px;
            border-style: solid;
            border-color: rgb(100, 255, 218);
            border-image: initial;
        }

        .profile__picture {
            transition: opacity 0.5s ease 0s;
        }
    }
`;

const ProfileHolder = () => {
    return (
        <ProfileWrapper md={4}>
            <div className="image__holder">
                <picture>
                    <img alt="profile" className="img-fluid profile__picture" src="/static/images/profile.jpg" />
                </picture>
            </div>
        </ProfileWrapper>
    );
};

export default ProfileHolder;
