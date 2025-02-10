    import { SxProps, Theme } from '@mui/material/styles';

    export const projectDetailStyles: { [key: string]: SxProps<Theme> } = {
    container: (theme: Theme) => ({
        marginTop: theme.spacing(4),
        color: theme.palette.text.primary,
        textTransform: 'none',
    }),
    title: (theme: Theme) => ({
        color: theme.palette.text.primary,
        textTransform: 'none',
    }),
    subtitle: (theme: Theme) => ({
        color: theme.palette.text.secondary,
        textTransform: 'none',
    }),
    imageBox: (theme: Theme) => ({
        my: theme.spacing(3),
    }),
    image: (theme: Theme) => ({
        maxWidth: '100%',
        height: 300,
        objectFit: 'cover',
        borderRadius: theme.shape.borderRadius,
        textTransform: 'none',
    }),
    description: (theme: Theme) => ({
        color: theme.palette.text.primary,
        textTransform: 'none',
    }),
    backButton: (theme: Theme) => ({
        textTransform: 'none',
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
    }),
    };
