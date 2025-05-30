    import { createTheme } from '@mui/material/styles';
    import themeOverrides from '../theme-overrides';

    const baseTheme = createTheme({
    palette: {
        mode: 'dark',
        contrastThreshold: 4.5,
        primary: {
        main: "#7038F8",
        contrastText: '#ffffff',
        },
    background: {
    default: "#000000",
    level1: "#121212",
    level2: "#2E2E2E",
    level3: "#3E3E3E",
    paper: "#1E1E1E",
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
