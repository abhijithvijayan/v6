import React from 'react';

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

const HomePage = () => {
    return (
        <Layout>
            <Header />
            <Sidebar />
            <main id="content__holder" className="container">
                <Home />
                <About />
                <Experience />
                <Projects />
                <OtherProjects />
                <Contact />
                <Footer />
            </main>
        </Layout>
    );
};

export default HomePage;
