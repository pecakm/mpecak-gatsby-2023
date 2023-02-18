import React from 'react';

import { Layout } from '../components/layout/layout.component';
import { Bold, Container, Text } from '../pageStyles/kontakt.styled';
import { ExternalLink } from '../styles/styledComponents';

const ContactPage = () => (
  <Layout title="Kontakt">
    <Container>
      <Text>
        E-mail:
        {' '}
        <ExternalLink href="mailto:mikolajpecak@gmail.com">mikolajpecak@gmail.com</ExternalLink>
      </Text>
      <Text>
        Nr tel:
        {' '}
        <Bold>+48 514 686 478</Bold>
      </Text>
      <Text>
        Zapraszam również na mój profil w portalu
        {' '}
        <ExternalLink
          href="https://pl.linkedin.com/in/miko%C5%82aj-p%C4%99cak-1649a612b"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </ExternalLink>
        .
      </Text>
    </Container>
  </Layout>
);

// export const Head = () => <title>Contact Page</title>;

export default ContactPage;
