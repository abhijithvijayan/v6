/* eslint-disable global-require */
import React, { Component } from 'react';

import { frontMatter, importAll, withParsedHtml, withNoBody, trimKeys, sortByDate } from '../utils';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Home from '../components/Home';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import OtherProjects from '../components/OtherProjects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class HomePage extends Component {
    static async getInitialProps({ req }) {
        const homeContent = await importAll(require.context('../markdown/home/', true, /\.md$/))
            .map(frontMatter)
            .map(withParsedHtml)
            .map(trimKeys)
            .map(withNoBody);

        const aboutContent = await importAll(require.context('../markdown/about/', true, /\.md$/))
            .map(frontMatter)
            .map(withParsedHtml)
            .map(trimKeys)
            .map(withNoBody);

        const experienceContent = await importAll(require.context('../markdown/experience/', true, /\.md$/))
            .map(frontMatter)
            .map(withParsedHtml)
            .map(trimKeys)
            .map(withNoBody);

        const featuredContent = await importAll(require.context('../markdown/featured/', true, /\.md$/))
            .map(frontMatter)
            .map(withParsedHtml)
            .map(trimKeys)
            .map(withNoBody);

        const projectsContent = await importAll(require.context('../markdown/projects/', true, /\.md$/))
            .map(frontMatter)
            .map(withParsedHtml)
            .map(trimKeys)
            .map(withNoBody);

        const contactContent = await importAll(require.context('../markdown/contact/', true, /\.md$/))
            .map(frontMatter)
            .map(withParsedHtml)
            .map(trimKeys)
            .map(withNoBody);

        return {
            content: {
                homeContent,
                aboutContent,
                experienceContent: sortByDate(experienceContent),
                featuredContent: sortByDate(featuredContent),
                projectsContent: sortByDate(projectsContent),
                contactContent,
            },
        };
    }

    componentDidMount() {
        // activate wow.js
        if (typeof window !== 'undefined') {
            const WOW = require('wowjs');

            const wow = new WOW.WOW({
                live: false,
            });
            wow.init();
        }
    }

    render() {
        const {
            content: { homeContent, aboutContent, experienceContent, featuredContent, projectsContent, contactContent },
        } = this.props;
        return (
            <Layout>
                <Header />
                <Sidebar />
                <main id="content__holder" className="container">
                    <Home content={homeContent} />
                    <About content={aboutContent} />
                    <Experience content={experienceContent} />
                    <Projects content={featuredContent} />
                    <OtherProjects content={projectsContent} />
                    <Contact content={contactContent} />
                </main>
                <Footer />
            </Layout>
        );
    }
}

export default HomePage;
