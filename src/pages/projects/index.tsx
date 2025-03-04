import { NextPage } from 'next';
import Head from 'next/head';
import { Container, Typography, Box, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projectsData from '../../data/projectsData';
import { parseISO, compareAsc, format } from 'date-fns';
import { timelineStyles } from '../../styles/projects.styles';

const Projects: NextPage = () => {
const { t } = useTranslation();
const theme = useTheme();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SxProps = theme.breakpoints.values;

const sortedProjects = [...projectsData].sort((a, b) =>
    compareAsc(parseISO(a.date), parseISO(b.date))
);

return (
    <>
    <Head>
        <title>{t('projects.title', 'Projelerim')}</title>
    </Head>
    <Container sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: theme.palette.text.primary,  marginTop: '64px',}}>
        {t('projects.title', 'Projelerim')}
        </Typography>
        <Box sx={timelineStyles.container(theme)}>
        <Box sx={timelineStyles.timelineLine(theme)} />
        {sortedProjects.map((project, index) => {
            const isLeft = index % 2 === 0;
            return (
<Box
key={project.slug}
sx={{
    ...(timelineStyles.timelineItem(theme) as typeof SxProps),
    ...(isLeft ? timelineStyles.timelineItemLeft(theme) : timelineStyles.timelineItemRight(theme)),
}}
>


                <Box sx={timelineStyles.marker(theme)} />
                <Typography sx={timelineStyles.dateLabel(theme)}>
                {format(parseISO(project.date), 'dd MMM yyyy')}
                </Typography>
                <Box sx={timelineStyles.content(theme)}>
                <ProjectCard project={project} />
                </Box>
            </Box>
            );
        })}
        </Box>
    </Container>
    </>
);
};

export default Projects;