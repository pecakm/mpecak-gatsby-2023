import React from 'react';

import { Layout } from '../components/layout/layout.component';
import { Container } from '../pageStyles/cv.styled';

const CVPage = () => {
  const title = 'CV Page';

  return (
    <Layout>
      <Container>
        {title}
      </Container>
    </Layout>
  );
};

export const Head = () => <title>CV Page</title>;

export default CVPage;
