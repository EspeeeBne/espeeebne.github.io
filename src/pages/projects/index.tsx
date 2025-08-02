import { NextPage } from 'next';
import Head from 'next/head';
import { Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projectsData from '../../data/projectsData';
import { parseISO, compareAsc, format, formatDistanceToNow } from 'date-fns';
import { tr, enUS } from 'date-fns/locale';
import {
  TimelineContainer,
  TimelineLine,
  TimelineItemLeft,
  TimelineItemRight,
  TimelineMarker,
  TimelineDateLabel,
  TimelineContent
} from '../../styles/projects.styles';

const MotionTimelineItem = motion(TimelineItemLeft);
const MotionTimelineItemRight = motion(TimelineItemRight);

const Projects: NextPage = () => {
const { t, i18n } = useTranslation();
const theme = useTheme();

const sortedProjects = [...projectsData].sort((a, b) =>
    compareAsc(parseISO(a.date), parseISO(b.date))
);

const getRelativeDate = (dateString: string) => {
  const date = parseISO(dateString);
  const locale = i18n.language === 'tr' ? tr : enUS;
  return formatDistanceToNow(date, { addSuffix: true, locale });
};

const getFullDate = (dateString: string) => {
  const date = parseISO(dateString);
  const locale = i18n.language === 'tr' ? tr : enUS;
  return format(date, 'dd MMM yyyy', { locale });
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

return (
    <>
    <Head>
        <title>{t('projects.title', 'Projelerim')}</title>
        <meta name="description" content="Espe Portfolio - Projelerim sayfası. Geliştirdiğim projeleri inceleyebilirsiniz." />
        <meta property="og:title" content={t('projects.title', 'Projelerim')} />
        <meta property="og:description" content="Espe Portfolio - Projelerim sayfası. Geliştirdiğim projeleri inceleyebilirsiniz." />
        <meta property="og:image" content="https://espeeebne.github.io/static/important-images/favicon.ico" />
        <meta property="og:url" content="https://espeeebne.github.io/projects" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('projects.title', 'Projelerim')} />
        <meta name="twitter:description" content="Espe Portfolio - Projelerim sayfası. Geliştirdiğim projeleri inceleyebilirsiniz." />
        <meta name="twitter:image" content="https://espeeebne.github.io/static/important-images/favicon.ico" />
    </Head>
    <TimelineContainer>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: theme.palette.text.primary,  marginTop: '64px',}}>
        {t('projects.title', 'Projelerim')}
        </Typography>
        <TimelineLine />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sortedProjects.map((project, index) => {
              const isLeft = index % 2 === 0;
              const TimelineItem = isLeft ? MotionTimelineItem : MotionTimelineItemRight;
              const relativeDate = getRelativeDate(project.date);
              const fullDate = getFullDate(project.date);

              return (
                  <TimelineItem
                    key={project.slug}
                    variants={itemVariants}
                  >
                      <TimelineMarker />
                      <TimelineDateLabel title={fullDate}>
                      {relativeDate}
                      </TimelineDateLabel>
                      <TimelineContent>
                      <ProjectCard project={project} />
                      </TimelineContent>
                  </TimelineItem>
              );
          })}
        </motion.div>
    </TimelineContainer>
    </>
);
};

export default Projects;