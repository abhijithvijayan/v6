import React from 'react';

import OtherProjectsHeader from './OtherProjectsHeader';
import OtherProjectsWrapper from './OtherProjectsWrapper';
import MoreProjectsButton from './MoreProjectsButton';

const OtherProjects = () => {
    return (
        <section id="otherProjects">
            <div className="wrapper">
                <OtherProjectsHeader />
                <OtherProjectsWrapper />
                <MoreProjectsButton />
            </div>
        </section>
    );
};

export default OtherProjects;
