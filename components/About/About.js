import React from 'react';

import AboutHeader from './AboutHeader';
import AboutContentHolder from './AboutContentHolder';

const About = ({ content }) => {
    if (!content.length) {
        return null;
    }
    const {
        attributes: { title },
    } = content[0];
    return (
        <section id="about">
            <div style={{ maxWidth: '1000px', position: 'relative' }} className="wrapper">
                <AboutHeader title={title} />
                <AboutContentHolder data={content[0]} />
            </div>
        </section>
    );
};

export default About;
