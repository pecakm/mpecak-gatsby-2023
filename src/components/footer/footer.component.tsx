import React from 'react';

import {
  Container,
  Separator,
  Text,
  Link,
  Quot,
  Breakline,
  Dash,
} from './footer.styled';

export const Footer = () => (
  <Container>
    <Separator />
    <Text>
      Copyright ©
      {' '}
      <Link href="https://itpulse.pl" target="_blank" rel="noopener noreferrer">IT Pulse</Link>
      {' '}
      2023
      <Breakline />
      <Dash>{' - '}</Dash>
      &quot;
      <Quot>There&apos;s no place like 127.0.0.1 :)</Quot>
      &quot;
    </Text>
  </Container>
);
