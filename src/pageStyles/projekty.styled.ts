import styled from 'styled-components';

import { Text as TextBase } from '../styles/styledComponents';

export const Container = styled.div``;

export const Text = styled(TextBase)`
  & + & {
    margin-top: 25px;
  }
`;

export const SectionTitleWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
`;
