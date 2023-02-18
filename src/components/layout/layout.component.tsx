import React from 'react';

import { Footer } from '../footer/footer.component';
import { Header } from '../header/header.component';
import { Nav } from '../nav/nav.component';

import { Container, PageWrapper } from './layout.styled';
import { LayoutProps } from './layout.types';

export const Layout = ({ children }: LayoutProps) => (
  <Container>
    <Header />
    <Nav />
    <PageWrapper>
      {children}
    </PageWrapper>
    <Footer />
  </Container>
);
