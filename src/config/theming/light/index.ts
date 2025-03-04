    import { createTheme } from '@mui/material/styles';
    import themeOverrides from '../theme-overrides';

    const baseTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
        main: "#7077F9",
        contrastText: '#000000',
        },
        background: {
        default: '#ffffff',
        paper: '#f5f5f5',
        },
        error: {
        main: '#f44336',
        },
        warning: {
        main: '#ff9800',
        },
        text: {
        primary: '#000000',
        secondary: '#555555',
        },
    },
    shape: {
        borderRadius: 8,
    },
    });

    const lightTheme = {
    ...baseTheme,
    components: themeOverrides(baseTheme),
    };

    export default lightTheme;
