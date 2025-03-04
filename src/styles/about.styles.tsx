import { SxProps, Theme } from '@mui/material/styles';

export const aboutStyles: { [key: string]: SxProps<Theme> } = {
container: (theme: Theme) => ({
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    minHeight: 'calc(70vh - 64px)',
    marginTop: '64px',
  }),

header: (theme: Theme) => ({
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    color: theme.palette.text.primary,
}),
// boşverdim estetikliği eslint kardeşimizin hata vermesinden önemli değil 😎😎😎😉😉😉
content: () => ({
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  }),
  name: (theme: Theme) => ({
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  }),
  tagline: (theme: Theme) => ({
    fontStyle: 'italic',
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
  }),
  email: (theme: Theme) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  }),
  description: (theme: Theme) => ({
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary,
  }),
};
