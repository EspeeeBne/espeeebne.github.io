import React from 'react';
import { Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import { useTranslation } from 'react-i18next';
import {
FooterContainer,
FooterText,
FooterIconsContainer,
FooterLinkButton
} from '../../styles/Footer.styles';

const Footer: React.FC = () => {
const { t, i18n } = useTranslation();

const cvLink = i18n.language === 'tr' ? '/cv/tr.pdf' : '/cv/en.pdf';

return (
        <FooterContainer>
        <FooterText>
            <Typography variant="body2">
                {t('footer.copy', { year: new Date().getFullYear() })}
            </Typography>
        </FooterText>
        <FooterIconsContainer>
            <FooterLinkButton
            href="https://github.com/EspeeeBne"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            >
            <GitHubIcon />
            </FooterLinkButton>
            <FooterLinkButton
            href="https://www.linkedin.com/in/tayfurfurkanhayat/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            >
            <LinkedInIcon />
            </FooterLinkButton>
            <FooterLinkButton
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('footer.cv')}
            >
            <DescriptionIcon />
            </FooterLinkButton>
        </FooterIconsContainer>
        </FooterContainer>
    );
};

export default Footer;
