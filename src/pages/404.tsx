import React from 'react';
import { Layout } from '../components/layout/layout.component';
import { PageTitle } from '../components/pageTitle/pageTitle.component';
import { Path } from '../enums/path.enum';

import { Container, StyledLink } from '../pageStyles/404.styled';

const NotFoundPage = () => (
  <Layout>
    <Container>
      Podana strona nie istnieje!
      <br />
      Wróć do
      {' '}
      <StyledLink to={Path.Home}>Strony Głównej</StyledLink>
      .
    </Container>
  </Layout>
);

export const Head = () => <PageTitle title="Programowanie z pasji" />;

export default NotFoundPage;
