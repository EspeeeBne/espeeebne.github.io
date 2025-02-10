    import { SxProps, Theme } from '@mui/material/styles';

    export const timelineStyles: { [key: string]: (theme: Theme) => SxProps<Theme> } = {
    container: (theme: Theme) => ({
        position: 'relative',
        padding: theme.spacing(4),
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        color: theme.palette.text.primary,
    }),
    timelineLine: (theme: Theme) => ({
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 2,
        backgroundColor: theme.palette.primary.main,
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
        display: 'none',
        },
    }),
    timelineItem: (theme: Theme) => ({
        position: 'relative',
        maxWidth: '45%',
        marginBottom: theme.spacing(6),
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[3],
        color: theme.palette.text.primary,
        [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        marginLeft: 0,
        marginRight: 0,
        textAlign: 'center',
        },
    }),
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    timelineItemLeft: (theme: Theme) => ({
        marginRight: 'auto',
        textAlign: 'right',
    }),
        //eslint-disable-next-line @typescript-eslint/no-unused-vars
    timelineItemRight: (theme: Theme) => ({
        marginLeft: 'auto',
        textAlign: 'left',
    }),
    marker: (theme: Theme) => ({
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
        zIndex: 2,
    }),
    dateLabel: (theme: Theme) => ({
        fontSize: '0.75rem',
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(1),
        textAlign: 'center',
    }),
    content: (theme: Theme) => ({
        width: '100%',
        height: '300px',
        maxHeight: '300px',
        overflow: 'hidden',
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
        height: 'auto',
        maxHeight: 'none',
        },
    }),
    };
