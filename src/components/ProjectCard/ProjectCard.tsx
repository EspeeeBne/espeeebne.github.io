import { FC } from 'react';
import { CardActionArea, Box } from '@mui/material';
import Link from 'next/link';
import {
ProjectCardContainer,
ProjectCardContent,
ProjectCardTitle,
ProjectCardDescription
} from '../../styles/ProjectCard.styles';

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
      style={{ textDecoration: 'none', height: '100%', display: 'block' }}
    >
        <ProjectCardContainer>
            <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
    <Box
                component="img"
                src={project.imageUrl}
                alt={project.name}
                sx={{
                  height: 160,
                  objectFit: 'cover',
                  width: '100%',
                  borderBottom: '1px solid',
                  borderColor: 'divider'
                }}
    />
            <ProjectCardContent>
                <ProjectCardTitle
                gutterBottom
                variant="h6"
                >
                {project.name}
                </ProjectCardTitle>
                <ProjectCardDescription
                variant="body2"
                color="text.secondary"
                >
                {project.description}
                </ProjectCardDescription>
            </ProjectCardContent>
            </CardActionArea>
        </ProjectCardContainer>
    </Link>
    );
};

export default ProjectCard;
