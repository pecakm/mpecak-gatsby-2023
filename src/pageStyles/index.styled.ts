import styled from 'styled-components';

import { Breakpoint } from '../styles/breakpoint.enum';
import { Color } from '../styles/color.enum';
import { Text } from '../styles/styledComponents';

export const Container = styled.div`
  ${Breakpoint.Medium} {
    display: flex;
    max-width: 900px;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  box-shadow:3px 3px 3px #777;
  border: 10px solid ${Color.PictureBorder};
  border-bottom: 45px solid ${Color.PictureBorder};
  height: min-content;
  margin: 0 auto;
  max-width: 400px;

  ${Breakpoint.Medium} {
    margin: 0 25px;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: 400px;

  ${Breakpoint.Medium} {
    margin: 0 25px;
  }
`;

export const StyledText = styled(Text)`
  margin-top: 1rem;

  b {
    font-weight: 700;
  }

  a {
    color: ${Color.Link};
    text-decoration: none;

    :hover {
      color: ${Color.LinkHover};
      text-decoration: underline;
    }
  }

  ${Breakpoint.Medium} {
    margin-top: 0;

    & + & {
      margin-top: 1rem;
    }
  }
`;
