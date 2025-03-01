import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { notFoundStyles } from '../styles/404.styles';

const Custom404: React.FC = () => {
const router = useRouter();
const { t } = useTranslation();

useEffect(() => {
    const timer = setTimeout(() => {
    router.push('/');
    }, 10000);

    return () => clearTimeout(timer);
}, [router]);

return (
    <Box sx={notFoundStyles.container}>
    <Box
        component="img"
        src="/static/important-images/404.gif"
        alt="404 Not Found"
        sx={notFoundStyles.image}
    />
    <Typography variant="h4" sx={notFoundStyles.header}>
        {t('404.header_text', 'Aradığınız sayfa bulunamadı.')}
    </Typography>
    <Typography variant="body1" sx={notFoundStyles.subtitle}>
        {t('404.subtitle_text', '10 saniye içinde otomatik ana sayfaya gideceksiniz...')}
    </Typography>
    </Box>
);
};

export default Custom404;
