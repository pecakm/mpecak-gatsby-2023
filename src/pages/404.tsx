import React from 'react';
import { Layout } from '../components/layout/layout.component';
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

// export const Head = () => <title>Not found</title>;

export default NotFoundPage;
