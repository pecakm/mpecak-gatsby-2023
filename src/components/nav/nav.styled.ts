import styled from 'styled-components';
import { Link } from 'gatsby';

import { Color } from '../../styles/color.enum';
import { EdgeMargin } from '../../styles/edge.enum';
import { Breakpoint } from '../../styles/breakpoint.enum';

export const Container = styled.nav`
  border-top: 1px solid ${Color.BlueLight};
  border-bottom: 1px solid ${Color.BlueLight};
  background-color: ${Color.MenuBg};
  padding: 0 calc(${EdgeMargin.ExtraSmall} - 8px);
`;

export const LinkList = styled.ul`
  padding: 16px 0;

  ${Breakpoint.Small} {
    display: flex;
    justify-content: center;
  }
`;

export const LinkItem = styled.li`
  margin: 20px 0;

  ${Breakpoint.Small} {
    margin: 0 5px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${Color.NavLink};
  padding: 8px;

  &.active, :hover {
    color: ${Color.NavLinkHover};
  }

  &.active {
    pointer-events: none;
  }
`;
