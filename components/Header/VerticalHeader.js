import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import SidebarContent from './SidebarContent';

const isServer = typeof window === 'undefined';

class VerticalHeader extends Component {
    toggleBodyScroll = status => {
        if (status) {
            document.body.classList.add('blur');
            disableBodyScroll(null);
        } else {
            if (!isServer) {
                document.body.classList.remove('blur');
            }
            clearAllBodyScrollLocks();
        }
    };

    renderSidebarContent = () => {
        return <SidebarContent toggleSidebar={this.props.toggleSidebar} isSidebarOpen={this.props.isSidebarOpen} />;
    };

    renderSiderbar = () => {
        const { isSidebarOpen } = this.props;
        this.toggleBodyScroll(isSidebarOpen);
        return (
            <Sidebar
                sidebar={this.renderSidebarContent()}
                open={isSidebarOpen}
                pullRight
                touch={false}
                onSetOpen={() => {
                    return this.props.toggleSidebar(!isSidebarOpen);
                }}
                rootClassName="vertical__header"
                sidebarClassName="vertical__header--menu"
                contentClassName="vertical__header--content"
                overlayClassName="vertical__header--overlay"
                styles={{
                    root: {
                        pointerEvents: 'none',
                    },
                    sidebar: {
                        pointerEvents: 'all',
                        background: 'white',
                        color: 'black',
                        width: '100%',
                    },
                    content: {},
                    overlay: {
                        pointerEvents: 'all',
                    },
                }}
            >
                <div />
            </Sidebar>
        );
    };

    render() {
        return this.renderSiderbar();
    }
}

export default VerticalHeader;
