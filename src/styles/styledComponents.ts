import styled from 'styled-components';

import { Color } from './color.enum';

export const Separator = styled.div`
  height: 1px;
  background-color: ${Color.Separator};
  margin: 16px 0;
`;

export const SectionTitle = styled.h3`
  font-size: 1.75rem;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.5rem;
  color: ${Color.Link};
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const ExternalLink = styled.a`
  color: ${Color.Link};
  text-decoration: none;

  :hover {
    color: ${Color.LinkHover};
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  line-height: 1.5;
`;
