import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { PageTitle } from '../components/pageTitle/pageTitle.component';
import { Layout } from '../components/layout/layout.component';
import { HobbyText } from '../content/hobby.content';
import { Container, SliderWrapper } from '../pageStyles/hobby.styled';
import { SectionSubtitle, Text } from '../styles/styledComponents';
import Img1 from '../images/slider1.jpg';
import Img2 from '../images/slider2.jpg';
import Img3 from '../images/slider3.jpg';
import Img4 from '../images/slider4.jpg';
import Img5 from '../images/slider5.jpg';
import Img6 from '../images/slider6.jpg';

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const HobbyPage = () => (
  <Layout title="Hobby">
    <Container>
      <SectionSubtitle>Karting</SectionSubtitle>
      <Text>{HobbyText}</Text>
      <SliderWrapper>
        <Fade>
          {images.map((image) => (
            <div key={image}>
              <div
                style={{
                  aspectRatio: '16/9',
                  backgroundSize: 'cover',
                  backgroundImage: `url(${image})`,
                }}
              />
            </div>
          ))}
        </Fade>
      </SliderWrapper>
    </Container>
  </Layout>
);

export const Head = () => <PageTitle title="Hobby" />;

export default HobbyPage;
