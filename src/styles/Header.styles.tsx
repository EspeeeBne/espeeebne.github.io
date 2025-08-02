import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
backgroundColor: theme.palette.background.level1,
color: theme.palette.text.primary,
boxShadow: theme.shadows[5],
borderBottom: theme.palette.mode === 'dark'
? `1px solid ${theme.palette.divider}`
: 'none',
[theme.breakpoints.down('sm')]: {
borderBottom: 'none',
},
}));

export const StyledToolbar = styled(Toolbar)({
display: 'flex',
justifyContent: 'space-between',
});

export const StyledMenuButton = styled(IconButton)(({ theme }) => ({
marginRight: theme.spacing(2),
}));

export const StyledTitle = styled(Typography)(() => ({
flexGrow: 1,
fontWeight: 600,
fontSize: '1.5rem',
'& a': {
    color: 'inherit',
    textDecoration: 'none',
},
}));

export const ButtonsContainer = styled(Box)({
display: 'flex',
alignItems: 'center',
});

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
marginLeft: theme.spacing(1),
}));
