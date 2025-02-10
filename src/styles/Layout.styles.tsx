import { SxProps, Theme } from '@mui/material/styles';

export const layoutStyles: { [key: string]: SxProps<Theme> } = {
container: (theme: Theme) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
}),
main: (theme: Theme) => ({
    flex: 1,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
}),
};
