import React from 'react';

import { Container } from './cvEducationItem.styled';
import { CVEducationItemProps } from './cvEducationItem.types';

export const CVEducationItem = ({
  date,
  university,
  subject,
  specialization,
  degree,
}: CVEducationItemProps) => (
  <Container>
    {date}
    {university}
    {subject}
    {specialization}
    {degree}
  </Container>
);
