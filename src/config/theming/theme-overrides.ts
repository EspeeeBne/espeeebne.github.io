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

// buradaki birkaç yer için scss ekleyebilirim aslında olurda başka bir sebepten ekleyip buradaki bazı kodları aktarmazsam bana github ya da mail üzerinden yazın
//TODO: burayı direkt 0'dan yaz themeprovider'ı düzgün ekle
MuiCssBaseline: {
    styleOverrides: {
    '*': {
        scrollbarWidth: 'thin',
        scrollbarColor: `${theme.palette.primary.main} ${theme.palette.background.paper}`,
        msOverflowStyle: 'none',
    },

    '*::-webkit-scrollbar': {
        width: '8px',
        height: '8px',
        borderRadius: '16px',
        [theme.breakpoints.down('sm')]: {
            width: 0,
            height: 0
        }
    },

    '*::-webkit-scrollbar-track': {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '8px',
    },

    '*::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.primary.main,
        borderRadius: '8px',
    },

    '@media (max-width:600px)': {
        '*::-webkit-scrollbar': {
        width: 0,
        height: 0,
        },
    },
    },
},
});

export default themeOverrides;
