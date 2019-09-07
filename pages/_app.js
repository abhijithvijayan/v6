import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { name, siteTitle, siteDescription, siteThumbnail, siteKeywords } from '../config';

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
            <>
                <Head>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                    <meta name="author" content={name} />
                    <meta name="keywords" content={siteKeywords} />
                    <meta name="copyright" content={name} />
                    <meta name="rating" content="General" />
                    <meta name="coverage" content="Worldwide" />
                    <meta name="creator" content={name} />
                    <meta itemProp="name" content={name} />
                    <meta itemProp="image" content={siteThumbnail} />
                    <meta property="og:image" content={siteThumbnail} />
                    <meta itemProp="keywords" content={siteKeywords} />
                </Head>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </>
        );
    }
}

export default MyApp;
