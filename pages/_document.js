import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { siteFavicon, siteLanguage, navyColor } from '../config';

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
                        content="width=device-width, initial-scale=1.0, shrink-to-fit=no, user-scalable=no"
                    />
                    <meta name="msapplication-TileColor" content={navyColor} />
                    <meta name="theme-color" content={navyColor} />
                    <link rel="shortcut icon" href={siteFavicon} />
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
