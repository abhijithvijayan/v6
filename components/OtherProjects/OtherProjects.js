import React, { Component } from 'react';

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
        const { hasOtherProjectsExpanded } = this.state;
        return (
            <section id="otherProjects">
                <div className="wrapper">
                    <OtherProjectsHeader />
                    <OtherProjectsWrapper hasExpanded={hasOtherProjectsExpanded} />
                    <MoreProjectsButton expandProjects={this.expandProjects} hasExpanded={hasOtherProjectsExpanded} />
                </div>
            </section>
        );
    }
}

export default OtherProjects;
