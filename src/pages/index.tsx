import React from 'react';

import { Layout } from '../components/layout/layout.component';
import { Container } from '../pageStyles/index.styled';

const IndexPage = () => {
  const title = 'Index Page';

  return (
    <Layout>
      <Container>
        {title}
      </Container>
    </Layout>
  );
};

// export const Head = () => <title>Home Page</title>;

export default IndexPage;
