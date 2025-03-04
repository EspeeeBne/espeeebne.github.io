import Head from 'next/head';
import { useRouter } from 'next/router';

interface MetaTagsProps {
title?: string;
description?: string;
}

export default function MetaTags({ title, description }: MetaTagsProps) {
const router = useRouter();
const { projectSlug } = router.query;
const baseUrl = 'https://espeeebne.github.io';
const pathname = router.asPath;

const ogUrl = `${baseUrl}${pathname}`;

const getMetaImage = () => {
    if (projectSlug) {
    return `${baseUrl}/static/projects/${projectSlug}/metadata.png`;
    }
    return `${baseUrl}/static/important-images/favicon.ico`;
};

const metaImage = getMetaImage();

const metaTitle = title || 'Espe Portfolio';
const metaDesc = description || 'Espe Portfolio - Kendim için yaptığım portfolyo sitesi.';

return (
    <Head>
    <title>{metaTitle}</title>
    <meta name="description" content={metaDesc} />

    <meta property="og:title" content={metaTitle} />
    <meta property="og:description" content={metaDesc} />
    <meta property="og:image" content={metaImage} />
    <meta property="og:url" content={ogUrl} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={metaTitle} />
    <meta name="twitter:description" content={metaDesc} />
    <meta name="twitter:image" content={metaImage} />
    </Head>
);
}
