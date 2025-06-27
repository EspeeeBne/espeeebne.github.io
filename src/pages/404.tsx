import { useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';

import {
MotionContainer,
MotionImage,
HeaderText,
SubtitleText,
} from '../styles/404.styles';

const containerVariants = {
hidden: { opacity: 0 },
visible: { opacity: 1, transition: { duration: 0.8 } },
};

const imageVariants = {
hidden: { y: -30, opacity: 0 },
visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 12, delay: 0.4 },
},
};

const textVariants = {
hidden: { opacity: 0 },
visible: { opacity: 1, transition: { duration: 0.6, delay: 0.9 } },
};

const Custom404: FC = () => {
const router = useRouter();
const { t } = useTranslation();

useEffect(() => {
    const timer = setTimeout(() => {
    router.push('/');
    }, 10000);
    return () => clearTimeout(timer);
}, [router]);

return (
    <>
    <Head>
        <title>404 — {t('404.header_text', 'Sayfa Bulunamadı')}</title>
    </Head>

    <MotionContainer
        initial="hidden"
        animate="visible"
        variants={containerVariants}
    >
        <MotionImage
        src="/static/important-images/404.gif"
        alt="404 Not Found"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        />

        <HeaderText
        variant="h4"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        >
        {t('404.header_text', 'Aradığınız sayfa bulunamadı.')}
        </HeaderText>

        <SubtitleText
        variant="body1"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        >
        {t(
            '404.subtitle_text',
            '10 saniye içinde otomatik olarak ana sayfaya yönlendirileceksiniz...'
        )}
        </SubtitleText>
    </MotionContainer>
    </>
);
};

export default Custom404;
