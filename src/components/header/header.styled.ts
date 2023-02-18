import styled from 'styled-components';

import BgImg from '../../images/cubes.png';
import { Breakpoint } from '../../styles/breakpoint.enum';
import { Color } from '../../styles/color.enum';
import { EdgeMargin } from '../../styles/edge.enum';

export const Container = styled.header`
  background-image: url(${BgImg});
  padding: 32px ${EdgeMargin.ExtraSmall};

  @media ${Breakpoint.Small} {
    padding: 64px ${EdgeMargin.ExtraSmall};
  }
`;

export const Link = styled.a`
  color: ${Color.Link};
  text-decoration: none;

  :hover {
    color: ${Color.LinkHover};
  }
`;

export const Title = styled.h1`
  font-family: 'Racing Sans One';
  font-size: 2.5rem;
  margin: 0 auto;
  text-align: center;
  font-weight: 500;
`;

export const Subtitle = styled.h2`
  font-family: 'Racing Sans One';
  text-transform: uppercase;
  margin: 16px auto 0;
  text-align: center;
  font-weight: 400;
`;
