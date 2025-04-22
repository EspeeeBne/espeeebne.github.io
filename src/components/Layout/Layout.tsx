import React, { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { LayoutContainer, MainContent } from '../../styles/Layout.styles';

interface LayoutProps {
children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
<LayoutContainer>
    <Header />
    <MainContent>
    {children}
    </MainContent>
    <Footer />
</LayoutContainer>
);

export default Layout;
