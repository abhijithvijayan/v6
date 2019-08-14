import React from 'react';
import styled from 'styled-components';
import { Col, Image } from 'react-bootstrap';

const ImageWrapper = styled(Col)`
    z-index: 1;
    border-radius: 2px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
`;

const StyledImage = styled(Image)`
    position: relative;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);
    border-radius: 3px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    &:hover {
        box-shadow: 0 20px 70px -10px ${({ theme }) => {
                return theme.shadow;
            }} 0 50px 100px 0 ${({ theme }) => {
                return theme.shadow;
            }};
        filter: none;
    }
`;

const ImageHolder = props => {
    const { image, title } = props;
    return (
        <ImageWrapper md={7} className="d-none d-sm-block">
            <picture>
                <StyledImage src={image} alt={title} fluid />
            </picture>
        </ImageWrapper>
    );
};

export default ImageHolder;
