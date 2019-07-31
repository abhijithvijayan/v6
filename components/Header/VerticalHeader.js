import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from 'react-sidebar';

import SidebarContent from './SidebarContent';

const SidebarWrapper = styled(Sidebar)``;

class VerticalHeader extends Component {
    toggleSidebar = toggle => {
        console.log(toggle);
    };

    render() {
        return (
            <SidebarWrapper
                sidebar={<SidebarContent />}
                open
                pullRight
                touch={false}
                onSetOpen={this.toggleSidebar}
                rootClassName="vertical__header"
                sidebarClassName="vertical__header--menu"
                styles={{ sidebar: { background: 'white', color: 'black', width: '100%' } }}
            >
                <div />
            </SidebarWrapper>
        );
    }
}

export default VerticalHeader;
