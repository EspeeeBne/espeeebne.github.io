import { NextPage } from 'next';
import Head from 'next/head';
import { Skeleton, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { easeOut } from 'framer-motion'
import {
AboutContainer,
Title,
Name,
Tagline,
Description,
EmailLink,
} from '../../styles/about.styles';

const containerVariants = {
hidden: {},
visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
hidden:
{
    opacity: 0,
    y: 20
},
visible:
{
    opacity: 1,
    y: 0,
    transition: {
    duration: 0.6,
    ease: easeOut
    }
}
}

const About: NextPage = () => {
const { t, ready } = useTranslation();
const [loading, setLoading] = useState(true);

useEffect(() => {
    setLoading(false);
}, []);

if (!ready || loading) {
    return (
    <AboutContainer>
        <Skeleton variant="text" width="40%" height={48} sx={{ mb: 2 }} />
        <Stack spacing={1}>
        <Skeleton variant="text" width="30%" height={40} />
        <Skeleton variant="text" width="50%" height={32} />
        <Skeleton variant="rectangular" width="100%" height={100} />
        <Skeleton variant="text" width={200} height={28} />
        </Stack>
    </AboutContainer>
    );
}

return (
    <>
    <Head>
        <title>{t('about.pageTitle', 'Hakkımda')}</title>
    </Head>

    <AboutContainer
        initial="hidden"
        animate="visible"
        variants={containerVariants}
    >
        <Title
        variant="h3"
        variants={itemVariants}
        >
        {t('about.title', 'Hakkımda')}
        </Title>

        <Name
        variant="h4"
        variants={itemVariants}
        >
        {t('about.name', 'Tayfur Furkan Hayat')}
        </Name>

        <Tagline
        variant="h6"
        variants={itemVariants}
        >
        {t(
            'about.tagline',
            'Software Engineer | React, .NET & Beyond'
        )}
        </Tagline>

        <Description variants={itemVariants}>
        {t(
            'about.description',
            'Evet burası çok boş, kendimi özetleyeyim: web üzerine kod yazan; React & .NET ile takılan bir software engineer...'
        )}
        </Description>

        <EmailLink
        href="mailto:espeeebne@proton.me"
        variants={itemVariants}
        >
        espeeebne@proton.me
        </EmailLink>
    </AboutContainer>
    </>
);
};

export default About;
