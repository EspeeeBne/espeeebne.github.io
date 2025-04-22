import { styled } from '@mui/material/styles';
import { Container, Typography, Link, Box } from '@mui/material';
import { motion } from 'framer-motion';

const MotionContainer = motion(Container);
const MotionTypography = motion(Typography);
const MotionLink = motion(Link);
const MotionBox = motion(Box);

export const AboutContainer = styled(MotionContainer)(({ theme }) => ({
  padding: theme.spacing(6, 2),
  backgroundColor: theme.palette.background.default,
  minHeight: 'calc(70vh - 64px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
}));

export const Title = styled(MotionTypography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
  fontWeight: 700,
  position: 'relative',
  cursor: 'default',
  '&:after': {
    content: "''",
    position: 'absolute',
    left: '50%',
    bottom: -theme.spacing(1),
    width: 0,
    height: 3,
    background: theme.palette.primary.main,
    transition: 'width .4s ease, left .4s ease',
  },
  '&:hover:after': {
    width: '60%',
    left: '20%',
  },
}));

export const Name = styled(MotionTypography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
}));

export const Tagline = styled(MotionTypography)(({ theme }) => ({
  fontStyle: 'italic',
  marginBottom: theme.spacing(3),
  color: theme.palette.text.secondary,
}));

export const Description = styled(MotionBox)(({ theme }) => ({
  maxWidth: '800px',
  marginBottom: theme.spacing(3),
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
}));

export const EmailLink = styled(MotionLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 500,
  textDecoration: 'none',
}));
