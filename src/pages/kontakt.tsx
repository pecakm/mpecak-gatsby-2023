import React from 'react';

import { Layout } from '../components/layout/layout.component';
import { Container } from '../pageStyles/kontakt.styled';

const ContactPage = () => {
  const title = 'Contact Page';

  return (
    <Layout>
      <Container>
        {title}
      </Container>
    </Layout>
  );
};

export const Head = () => <title>Contact Page</title>;

export default ContactPage;
