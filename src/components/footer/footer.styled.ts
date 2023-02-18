import styled from 'styled-components';
import { Breakpoint } from '../../styles/breakpoint.enum';
import { Color } from '../../styles/color.enum';

import { EdgeMargin } from '../../styles/edge.enum';
import { Size } from '../../styles/size.enum';

export const Container = styled.footer`
  margin: 50px auto;
  padding: 0 ${EdgeMargin.ExtraSmall};
  max-width: calc(${Size.ContentWidth} + 2 * ${EdgeMargin.ExtraSmall});
`;

export const Text = styled.p`
  text-align: center;
  margin: 50px 0;
  line-height: 1.5;
`;

export const Quot = styled.span`
  color: ${Color.Link};
`;

export const Breakline = styled.br`
  ${Breakpoint.Small} {
    display: none;
  }
`;

export const Dash = styled.span`
  display: none;

  ${Breakpoint.Small} {
    display: inline;
  }
`;
