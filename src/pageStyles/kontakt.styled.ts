import styled from 'styled-components';

import { Text as TextBase } from '../styles/styledComponents';

export const Container = styled.div``;

export const Bold = styled.strong`
  font-weight: 700;
`;

export const Text = styled(TextBase)`
  & + & {
    margin-top: 20px;
  }
`;
