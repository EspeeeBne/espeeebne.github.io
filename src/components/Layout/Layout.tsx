import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { layoutStyles } from '../../styles/Layout.styles';

interface LayoutProps {
children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
return (
    <Box sx={layoutStyles.container}>
    <Header />
    <Box component="main" sx={layoutStyles.main}>
        {children}
    </Box>
    <Footer />
    </Box>
);
};

export default Layout;
