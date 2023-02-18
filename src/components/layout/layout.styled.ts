import styled from 'styled-components';

import { Color } from '../../styles/color.enum';
import { EdgeMargin } from '../../styles/edge.enum';
import { Size } from '../../styles/size.enum';

export const Container = styled.div`
  font-family: 'Roboto';
  color: ${Color.Text};
  background-color: #fefefe;
`;

export const PageWrapper = styled.main`
  padding: 60px ${EdgeMargin.ExtraSmall};
  max-width: ${Size.ContentWidth};
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 40px;
`;
