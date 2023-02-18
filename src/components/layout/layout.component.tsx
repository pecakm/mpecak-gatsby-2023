import React from 'react';

import { SectionTitle, Separator } from '../../styles/styledComponents';
import { Footer } from '../footer/footer.component';
import { Header } from '../header/header.component';
import { Nav } from '../nav/nav.component';

import { Container, PageWrapper, TitleWrapper } from './layout.styled';
import { LayoutProps } from './layout.types';

export const Layout = ({ children, title }: LayoutProps) => (
  <Container>
    <Header />
    <Nav />
    <PageWrapper>
      {!!title && (
        <TitleWrapper>
          <SectionTitle>{title}</SectionTitle>
          <Separator />
        </TitleWrapper>
      )}
      {children}
    </PageWrapper>
    <Footer />
  </Container>
);
