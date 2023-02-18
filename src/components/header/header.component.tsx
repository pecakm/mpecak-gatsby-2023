import React from 'react';

import {
  Container,
  Link,
  Title,
  Subtitle,
} from './header.styled';

export const Header = () => (
  <Container>
    <Link href="/">
      <Title>Mikołaj Pęcak</Title>
      <Subtitle>Programowanie z pasji</Subtitle>
    </Link>
  </Container>
);
