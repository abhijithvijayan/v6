import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import SidebarContent from './SidebarContent';

class VerticalHeader extends Component {
    toggleBodyScroll = status => {
        if (status) {
            document.body.classList.add('blur');
            disableBodyScroll(null);
        } else {
            if (typeof window !== 'undefined') {
                document.body.classList.remove('blur');
            }
            clearAllBodyScrollLocks();
        }
    };

    renderSiderbar = () => {
        const { isSidebarOpen } = this.props;
        this.toggleBodyScroll(isSidebarOpen);
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
                contentClassName="vertical__header--content"
                overlayClassName="vertical__header--overlay"
                styles={{
                    root: {},
                    sidebar: {
                        background: 'white',
                        color: 'black',
                        width: '100%',
                    },
                    content: {},
                    overlay: {},
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
