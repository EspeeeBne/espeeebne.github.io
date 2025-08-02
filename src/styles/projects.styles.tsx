import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  color: theme.palette.text.primary,
}));

export const TimelineLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 3,
  background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  borderRadius: theme.spacing(1),
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const TimelineItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '45%',
  marginBottom: theme.spacing(8),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[4],
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    marginLeft: 0,
    marginRight: 0,
    textAlign: 'center',
  },
}));

export const TimelineItemLeft = styled(TimelineItem)({
  marginRight: 'auto',
  textAlign: 'right',
});

export const TimelineItemRight = styled(TimelineItem)({
  marginLeft: 'auto',
  textAlign: 'left',
});

export const TimelineMarker = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 16,
  height: 16,
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  border: `3px solid ${theme.palette.background.paper}`,
  boxShadow: theme.shadows[2],
  zIndex: 2,
}));

export const TimelineDateLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1.5),
  textAlign: 'center',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  cursor: 'help',
}));

export const TimelineContent = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  minHeight: '300px',
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    minHeight: 'auto',
  },
}));