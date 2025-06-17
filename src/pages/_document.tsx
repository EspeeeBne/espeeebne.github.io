import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        const pathname = ctx.req?.url || "/";

        return { ...initialProps, pathname };
    }

    render() {

        return (
            <Html lang="tr">
                <Head>
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
