    import { createTheme } from '@mui/material/styles';
    import themeOverrides from '../theme-overrides';

    const baseTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
        main: "#7038F8",
        contrastText: '#ffffff',
        },
        background: {
        default: '#000000',
        paper: '#121212',
        },
        error: {
        main: '#f44336',
        },
        warning: {
        main: '#ff9800',
        },
        text: {
        primary: '#ffffff',
        secondary: '#bbbbbb',
        },
    },
    shape: {
        borderRadius: 8,
    },
    });

    const darkTheme = {
    ...baseTheme,
    components: themeOverrides(baseTheme),
    };

    export default darkTheme;
