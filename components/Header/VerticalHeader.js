import React, { Component } from 'react';
import Sidebar from 'react-sidebar';

import SidebarContent from './SidebarContent';

class VerticalHeader extends Component {
    render() {
        const { isSidebarOpen } = this.props;
        return (
            <Sidebar
                sidebar={<SidebarContent />}
                open={isSidebarOpen}
                pullRight
                touch={false}
                onSetOpen={() => {
                    return this.props.toggleSidebar(!isSidebarOpen);
                }}
                rootClassName="vertical__header"
                sidebarClassName="vertical__header--menu"
                styles={{ sidebar: { background: 'white', color: 'black', width: '100%' } }}
            >
                <div />
            </Sidebar>
        );
    }
}

export default VerticalHeader;
