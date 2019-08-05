import React from 'react';
import styled from 'styled-components';

import FooterTag from './FooterTag';

const FooterWrapper = styled.div`
    ul {
        flex-grow: 1;
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        margin-top: 20px;
    }
`;

const CardFooter = () => {
    return (
        <FooterWrapper>
            <ul>
                <FooterTag tag="AR" />
                <FooterTag tag="Unity" />
                <FooterTag tag="Vuforia" />
                <FooterTag tag="Android App" />
            </ul>
        </FooterWrapper>
    );
};

export default CardFooter;
