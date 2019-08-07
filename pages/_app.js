import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';

/* Common SASS styles */
import 'normalize.css/normalize.css';
import '../styles/main.scss';

// eslint-disable-next-line import/no-webpack-loader-syntax
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/base/_variables.scss');
// Require sass variables using sass-extract-loader and specify the plugin

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Head>
                    <title>Abhijith Vijayan | Front-End Software Engineer</title>
                    <meta
                        name="description"
                        content="I'm a Computer Enthusiast with experience in various software branches."
                    />
                    <meta name="author" content="Abhijith-Vijayan" />
                    <meta
                        name="keywords"
                        content="Abhijith-Vijayan, Abhijith-V, abhijith-v, abhijithvijayan, abhijith-vijayan, abhijithv, _abhijithvijayan, _abhijithv, Abhijith-V-CEA, Abhijith-Vijayan-CEA, Abhijith-V-pathanamthitta, Abhijith-Vijayan-pathanamthitta, Abhijith-V-IHRD, Abhijith-Vijayan-IHRD, Abhijith-Vijayan-theBlueDoor, Abhijith-Vijayan-dev, abhijith-vijayan-developer, Abhijith-V-rose-dale-senior-secondary-school-chandanappally, web-developer-in-pathanamthitta, abhijithvijayan-ceadoor, abhijith-vijayan-web-developer"
                    />
                    <meta name="copyright" content="Abhijith-Vijayan" />
                    <meta name="rating" content="General" />
                    <meta name="coverage" content="Worldwide" />
                    <meta name="creator" content="Abhijith-Vijayan" />
                    <meta itemProp="name" content="Abhijith-Vijayan" />
                    <meta itemProp="image" content="/static/images/profile.jpg" />
                    <meta property="og:image" content="/static/images/profile.jpg" />
                    <meta
                        itemProp="keywords"
                        content="Abhijith-Vijayan, Abhijith-V, abhijith-v, abhijithvijayan, abhijith-vijayan, abhijithv, _abhijithvijayan, _abhijithv, Abhijith-V-CEA, Abhijith-Vijayan-CEA, Abhijith-V-pathanamthitta, Abhijith-Vijayan-pathanamthitta, Abhijith-V-IHRD, Abhijith-Vijayan-IHRD, Abhijith-Vijayan-theBlueDoor, Abhijith-Vijayan-dev, abhijith-vijayan-developer, abhijith-vijayan-fullstack-developer, Abhijith-V-rose-dale-senior-secondary-school-chandanappally, web-developer-in-pathanamthitta, fullstack-developer, abhijithvijayan-ceadoor, abhijith-vijayan-web-developer"
                    />
                </Head>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Container>
        );
    }
}

export default MyApp;
