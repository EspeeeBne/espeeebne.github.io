import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.level1,
  color: theme.palette.text.primary,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
}));

export const FooterText = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export const FooterIconsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

export const FooterLinkButton = styled('a')(({ theme }) => ({
  color: 'inherit',
  margin: '0 8px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));
