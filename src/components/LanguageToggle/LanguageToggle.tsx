import React from 'react';
import { IconButton } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const LanguageToggle: React.FC = () => {
    const { i18n } = useTranslation();
    const router = useRouter();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'tr' ? 'en' : 'tr';
        router.push(router.asPath, undefined, { locale: newLang });
    };

    return (
        <IconButton
            onClick={toggleLanguage}
            aria-label="Dil Değiştir"
            sx={{ color: 'inherit' }}
        >
            <TranslateIcon />
        </IconButton>
    );
};

export default LanguageToggle;
