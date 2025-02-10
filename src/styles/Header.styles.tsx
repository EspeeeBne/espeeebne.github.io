import { SxProps, Theme } from '@mui/material/styles';

export const headerStyles: { [key: string]: SxProps<Theme> } = {
    appBar: {
        backgroundColor: 'primary.main',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    menuButton: {
        mr: 2,
    },
    title: {
        flexGrow: 1,
        fontWeight: 600,
        fontSize: '1.5rem',
        a: {
            color: 'inherit',
            textDecoration: 'none',
        },
    },
    buttonsContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    iconButton: {
        ml: 1,
    },
};
