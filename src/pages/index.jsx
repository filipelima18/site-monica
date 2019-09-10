import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hi, <br /> I'm Mónica.
        </BigTitle>
        <Subtitle>I create, analyze, and optimize digital marketing initiatives focusing on growth.</Subtitle>
        <div class="separator"></div>
        <a class="button" href="/CV-Mónica-Leiras-2019-set.pdf" target="_blank">Curriculum</a>
      </Hero>
      <Projects offset={1}>
        <Title>Experience</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Framie"
            link="http://www.framieapp.com/"
            bg="#c0392b"
          >
            I co-founded this startup in 2015 and had a key role in its bootstrapping phase, including customer discovery, go-to-market strategy, product launch, and growth marketing.
          </ProjectCard>
          <ProjectCard
            title="Creative Zone"
            link="http://creativezone.pt/en/"
            bg="#a1bf3f"
          >
            In this creative Marketing agency, I am responsible for managing  the digital marketing channels of several clients in the Healthcare and Textile sectors, as well as an E-Commerce brand.
          </ProjectCard>
          <ProjectCard
            title="Pinkit"
            link="https://www.pinkit.pt/"
            bg="#9E005D"
          >
            Along with one colleague, I leveraged my skills to create an E-Commerce store for women's accessories. This was a great challenge in terms of marketing strategy, business development,and logistics.
          </ProjectCard>
          <ProjectCard
            title="MITIC"
            link="https://www.mitic.pt/"
            bg="#3B414F"
          >
            I took upon myself to learn WordPress, HTML and CSS, and co-started this freelance collective. We had several Marketing and Web Dev projects for clients in Advertising, E-Commerce, and others.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Mónica Leiras" />
          <AboutSub>
            Entrepreneur, passionate about animals, music, and nature <br /> I'm all about creativity and getting things done.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I’m a resourceful and creative digital marketing professional specializing in brand marketing, digital advertising, and growth marketing. With a Master’s Degree in Innovation and Technological Entrepreneurship, I began my career by co-founding a startup and later worked as a marketing manager in a creative agency, more recently managing a B2C brand.
          <br><br>
          My entrepreneurial and professional path has built up my tenacity, resilience, and growth mindset, and I thrive in developing, executing, and optimizing marketing initiatives.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:monicarafaelaleiras@gmail.com">Hi</a> or find me on <a href="https://www.linkedin.com/in/monicaleiras/">LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Mónica Leiras.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
