import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import { projectCardStyles } from './ProjectCard.styles';
import { useTheme } from '@mui/material/styles';

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

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  //kör eslint diğer dosyada tema olayları gelmişsin yok ben göremiyorum diyorsun 😡😡😡
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
const theme = useTheme();

return (
        <Link href={`/projects/${project.slug}`} passHref>
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
