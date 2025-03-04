import { SxProps, Theme } from '@mui/material/styles';

export const projectCardStyles: { [key: string]: SxProps<Theme> } = {
card: (theme: Theme) => ({
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[6],
    },
    }),
media: {
    height: 140,
    objectFit: 'cover',
    },
content: (theme: Theme) => ({
    padding: theme.spacing(2),
    }),
title: {
    fontWeight: 600,
    marginBottom: 1,
},
description: {
    fontSize: '0.875rem',
    },
};