import { styled } from '@mui/material/styles';
import { Typography, Button, Stack, Skeleton } from '@mui/material';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)(({ theme }) => ({
minHeight: '70vh',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
textAlign: 'center',
padding: theme.spacing(4),
backgroundColor: theme.palette.background.default,
position: 'relative',
overflow: 'hidden',
}));

export const Title = styled(Typography)(({ theme }) => ({
fontWeight: theme.typography.fontWeightBold,
marginBottom: theme.spacing(2),
color: theme.palette.text.primary,
fontSize: '4rem',
[theme.breakpoints.down('sm')]: {
fontSize: '2.5rem',
},
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
marginBottom: theme.spacing(3),
color: theme.palette.text.secondary,
fontSize: '1.5rem',
[theme.breakpoints.down('sm')]: {
fontSize: '1.2rem',
},
}));

export const HeroStack = styled(Stack)(({ theme }) => ({
marginTop: theme.spacing(3),
zIndex: 2,
flexDirection: 'row',
gap: theme.spacing(2),
[theme.breakpoints.down('sm')]: {
flexDirection: 'column',
gap: theme.spacing(1.5),
},
}));

export const HeroButton = styled(Button)(({ theme }) => ({
padding: theme.spacing(1, 4),
color: theme.palette.text.primary,
borderColor: theme.palette.background.level2,
borderRadius: theme.spacing(2),
transition: "all 0.3s ease-in-out",
"&:hover": {
color: theme.palette.text.primary,
borderColor: theme.palette.background.level3,
backgroundColor: "transparent",
},
}));

export const HeroSkeleton = {
line: styled(Skeleton)(({ theme }) => ({
marginBottom: theme.spacing(2),
})),

rect: styled(Skeleton)(({ theme }) => ({
borderRadius: theme.shape.borderRadius,
})),
};
