import React from 'react';

import { Layout } from '../components/layout/layout.component';
import { PageTitle } from '../components/pageTitle/pageTitle.component';
import {
  CVActivities,
  CVEducation,
  CVHobbies,
  CVJobs,
  CVLanguages,
  CVTechStack,
} from '../content/cv.content';
import { Bold, Container, ItemContainer } from '../pageStyles/cv.styled';
import { SectionSubtitle, Text } from '../styles/styledComponents';

const CVPage = () => (
  <Layout title="Curriculum Vitae">
    <Container>
      <SectionSubtitle>Doświadczenie zawodowe:</SectionSubtitle>
      {CVJobs.map(({
        date,
        position,
        company,
        description,
      }) => (
        <ItemContainer key={date}>
          <Bold>{date}</Bold>
          <Bold>{position}</Bold>
          <Text>{company}</Text>
          <Text>Krótki opis stanowiska:</Text>
          <Text>{description}</Text>
        </ItemContainer>
      ))}
      <SectionSubtitle>Znajomość technologii:</SectionSubtitle>
      {CVTechStack.map((tech) => <Text key={tech}>{tech}</Text>)}
      <SectionSubtitle>Znajomość języków obcych:</SectionSubtitle>
      {CVLanguages.map((language) => <Text key={language}>{language}</Text>)}
      <SectionSubtitle>Wykształcenie:</SectionSubtitle>
      {CVEducation.map(({
        date,
        university,
        subject,
        specialization,
        degree,
      }) => (
        <ItemContainer key={date}>
          <Bold>{date}</Bold>
          <Bold>{university}</Bold>
          <Text>{`Kierunek: ${subject}`}</Text>
          <Text>{`Specjalizacja: ${specialization}`}</Text>
          <Text>{`Poziom wykształcenia: ${degree}`}</Text>
        </ItemContainer>
      ))}
      <SectionSubtitle>Organizacje, aktywności i stowarzyszenia:</SectionSubtitle>
      {CVActivities.map(({ date, place, position }) => (
        <ItemContainer key={date}>
          <Bold>{date}</Bold>
          <Bold>{place}</Bold>
          <Text>Dodatkowe informacje:</Text>
          <Text>{position}</Text>
        </ItemContainer>
      ))}
      <SectionSubtitle>Zainteresowania:</SectionSubtitle>
      {CVHobbies.map((hobby) => <Text key={hobby}>{hobby}</Text>)}
    </Container>
  </Layout>
);

export const Head = () => <PageTitle title="CV" />;

export default CVPage;
