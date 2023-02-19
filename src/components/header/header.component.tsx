import React from 'react';

import { Path } from '../../enums/path.enum';

import {
  Container,
  Link,
  Title,
  Subtitle,
} from './header.styled';

export const Header = () => (
  <Container>
    <Link href={Path.Home}>
      <Title>Mikołaj Pęcak</Title>
      <Subtitle>Programowanie z pasji</Subtitle>
    </Link>
  </Container>
);
