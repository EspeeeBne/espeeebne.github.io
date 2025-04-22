import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const StyledContainer = styled(Box)(({ theme }) => ({
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
height: '100vh',
marginTop: '64px',
textAlign: 'center',
backgroundColor: theme.palette.background.default,
}));

export const MotionContainer = motion(StyledContainer);

const StyledImg = styled('img')(({ theme }) => ({
maxWidth: '100%',
width: '400px',
borderRadius: 16,
boxShadow: theme.shadows[6],
marginBottom: theme.spacing(2),
}));
export const MotionImage = motion(StyledImg);

const MotionTypography = motion(Typography);

export const HeaderText = styled(MotionTypography)(({ theme }) => ({
fontWeight: 700,
color: theme.palette.text.primary,
marginBottom: theme.spacing(1),
}));

export const SubtitleText = styled(MotionTypography)(({ theme }) => ({
color: theme.palette.text.secondary,
}));
