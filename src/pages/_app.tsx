import type { AppProps } from 'next/app';
import { useState, useEffect, createContext, useContext } from 'react';
import { ThemeProvider, CssBaseline, CircularProgress, Box } from '@mui/material';
import { getTheme } from '../config/theming';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import '../config/i18n';
import MetaTags from '@/components/MetaTags/MetaTags';


import dynamic from 'next/dynamic';
import SettingsContext, { SettingsProvider } from '../contexts/SettingsContext';

export const ThemeToggleContext = createContext<{
  darkMode: boolean;
  toggleTheme: () => void;
}>({
  darkMode: true,
  toggleTheme: () => {},
});

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

function AppContent({ Component, pageProps }: AppProps) {
  const { settings, setTheme } = useContext(SettingsContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(settings.theme === 'dark' ? 'light' : 'dark');
  };

  const theme = getTheme(settings.theme);

  return (
    <>
      <Head>
        <MetaTags />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeToggleContext.Provider value={{ darkMode: settings.theme === 'dark', toggleTheme }}>
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

function MyApp(props: AppProps) {
  return (
    <SettingsProvider>
      <AppContent {...props} />
    </SettingsProvider>
  );
}

export default appWithTranslation(MyApp);
