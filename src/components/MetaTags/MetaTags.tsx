import Head from 'next/head';
import { useRouter } from 'next/router';
// bu yer tekrar kullanılabilir belki sanırım

export default function MetaTags({
    title,
    description,
}: {
    title?: string;
    description?: string;
}) {
    const router = useRouter();
    const pathname = router.asPath;
// bu yer tekrar kullanılabilir belki sanırım

    const getMetaImage = () => {
        const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
        if (match) {
            const slug = match[1];
            return `https://espeeebne.github.io/static/projects/${slug}/metadata.png`;
        }
        return 'https://espeeebne.github.io/static/important-images/favicon.ico';
    };
// bu yer tekrar kullanılabilir belki sanırım

    const metaImage = getMetaImage();
// bu yer tekrar kullanılabilir belki sanırım
    return (
        <Head>
            <title>{title || 'Espe Portfolio'}</title>
            <meta name="description" content={description || 'Espe Portfolio - Kendim için yaptığım portfolyo sitesi.'} />
            <meta property="og:title" content={title || 'Espe Portfolio'} />
            <meta property="og:description" content={description || 'Espe Portfolio - Kendim için yaptığım portfolyo sitesi.'} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:url" content={`https://espeeebne.github.io${pathname}`} />
            <meta name="twitter:card" content={metaImage} />
            <meta name="twitter:title" content={title || 'Espe Portfolio'} />
            <meta name="twitter:description" content={description || 'Espe Portfolio - Kendim için yaptığım portfolyo sitesi.'} />
            <meta name="twitter:image" content={metaImage} />
            <meta charSet="utf-8" />
        </Head>
    );
}
