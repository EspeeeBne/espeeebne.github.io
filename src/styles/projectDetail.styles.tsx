import { styled } from '@mui/material/styles';
import { Container, Typography, Box, Button } from '@mui/material';

export const ProjectDetailContainer = styled(Container)(({ theme }) => ({
  marginTop: '64px',
  color: theme.palette.text.primary,
  textTransform: 'none',
}));

export const ProjectDetailTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: 'none',
}));

export const ProjectDetailSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textTransform: 'none',
}));

export const ProjectDetailImageBox = styled(Box)(({ theme }) => ({
  margin: `${theme.spacing(3)} 0`,
}));

export const ProjectDetailDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: 'none',
}));

export const ProjectDetailBackButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
}));