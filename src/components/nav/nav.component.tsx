import React, { useState } from 'react';
import { Color } from '../../styles/color.enum';

import { Arrow } from './arrow.component';
import { NavLinks } from './nav.constants';
import {
  Container,
  CollapseButton,
  LinkList,
  LinkItem,
  StyledLink,
} from './nav.styled';

export const Nav = () => {
  const [menuCollapsed, setMenuCollapsed] = useState(true);

  return (
    <Container>
      <CollapseButton onClick={() => setMenuCollapsed(!menuCollapsed)} rotated={!menuCollapsed}>
        <Arrow />
      </CollapseButton>
      <LinkList collapsed={menuCollapsed}>
        {NavLinks.map((link) => (
          <LinkItem key={link.path}>
            <StyledLink
              paintDrip
              hex={Color.MenuBg}
              duration={0.5}
              to={link.path}
              activeClassName="active"
            >
              {link.label}
            </StyledLink>
          </LinkItem>
        ))}
      </LinkList>
    </Container>
  );
};
