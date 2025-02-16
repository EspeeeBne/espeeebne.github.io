import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { heroStyles } from '../../styles/Hero.styles';
import { useTranslation } from 'react-i18next';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            sx={heroStyles.container}
        >
            <Typography variant="h2" sx={heroStyles.title}>
                {t('hero.title', 'Welcome to My Portfolio')}
            </Typography>
            <Typography variant="h5" sx={heroStyles.subtitle}>
                {t('hero.subtitle', 'Tayfur Furkan Hayat a.k.a. Espe, EspeeeBne, Sora, Rika')}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 3, zIndex: 2 }}>
                <NextLink href="/about" passHref legacyBehavior>
                    <Button variant="contained" color="primary" sx={{ textTransform: 'none' }}>
                        {t('hero.about', 'Hakkımda')}
                    </Button>
                </NextLink>
                <NextLink href="/projects" passHref legacyBehavior>
                    <Button variant="contained" color="primary" sx={{ textTransform: 'none' }}>
                        {t('hero.projects', 'Projelerim')}
                    </Button>
                </NextLink>
            </Stack>
        </Box>
    );
};

export default Hero;
