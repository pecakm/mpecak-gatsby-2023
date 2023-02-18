import React from 'react';

import { ExternalLink, Separator } from '../../styles/styledComponents';

import {
  Container,
  Text,
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
      <ExternalLink href="https://itpulse.pl" target="_blank" rel="noopener noreferrer">
        IT Pulse
      </ExternalLink>
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
