import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import NextLink from 'next/link';
import {
Container,
Title,
Subtitle,
HeroStack,
HeroButton,
HeroSkeleton
} from '../../styles/Hero.styles';

const Hero: FC = () => {
const { t, ready } = useTranslation();

const animProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 }
};

if (!ready) {
    return (
    <Container {...animProps}>
        <HeroSkeleton.line variant="text" width="60%" height={64} />
        <HeroSkeleton.line variant="text" width="40%" height={40} />
        <HeroStack>
        <HeroSkeleton.rect variant="rectangular" width={120} height={48} />
        <HeroSkeleton.rect variant="rectangular" width={120} height={48} />
        </HeroStack>
    </Container>
    );
}

return (
    <Container {...animProps}>
    <Title variant="h2">
        {t('hero.title', 'Welcome to My Portfolio')}
    </Title>
    <Subtitle variant="h5">
        {t(
        'hero.subtitle',
        'Tayfur Furkan Hayat a.k.a. Espe, EspeeeBne, Sora, Rika'
        )}
    </Subtitle>

    <HeroStack>
        <NextLink href="/about" style={{ textDecoration: 'none' }}>
        <HeroButton variant="outlined">
            {t('hero.about', 'Hakkımda')}
        </HeroButton>
        </NextLink>
        <NextLink href="/projects" style={{ textDecoration: 'none' }}>
        <HeroButton variant="outlined">
            {t('hero.projects', 'Projelerim')}
        </HeroButton>
        </NextLink>
    </HeroStack>
    </Container>
);
};

export default Hero;
