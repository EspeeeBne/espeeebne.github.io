import { NextPage } from 'next';
import { Container, Box, CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import MetaTags from '../components/MetaTags/MetaTags';

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
      <MetaTags
        title="Espe Portfolyo"
        description="Espe Portfolio - Kendim için yaptığım portfolyo sitesi."
      />
      <Container sx={{ mt: 4 }}>
        <Hero />
      </Container>
    </>
  );
};

export default Home;
