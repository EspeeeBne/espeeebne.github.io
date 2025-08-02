import { NextPage } from 'next';
import Head from 'next/head';
import { Container, Box, CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('../components/Hero/Hero'), {
  loading: () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
      <CircularProgress />
    </Box>
  )
});

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Espe Portfolyo</title>
        <meta name="description" content="Espe Portfolio - Kendim için yaptığım portfolyo sitesi." />
        <meta property="og:title" content="Espe Portfolyo" />
        <meta property="og:description" content="Espe Portfolio - Kendim için yaptığım portfolyo sitesi." />
        <meta property="og:image" content="https://espeeebne.github.io/static/important-images/favicon.ico" />
        <meta property="og:url" content="https://espeeebne.github.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Espe Portfolyo" />
        <meta name="twitter:description" content="Espe Portfolio - Kendim için yaptığım portfolyo sitesi." />
        <meta name="twitter:image" content="https://espeeebne.github.io/static/important-images/favicon.ico" />
      </Head>
      <Container sx={{ mt: 4 }}>
        <Hero />
      </Container>
    </>
  );
};

export default Home;
