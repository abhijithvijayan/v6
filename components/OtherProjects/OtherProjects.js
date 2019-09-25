import React, { Component } from 'react';

import { GRID_LIMIT } from '../../config';

import OtherProjectsHeader from './OtherProjectsHeader';
import OtherProjectsWrapper from './OtherProjectsWrapper';
import MoreProjectsButton from './MoreProjectsButton';

class OtherProjects extends Component {
    constructor(props) {
        super(props);
        this.state = { hasOtherProjectsExpanded: false };
    }

    expandProjects = status => {
        this.setState({ hasOtherProjectsExpanded: status });
    };

    render() {
        const { content } = this.props;
        if (!content.length) {
            return null;
        }
        const { hasOtherProjectsExpanded } = this.state;
        const shownGrid = content.slice(0, GRID_LIMIT);
        const projectsToShow = hasOtherProjectsExpanded ? content : shownGrid;

        return (
            <section id="otherProjects">
                <div className="wrapper">
                    <OtherProjectsHeader />
                    <OtherProjectsWrapper projects={projectsToShow} itemsHidden={!hasOtherProjectsExpanded} />
                    <MoreProjectsButton expandProjects={this.expandProjects} hasExpanded={hasOtherProjectsExpanded} />
                </div>
            </section>
        );
    }
}

export default OtherProjects;
