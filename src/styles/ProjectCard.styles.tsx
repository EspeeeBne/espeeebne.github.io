import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography } from '@mui/material';

export const ProjectCardContainer = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[4],
  transition: 'all 0.3s ease-in-out',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  border: `1px solid ${theme.palette.divider}`,
  position: 'relative',
  zIndex: 1,
  '&:hover': {
    boxShadow: theme.shadows[6],
    borderColor: theme.palette.primary.main,
  },
}));

export const ProjectCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2.5),
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
}));

export const ProjectCardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1.5),
  color: theme.palette.text.primary,
  fontSize: '1.1rem',
  lineHeight: 1.3,
}));

export const ProjectCardDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  flex: 1,
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  color: theme.palette.text.secondary,
  lineHeight: 1.5,
}));