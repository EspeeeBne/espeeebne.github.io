import { Components, Theme } from '@mui/material/styles';

const themeOverrides = (theme: Theme): Components => ({
    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: 'none',
                borderRadius: theme.shape.borderRadius,
            },
        },
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                boxShadow: 'none',
                backgroundColor: theme.palette.primary.main,
            },
        },
    },
    MuiTypography: {
        styleOverrides: {
            root: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            },
        },
    },
});

export default themeOverrides;
