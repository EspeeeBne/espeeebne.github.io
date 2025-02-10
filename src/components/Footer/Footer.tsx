import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import { useTranslation } from 'react-i18next';
import { footerStyles } from '../../styles/Footer.styles';

const Footer: React.FC = () => {
const { t, i18n } = useTranslation();

const cvLink = i18n.language === 'tr' ? '/cv/tr.pdf' : '/cv/en.pdf';

return (
        <Box sx={footerStyles.container}>
        <Typography variant="body2" sx={footerStyles.text}>
            {t('footer.copy', { year: new Date().getFullYear() })}
        </Typography>
        <Box sx={footerStyles.iconsContainer}>
            <IconButton
            sx={footerStyles.iconButton}
            href="https://github.com/EspeeeBne"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            >
            <GitHubIcon />
            </IconButton>
            <IconButton
            sx={footerStyles.iconButton}
            href="https://www.linkedin.com/in/tayfurfurkanhayat/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            >
            <LinkedInIcon />
            </IconButton>
            <IconButton
            sx={footerStyles.iconButton}
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('footer.cv')}
            >
            <DescriptionIcon />
            </IconButton>
        </Box>
        </Box>
    );
};

export default Footer;
