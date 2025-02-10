import { SxProps, Theme } from '@mui/material/styles';

export const footerStyles: { [key: string]: SxProps<Theme> } = {
container: (theme: Theme) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
}),
text: (theme: Theme) => ({
    marginBottom: theme.spacing(1),
}),
iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
},
iconButton: {
    color: 'inherit',
    mx: 1,
},
};
