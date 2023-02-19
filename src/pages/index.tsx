import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { PageTitle } from '../components/pageTitle/pageTitle.component';
import { Layout } from '../components/layout/layout.component';
import {
  Container,
  ImageWrapper,
  TextSection,
  StyledText,
} from '../pageStyles/index.styled';
import { AboutMeText } from '../content/index.content';

const IndexPage = () => (
  <Layout isHomePage>
    <Container>
      <ImageWrapper>
        <StaticImage src="../images/me.jpeg" alt="Me" />
      </ImageWrapper>
      <TextSection>
        {AboutMeText.map((text) => (
          <StyledText key={text} dangerouslySetInnerHTML={{ __html: text }} />
        ))}
      </TextSection>
    </Container>
  </Layout>
);

export const Head = () => <PageTitle title="Programowanie z pasji" />;

export default IndexPage;
