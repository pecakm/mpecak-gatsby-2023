import React from 'react';

import { Layout } from '../components/layout/layout.component';
import { Container } from '../pageStyles/projekty.styled';

const ProjectsPage = () => {
  const title = 'Projects Page';

  return (
    <Layout>
      <Container>
        {title}
      </Container>
    </Layout>
  );
};

export const Head = () => <title>Projects Page</title>;

export default ProjectsPage;
