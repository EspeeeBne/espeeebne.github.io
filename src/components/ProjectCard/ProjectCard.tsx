import { FC } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import { projectCardStyles } from '../../styles/ProjectCard.styles';

export interface Project {
slug: string;
name: string;
description: string;
date: string;
imageUrl: string;
}

interface ProjectCardProps {
project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      passHref
      legacyBehavior
      style={{ textDecoration: 'none' }}
    >
        <Card sx={projectCardStyles.card}>
            <CardActionArea>
    <CardMedia
                component="img"
                sx={projectCardStyles.media}
                image={project.imageUrl}
                alt={project.name}
    />
            <CardContent sx={projectCardStyles.content}>
                <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={projectCardStyles.title}
                >
                {project.name}
                </Typography>
                <Typography
                variant="body2"
                color="text.secondary"
                sx={projectCardStyles.description}
                >
                {project.description}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
            </Link>
    );
};

export default ProjectCard;
