import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import {
    name,
    navyColor,
    siteDescription,
    siteFavicon,
    siteIcon72,
    siteIcon96,
    siteIcon192,
    siteKeywords,
    siteLanguage,
    siteThumbnail,
    siteUrl,
    username,
} from '../config';

const style = {
    fontFamily: '"Nunito", sans-serif',
    backgroundColor: '#f3f3f3',
};

class OnePassDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => {
            return props => {
                return sheet.collectStyles(<App {...props} />);
            };
        });
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html lang={siteLanguage}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                    />

                    <meta name="application-name" content={name} />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content={name} />
                    <meta name="description" content={siteDescription} />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="msapplication-TileColor" content={navyColor} />
                    <meta name="msapplication-tap-highlight" content="no" />
                    <meta name="theme-color" content={navyColor} />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:url" content={siteUrl} />
                    <meta name="twitter:title" content={name} />
                    <meta name="twitter:description" content={siteDescription} />
                    <meta name="twitter:image" content={`${siteUrl}${siteIcon192}`} />
                    <meta name="twitter:creator" content={username} />

                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={name} />
                    <meta property="og:description" content={siteDescription} />
                    <meta property="og:site_name" content={name} />
                    <meta property="og:url" content={siteUrl} />
                    <meta property="og:image" content={siteThumbnail} />

                    <meta name="author" content={name} />
                    <meta name="keywords" content={siteKeywords} />
                    <meta name="copyright" content={name} />
                    <meta name="rating" content="General" />
                    <meta name="coverage" content="Worldwide" />
                    <meta name="creator" content={name} />

                    <link rel="apple-touch-icon" sizes="192x192" href={siteIcon192} />
                    <link rel="icon" type="image/png" sizes="72x72" href={siteIcon72} />
                    <link rel="icon" type="image/png" sizes="96x96" href={siteIcon96} />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="mask-icon" href={siteFavicon} color="#5bbad5" />
                    <link rel="shortcut icon" href={siteFavicon} />

                    <meta itemProp="name" content={name} />
                    <meta itemProp="image" content={siteThumbnail} />
                    <meta itemProp="keywords" content={siteKeywords} />

                    {/* for styled-components */}
                    {this.props.styleTags}
                </Head>
                <body style={style}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default OnePassDocument;
