import { SxProps, Theme } from '@mui/material/styles';

export const notFoundStyles: { [key: string]: SxProps<Theme> } = {
container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: (theme) => theme.palette.background.default,
},
image: {
    maxWidth: '100%',
    width: '500px',
    boxShadow: (theme) => theme.shadows[6],
    marginBottom: 2,
},
header: {
    fontWeight: 'bold',
    color: (theme) => theme.palette.text.primary,
    marginBottom: 1,
},
subtitle: {
    color: (theme) => theme.palette.text.secondary,
},
};