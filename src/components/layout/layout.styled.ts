import styled from 'styled-components';

import { Color } from '../../styles/color.enum';
import { EdgeMargin } from '../../styles/edge.enum';
import { Size } from '../../styles/size.enum';

import { PageWrapperProps } from './layout.types';

export const Container = styled.div`
  font-family: 'Roboto';
  color: ${Color.Text};
  background-color: ${Color.Body};
`;

export const PageWrapper = styled.main`
  padding: 60px ${EdgeMargin.ExtraSmall};
  margin: 0 auto;
  max-width: ${({ isHomePage }: PageWrapperProps) => (isHomePage ? '900px' : Size.ContentWidth)};
`;

export const TitleWrapper = styled.div`
  margin-bottom: 40px;
`;
