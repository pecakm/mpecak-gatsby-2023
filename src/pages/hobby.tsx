import React from 'react';

import { Layout } from '../components/layout/layout.component';
import { Container } from '../pageStyles/hobby.styled';

const HobbyPage = () => {
  const title = 'Hobby Page';

  return (
    <Layout>
      <Container>
        {title}
      </Container>
    </Layout>
  );
};

export const Head = () => <title>Hobby Page</title>;

export default HobbyPage;
