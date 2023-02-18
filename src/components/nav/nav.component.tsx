import React from 'react';

import { NavLinks } from './nav.constants';
import {
  Container,
  LinkList,
  LinkItem,
  StyledLink,
} from './nav.styled';

export const Nav = () => (
  <Container>
    <LinkList>
      {NavLinks.map((link) => (
        <LinkItem key={link.path}>
          <StyledLink to={link.path} activeClassName="active">
            {link.label}
          </StyledLink>
        </LinkItem>
      ))}
    </LinkList>
  </Container>
);
