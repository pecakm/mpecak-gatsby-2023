import styled from 'styled-components';
import { Link } from 'gatsby';
import { Color } from '../styles/color.enum';

export const Container = styled.p`
  text-align: center;
  line-height: 2;
`;

export const StyledLink = styled(Link)`
  color: ${Color.Link};
  text-decoration: none;

  :hover {
    color: ${Color.LinkHover};
    text-decoration: underline;
  }
`;
