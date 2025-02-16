import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Container, Typography, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import NextLink from 'next/link';
import projectsData from '../../data/projectsData';
import { projectDetailStyles } from '../../styles/projectDetail.styles';
import MetaTags from '../../components/MetaTags/MetaTags';

const ProjectDetail: NextPage = () => {
    const router = useRouter();
    const { projectSlug } = router.query;
    const { t } = useTranslation();

    const project = projectsData.find((p) => p.slug === projectSlug);

    if (!project) {
        return (
            <Container sx={projectDetailStyles.container}>
                <Typography variant="h5">
                    {t('projects.notFound', 'Proje bulunamadı.')}
                </Typography>
            </Container>
        );
    }

    return (
        <>
            <MetaTags title={`${project.name} - Espe`} description={project.description} />
            <Container sx={projectDetailStyles.container}>
                <Typography variant="h4" component="h1" gutterBottom sx={projectDetailStyles.title}>
                    {project.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom sx={projectDetailStyles.subtitle}>
                    {project.date}
                </Typography>
                <Box sx={projectDetailStyles.imageBox}>
                    <Box
                        component="img"
                        src={project.imageUrl}
                        alt={project.name}
                        sx={projectDetailStyles.image}
                    />
                </Box>
                <Typography variant="body1" paragraph sx={projectDetailStyles.description}>
                    {project.description}
                </Typography>
                <NextLink href="/projects" passHref legacyBehavior>
                    <Button variant="outlined" sx={projectDetailStyles.backButton}>
                        {t('projects.back', 'Geri Dön')}
                    </Button>
                </NextLink>
            </Container>
        </>
    );
};

export default ProjectDetail;
