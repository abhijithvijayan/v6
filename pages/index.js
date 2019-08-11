/* eslint-disable global-require */
import React, { Component } from 'react';
import frontMatter from '../utils/frontMatter';
import importAll from '../utils/importAll';

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
        const homeContent = importAll(require.context('../markdown/home/', true, /\.md$/))
            .reverse() // ordering them from most recent to oldest
            .map(frontMatter);

        // ToDo: return as key-pair
        return { content: homeContent };
    }

    render() {
        const { content } = this.props;
        return (
            <Layout>
                <Header />
                <Sidebar />
                <main id="content__holder" className="container">
                    <Home content={content} />
                    <About />
                    <Experience />
                    <Projects />
                    <OtherProjects />
                    <Contact />
                </main>
                <Footer />
            </Layout>
        );
    }
}

export default HomePage;
