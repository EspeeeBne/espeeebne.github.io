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
      </Head>
      <Container sx={{ mt: 4 }}>
        <Hero />
      </Container>
    </>
  );
};

export default Home;
