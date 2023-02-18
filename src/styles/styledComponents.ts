import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { Color } from './color.enum';

export const Separator = styled.div`
  height: 1px;
  background-color: ${Color.Separator};
  margin: 16px 0;
`;

export const SectionTitle = styled.h3`
  font-size: 1.75rem;
`;

const linkStyles = css`
  color: ${Color.Link};
  text-decoration: none;

  :hover {
    color: ${Color.LinkHover};
    text-decoration: underline;
  }
`;

export const InternalLink = styled(Link)`
  ${linkStyles}
`;

export const ExternalLink = styled.a`
  ${linkStyles}
`;

export const Text = styled.p`
  line-height: 1.5;
`;
