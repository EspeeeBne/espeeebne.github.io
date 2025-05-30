    import { createTheme } from '@mui/material/styles';
    import themeOverrides from '../theme-overrides';

    const baseTheme = createTheme({
    palette: {
        mode: 'light',
        contrastThreshold: 3,
        primary: {
        main: "#7077F9",
        contrastText: '#000000',
        },
    background: {
    default: "#FFFFFF",
    level1: "#FAFAFA",
    level2: "#bfbcae",
    level3: "#E2DFD2",
    paper: "#ECECEC",
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
