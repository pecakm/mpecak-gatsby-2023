import React from 'react';

import { Text } from '../../styles/styledComponents';

import { Container, Bold } from './cvJobItem.styled';
import { CVJobItemProps } from './cvJobItem.types';

export const CVJobItem = ({
  date,
  position,
  company,
  description,
}: CVJobItemProps) => (
  <Container>
    <Bold>{date}</Bold>
    <Bold>{position}</Bold>
    <Text>{company}</Text>
    <Text>Krótki opis stanowiska:</Text>
    <Text>{description}</Text>
  </Container>
);
