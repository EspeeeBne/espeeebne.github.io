import React, { useContext, useState } from 'react';
import NextLink from 'next/link';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Drawer,
    ListItem,
    ListItemText,
    Modal,
    Button,
    Tooltip,
    useMediaQuery,
    Select,
    MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import TranslateIcon from '@mui/icons-material/Translate';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { headerStyles } from '../../styles/Header.styles';
import { ThemeToggleContext } from '../../pages/_app';

const Header: React.FC = () => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { darkMode, toggleTheme } = useContext(ThemeToggleContext);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [languageModalOpen, setLanguageModalOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(prev => !prev);
    const openLanguageModal = () => setLanguageModalOpen(true);
    const closeLanguageModal = () => setLanguageModalOpen(false);

    const changeLanguage = async (lang: string) => {
        try {
            if (typeof i18n.changeLanguage === 'function') {
                await i18n.changeLanguage(lang);
            }
            await router.push(router.asPath, undefined, { locale: lang });
            closeLanguageModal();
        } catch (error) {
            console.error('Language change error:', error);
        }
    };

    const ThemeIcon = darkMode ? WbSunnyIcon : NightlightIcon;

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
    };

    const sidebarVariants = {
        open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
        closed: { x: '-100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
    };

    const listItemVariants = {
        hover: { scale: 1.05, backgroundColor: theme.palette.action.hover },
        tap: { scale: 0.95 },
    };

    return (
        <>
            <AnimatePresence>
                <motion.div initial="hidden" animate="visible" exit="hidden">
                    <AppBar
                        position="static"
                        sx={{
                            ...headerStyles.appBar,
                            backgroundColor: theme.palette.background.default,
                            color: theme.palette.text.primary,
                        }}
                    >
                        <Toolbar sx={headerStyles.toolbar}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={headerStyles.menuButton}
                                onClick={toggleDrawer}
                            >
                                <MenuIcon />
                            </IconButton>

                            <Typography variant="h6" component="div" sx={headerStyles.title}>
                                <NextLink href="/" passHref legacyBehavior>
                                    <a>
                                        <span>{t('appTitle', 'Espe Porfolyo')}</span>
                                    </a>
                                </NextLink>
                            </Typography>

                            <Box sx={headerStyles.buttonsContainer}>
                                <Tooltip title={t('changeLanguage', 'Dil Değiştir')}>
                                    <Button
                                        onClick={openLanguageModal}
                                        variant="outlined"
                                        sx={{
                                            textTransform: 'none',
                                            color: theme.palette.text.primary,
                                            borderColor: theme.palette.text.primary,
                                            '&:hover': {
                                                backgroundColor: theme.palette.action.hover,
                                                borderColor: theme.palette.text.primary,
                                            },
                                            ...(isMobile && { border: 'none' }),
                                        }}
                                        startIcon={<TranslateIcon />}
                                    >
                                        {!isMobile && t('changeLanguage', 'Dil Değiştir')}
                                    </Button>
                                </Tooltip>
                                <Tooltip title={darkMode ? t('lightMode', 'Aydınlık Mod') : t('darkMode', 'Koyu Mod')}>
                                    <IconButton
                                        onClick={toggleTheme}
                                        color="inherit"
                                        sx={headerStyles.iconButton}
                                        aria-label="Toggle Theme"
                                    >
                                        <ThemeIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </motion.div>
            </AnimatePresence>

            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                <motion.div
                    variants={sidebarVariants}
                    initial="closed"
                    animate={isDrawerOpen ? 'open' : 'closed'}
                    style={{
                        width: 250,
                        backgroundColor: theme.palette.background.paper,
                        height: '100%',
                        padding: 2,
                        overflow: 'hidden',
                    }}
                    role="presentation"
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}
                >
                    <NextLink href="/" passHref legacyBehavior>
                        <motion.div
                            variants={listItemVariants}
                            whileHover="hover"
                            whileTap="tap"
                            style={{ cursor: 'pointer' }}
                        >
                            <ListItem component="a" sx={{ textDecoration: 'none' }}>
                                <ListItemText
                                    primary={t('homenav')}
                                    slotProps={{ primary: { sx: { color: theme.palette.text.primary } } }}
                                />
                            </ListItem>
                        </motion.div>
                    </NextLink>

                    <NextLink href="/about" passHref legacyBehavior>
                        <motion.div
                            variants={listItemVariants}
                            whileHover="hover"
                            whileTap="tap"
                            style={{ cursor: 'pointer' }}
                        >
                            <ListItem component="a" sx={{ textDecoration: 'none' }}>
                                <ListItemText
                                    primary={t('aboutnav')}
                                    slotProps={{ primary: { sx: { color: theme.palette.text.primary } } }}
                                />
                            </ListItem>
                        </motion.div>
                    </NextLink>

                    <NextLink href="/projects" passHref legacyBehavior>
                        <motion.div
                            variants={listItemVariants}
                            whileHover="hover"
                            whileTap="tap"
                            style={{ cursor: 'pointer' }}
                        >
                            <ListItem component="a" sx={{ textDecoration: 'none' }}>
                                <ListItemText
                                    primary={t('projectsnav')}
                                    slotProps={{ primary: { sx: { color: theme.palette.text.primary } } }}
                                />
                            </ListItem>
                        </motion.div>
                    </NextLink>
                </motion.div>
            </Drawer>

            <Modal
                open={languageModalOpen}
                onClose={closeLanguageModal}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backdropFilter: 'blur(5px)',
                }}
            >
                <AnimatePresence>
                    {languageModalOpen && (
                        <motion.div initial="hidden" animate="visible" exit="exit" variants={modalVariants}>
                            <Box
                                sx={{
                                    backgroundColor: theme.palette.background.paper,
                                    p: 3,
                                    borderRadius: 1,
                                    boxShadow: 24,
                                    width: 300,
                                    textAlign: 'center',
                                    position: 'relative',
                                }}
                            >
                                <IconButton
                                    onClick={closeLanguageModal}
                                    sx={{ position: 'absolute', top: 10, right: 10 }}
                                    aria-label="Close"
                                >
                                    <CloseIcon />
                                </IconButton>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: theme.palette.text.primary }}>
                                    {t('selectLanguage', 'Dil Seçimi')}
                                </Typography>
                                <Select
                                    value={i18n.language}
                                    onChange={(e) => changeLanguage(e.target.value)}
                                    fullWidth
                                    sx={{ mb: 2 }}
                                >
                                    <MenuItem value="tr">
                                        <Box display="flex" alignItems="center">
                                            <Box
                                                component="img"
                                                src="https://flagcdn.com/w40/tr.png"
                                                alt="Türk Bayrağı"
                                                sx={{ mr: 1 }}
                                            />
                                            Türkçe
                                        </Box>
                                    </MenuItem>
                                    <MenuItem value="en">
                                        <Box display="flex" alignItems="center">
                                            <Box
                                                component="img"
                                                src="https://flagcdn.com/w40/us.png"
                                                alt="Yabancıların Bayrağı"
                                                sx={{ mr: 1 }}
                                            />
                                            English
                                        </Box>
                                    </MenuItem>
                                </Select>
                            </Box>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Modal>
        </>
    );
};

export default Header;