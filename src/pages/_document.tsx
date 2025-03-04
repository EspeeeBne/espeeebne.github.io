import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentProps } from "next/document";

interface MyDocumentProps extends DocumentProps {
    pathname: string;
}

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        const pathname = ctx.req?.url || "/";

        return { ...initialProps, pathname };
    }

    render() {
        const { pathname } = this.props as MyDocumentProps;

        const getMetaImage = () => {
            const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
            if (match) {
                const slug = match[1];
                return `https://espeeebne.github.io/static/projects/${slug}/metadata.png`;
            }
            return "https://espeeebne.github.io/static/important-images/favicon.ico";
        };

        const metaImage = getMetaImage();

        return (
            <Html lang="tr">
                <Head>
                    <meta name="description" content="Espe Portfolio - Kendim için yaptığım portfolyo sitesi." />
                    <meta property="og:title" content="Espe Portfolio" />
                    <meta
                        property="og:description"
                        content="Espe Portfolio - Kendim için yaptığım portfolyo sitesi."
                    />
                    <meta property="og:image" content={metaImage} />
                    <meta property="og:url" content={`https://espeeebne.github.io${pathname}`} />
                    <meta name="twitter:card" content={metaImage} />
                    <meta name="twitter:title" content="Espe Portfolio" />
                    <meta
                        name="twitter:description"
                        content="Espe Portfolio - Kendim için yaptığım portfolyo sitesi."
                    />
                    <meta name="twitter:image" content={metaImage} />
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/static/important-images/favicon.ico" />
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
