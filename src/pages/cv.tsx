import React from 'react';
import { CVJobItem } from '../components/cvJobItem/cvJobItem.component';

import { Layout } from '../components/layout/layout.component';
import { CVJobs } from '../content/cv.content';
import { Container, CVSectionTitle } from '../pageStyles/cv.styled';
import { Text } from '../styles/styledComponents';

const CVPage = () => (
  <Layout title="Curriculum Vitae">
    <Container>
      <CVSectionTitle>Doświadczenie zawodowe:</CVSectionTitle>
      {CVJobs.map(({
        date,
        position,
        company,
        description,
      }) => (
        <CVJobItem
          key={date}
          date={date}
          position={position}
          company={company}
          description={description}
        />
      ))}
      <CVSectionTitle>Znajomość technologii:</CVSectionTitle>
      <Text>ReactJS</Text>
      <Text>Angular 6 (podstawy)</Text>
      <Text>Node.js/Express.js (podstawy)</Text>
      <Text>MongoDB</Text>
      <Text>Swift, Objective-C</Text>
      <Text>Inne: GIT, jQuery, podstawy SQL, WordPress, Jira</Text>
      <CVSectionTitle>Znajomość języków obcych:</CVSectionTitle>
      <Text>Język angielski: poziom B2</Text>
      <CVSectionTitle>Wykształcenie:</CVSectionTitle>
    </Container>
  </Layout>
);

// export const Head = () => <title>CV Page</title>;

export default CVPage;
