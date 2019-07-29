import React, { Component } from 'react';
import styled from 'styled-components';

import Loader from '../Loader';

const Wrapper = styled.main`
    position: relative;
    min-height: 100vh;
`;

const ContentWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
`;

class Layout extends Component {
    componentDidMount() {
        // hide page loader
    }

    render() {
        // Use State
        const isPageLoading = false;
        const { children } = this.props;
        const renderContent = isPageLoading ? <Loader /> : children;
        return (
            <Wrapper>
                <ContentWrapper>{renderContent}</ContentWrapper>
            </Wrapper>
        );
    }
}

export default Layout;
