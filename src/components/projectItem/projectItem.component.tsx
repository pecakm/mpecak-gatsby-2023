import React from 'react';

import { ExternalLink } from '../../styles/styledComponents';

import { ProjectItemProps } from './projectItem.types';
import { Container } from './projectItem.styled';

export const ProjectItem = ({ path, title, description }: ProjectItemProps) => (
  <Container>
    <ExternalLink href={path} target="_blank" rel="noopener noreferrer">
      {title}
    </ExternalLink>
    <br />
    {description}
  </Container>
);
