import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
    render() {
        return (
        <Html lang="tr">
            <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="/static/important-images/favicon.ico" />
            <meta name="description" content="Espe Portfolio - Kendim için yaptığım portfolyo sitesi." />
            <meta property="og:title" content="Espe Portfolio" />
            <meta property="og:description" content="Espe Portfolio - Kendim için yaptığım portfolyo sitesi." />
            <meta property="og:image" content="/static/important-images/favicon.ico" />
            <meta property="og:url" content="espeeebne.github.io" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Espe Portfolio" />
            <meta name="twitter:description" content="Espe Portfolio - Kendim için yaptığım portfolyo sitesi." />
            <meta name="twitter:image" content="/static/important-images/favicon.ico" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
        );
    }
    }

export default MyDocument;
