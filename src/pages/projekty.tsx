import React from 'react';

import { Layout } from '../components/layout/layout.component';
import { ProjectItem } from '../components/projectItem/projectItem.component';
import { CodeProjects, WordPressProjects } from '../content/projekty.content';
import { Container, Text, SectionTitleWrapper } from '../pageStyles/projekty.styled';
import { ExternalLink, SectionTitle, Separator } from '../styles/styledComponents';

const ProjectsPage = () => (
  <Layout title="Projekty">
    <Container>
      {CodeProjects.map(({ path, title, description }) => (
        <ProjectItem key={path} path={path} title={title} description={description} />
      ))}
      <Text>... już niedługo pojawi się tutaj kolejny projekt ;)</Text>
      <Text>
        Kody źródłowe niektórych aplikacji udostępniam na
        {' '}
        <ExternalLink href="https://bitbucket.org/pecakm/" target="_blank" rel="noopener noreferrer">
          moim koncie BitBucket
        </ExternalLink>
      </Text>
      <SectionTitleWrapper>
        <SectionTitle>Projekty WordPress</SectionTitle>
        <Separator />
      </SectionTitleWrapper>
      {WordPressProjects.map(({ path, title, description }) => (
        <ProjectItem key={path} path={path} title={title} description={description} />
      ))}
    </Container>
  </Layout>
);

// export const Head = () => <title>Projects Page</title>;

export default ProjectsPage;
