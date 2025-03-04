import type { AppProps } from 'next/app';
import { useState, useEffect, createContext } from 'react';
import { ThemeProvider, CssBaseline, CircularProgress, Box } from '@mui/material';
import { getTheme } from '../config/theming';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import '../config/i18n';

import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../components/Layout/Layout'), {
loading: () => (
    <Box
    sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }}
    >
    <CircularProgress />
    </Box>
),
});

export const ThemeToggleContext = createContext<{
darkMode: boolean;
toggleTheme: () => void;
}>({
darkMode: true,
toggleTheme: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');
const [mounted, setMounted] = useState(false);

useEffect(() => {
    setMounted(true);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setThemeMode(prefersDark ? 'dark' : 'light');
}, []);

if (!mounted) return null;

const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
};

const theme = getTheme(themeMode);

return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <ThemeToggleContext.Provider value={{ darkMode: themeMode === 'dark', toggleTheme }}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </ThemeProvider>
    </ThemeToggleContext.Provider>
    </>
);
}

export default appWithTranslation(MyApp);
