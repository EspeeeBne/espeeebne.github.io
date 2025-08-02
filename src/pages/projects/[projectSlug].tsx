import { NextPage } from 'next';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import NextLink from 'next/link';
import { parseISO, format, formatDistanceToNow } from 'date-fns';
import { tr, enUS } from 'date-fns/locale';
import Head from 'next/head';
import projectsData from '../../data/projectsData';
import {
  ProjectDetailContainer,
  ProjectDetailTitle,
  ProjectDetailSubtitle,
  ProjectDetailImageBox,
  ProjectDetailDescription,
  ProjectDetailBackButton
} from '../../styles/projectDetail.styles';

interface ProjectDetailProps {
    project: {
        name: string;
        date: string;
        imageUrl: string;
        description: string;
        slug: string;
    };
    meta?: {
        title: string;
        description: string;
        image: string;
        url: string;
    };
}

const ProjectDetail: NextPage<ProjectDetailProps> = ({ project, meta }) => {
    const { t, i18n } = useTranslation();

    if (!project) {
        return (
            <ProjectDetailContainer>
                <Typography variant="h5">{t('projects.notFound', 'Proje bulunamadı.')}</Typography>
            </ProjectDetailContainer>
        );
    }

    const getRelativeDate = (dateString: string) => {
      const date = parseISO(dateString);
      const locale = i18n.language === 'tr' ? tr : enUS;
      return formatDistanceToNow(date, { addSuffix: true, locale });
    };

    const getFullDate = (dateString: string) => {
      const date = parseISO(dateString);
      const locale = i18n.language === 'tr' ? tr : enUS;
      return format(date, 'dd MMMM yyyy', { locale });
    };

    return (
        <>
            <Head>
                <title>{meta?.title || `${project.name} - Espe`}</title>
                <meta name="description" content={meta?.description || project.description} />
                <meta property="og:title" content={meta?.title || `${project.name} - Espe`} />
                <meta property="og:description" content={meta?.description || project.description} />
                <meta property="og:image" content={meta?.image || `https://espeeebne.github.io/static/projects/${project.slug}/metadata.png`} />
                <meta property="og:url" content={meta?.url || `https://espeeebne.github.io/projects/${project.slug}`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta?.title || `${project.name} - Espe`} />
                <meta name="twitter:description" content={meta?.description || project.description} />
                <meta name="twitter:image" content={meta?.image || `https://espeeebne.github.io/static/projects/${project.slug}/metadata.png`} />
            </Head>

            <ProjectDetailContainer>
                <ProjectDetailTitle variant="h4" gutterBottom>
                    {project.name}
                </ProjectDetailTitle>
                <ProjectDetailSubtitle variant="subtitle1" gutterBottom title={getFullDate(project.date)}>
                    {getRelativeDate(project.date)}
                </ProjectDetailSubtitle>
                <ProjectDetailImageBox>
                    <Box
                        component="img"
                        src={project.imageUrl}
                        alt={project.name}
                        sx={{
                            maxWidth: '100%',
                            height: 300,
                            objectFit: 'cover',
                            borderRadius: 2,
                        }}
                    />
                </ProjectDetailImageBox>
                <ProjectDetailDescription variant="body1" paragraph>
                    {project.description}
                </ProjectDetailDescription>
                <NextLink href="/projects" style={{ textDecoration: 'none' }}>
                    <ProjectDetailBackButton variant="outlined">
                        {t('projects.back', 'Geri Dön')}
                    </ProjectDetailBackButton>
                </NextLink>
            </ProjectDetailContainer>
        </>
    );
};

export default ProjectDetail;

export async function getStaticPaths() {
    const paths = projectsData.map((project) => ({
        params: { projectSlug: project.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { projectSlug: string } }) {
    const project = projectsData.find((p) => p.slug === params.projectSlug);
    
    if (!project) {
        return {
            notFound: true,
        };
    }

    return { 
        props: { 
            project,
            // Meta tag'ler için ek bilgiler
            meta: {
                title: `${project.name} - Espe`,
                description: project.description,
                image: `https://espeeebne.github.io/static/projects/${project.slug}/metadata.png`,
                url: `https://espeeebne.github.io/projects/${project.slug}`,
            }
        } 
    };
}
