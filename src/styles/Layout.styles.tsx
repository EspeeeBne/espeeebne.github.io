import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const LayoutContainer = styled(Box)(({ theme }) => ({
display: 'flex',
flexDirection: 'column',
minHeight: '100vh',
backgroundColor: theme.palette.background.default,
}));

export const MainContent = styled('main')(({ theme }) => ({
flex: 1,
padding: theme.spacing(3),
backgroundColor: theme.palette.background.default,
}));
