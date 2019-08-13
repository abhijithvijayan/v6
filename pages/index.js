/* eslint-disable global-require */
import React, { Component } from 'react';
import { frontMatter, importAll } from '../utils';

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
        const types = ['home', 'about', 'experience', 'featured', 'projects', 'contact'];

        const homeContent = await importAll(require.context('../markdown/home/', true, /\.md$/))
            .reverse() // ordering them from most recent to oldest
            .map(frontMatter);

        const aboutContent = await importAll(require.context('../markdown/about/', true, /\.md$/))
            .reverse()
            .map(frontMatter);

        const experienceContent = await importAll(require.context('../markdown/experience/', true, /\.md$/))
            .reverse()
            .map(frontMatter);

        const featuredContent = await importAll(require.context('../markdown/featured/', true, /\.md$/))
            .reverse()
            .map(frontMatter);

        const projectsContent = await importAll(require.context('../markdown/projects/', true, /\.md$/))
            .reverse()
            .map(frontMatter);

        const contactContent = await importAll(require.context('../markdown/contact/', true, /\.md$/))
            .reverse()
            .map(frontMatter);

        return {
            content: { homeContent, aboutContent, experienceContent, featuredContent, projectsContent, contactContent },
        };
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
