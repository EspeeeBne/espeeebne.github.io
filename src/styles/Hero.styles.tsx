import { SxProps, Theme } from '@mui/material/styles';

export const heroStyles: { [key: string]: SxProps<Theme> } = {
container: (theme: Theme) => ({
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',
}),
title: (theme: Theme) => ({
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
    fontSize: '4rem',
    [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
    },
}),
subtitle: (theme: Theme) => ({
    marginBottom: theme.spacing(3),
    color: theme.palette.text.secondary,
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
    },
}),
button: (theme: Theme) => ({
    padding: theme.spacing(1, 4),
    fontSize: '1rem',
    borderRadius: theme.shape.borderRadius,
    textTransform: 'none',
}),
};