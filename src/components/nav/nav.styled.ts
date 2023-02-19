import styled, { css } from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { Color } from '../../styles/color.enum';
import { EdgeMargin } from '../../styles/edge.enum';
import { Breakpoint } from '../../styles/breakpoint.enum';

import { CollapseButtonProps, LinkListProps } from './nav.types';

export const Container = styled.nav`
  border-top: 1px solid ${Color.BlueLight};
  border-bottom: 1px solid ${Color.BlueLight};
  background-color: ${Color.MenuBg};
  padding: 0 calc(${EdgeMargin.ExtraSmall} - 8px);
`;

export const CollapseButton = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: transparent;
  position: relative;
  top: 16px;

  ${({ rotated }: CollapseButtonProps) => rotated && css`
    transform: rotate(180deg);
  `};

  ${Breakpoint.Small} {
    display: none;
  }
`;

export const LinkList = styled.ul`
  padding: 16px 0;
  overflow: hidden;
  height: 232px;
  transition: 0.3s;

  ${({ collapsed }: LinkListProps) => collapsed && css`
    height: 0;
  `};

  ${Breakpoint.Small} {
    height: auto;
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

export const StyledLink = styled(AniLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${Color.NavLink};
  padding: 8px;
  min-width: 120px;

  &.active, :hover {
    color: ${Color.NavLinkHover};
  }

  &.active {
    pointer-events: none;
  }

  ${Breakpoint.Small} {
    min-width: unset;
  };
`;
