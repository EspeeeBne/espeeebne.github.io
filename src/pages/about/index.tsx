import { NextPage } from 'next';
import { Container, Typography, Box, Link } from '@mui/material';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { aboutStyles } from '../../styles/about.styles';

const About: NextPage = () => {
const { t } = useTranslation();

return (
    <>
    <Head>
        <title>{t('about.pageTitle', 'Hakkımda')}</title>
    </Head>
    <Container sx={aboutStyles.container}>
        <Typography variant="h3" sx={aboutStyles.header}>
        {t('about.title', 'Hakkımda')}
        </Typography>
        <Box sx={aboutStyles.content}>
        <Typography variant="h4" sx={aboutStyles.name}>
            {t('about.name', 'Tayfur Furkan Hayat')}
        </Typography>
        <Typography variant="h6" sx={aboutStyles.tagline}>
            {t('about.tagline', 'Software Engineer | React, .NET & Beyond')}
        </Typography>
        <Typography variant="body1" sx={aboutStyles.description}>
            {t('about.description',)}
        </Typography>
        <Typography variant="body1" sx={aboutStyles.email}>
            <Link href="mailto:espeeebne@proton.me" color="inherit">
            espeeebne@proton.me
            </Link>
        </Typography>
        </Box>
    </Container>
    </>
);
};

export default About;
