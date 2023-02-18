import styled from 'styled-components';

import { Color } from '../../styles/color.enum';
import { EdgeMargin } from '../../styles/edge.enum';

export const Container = styled.nav`
  border-top: 1px solid ${Color.BlueLight};
  border-bottom: 1px solid ${Color.BlueLight};
  background-color: ${Color.GreyVeryLight};
  padding: 0 ${EdgeMargin.ExtraSmall};
`;
