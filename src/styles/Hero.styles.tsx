import { SxProps, Theme } from '@mui/material/styles';

export const heroStyles: { [key: string]: SxProps<Theme> } = {
    container: (theme: Theme) => ({
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: theme.spacing(4),
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: theme.palette.background.paper,
            zIndex: 1,
        },
    }),
    title: (theme: Theme) => ({
        position: 'relative',
        zIndex: 2,
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
        color: theme.palette.text.primary,
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem',
        },
    }),
    subtitle: (theme: Theme) => ({
        position: 'relative',
        zIndex: 2,
        marginBottom: theme.spacing(3),
        color: theme.palette.text.secondary,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        },
    }),
    button: (theme: Theme) => ({
        position: 'relative',
        zIndex: 2,
        padding: theme.spacing(1, 4),
        fontSize: '1rem',
        borderRadius: theme.shape.borderRadius,
        textTransform: 'none',
    }),
};
