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
        <Subtitle>I'm creating amazing web experiences for the next generation of consumer-facing companies.</Subtitle>
        <a class="button" href="https://www.google.pt/">Curriculum</a>
        <form action="http://google.com"><input type="submit" value="Go to Google" /></form>
      </Hero>
      <Projects offset={1}>
        <Title>Experience</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Framie"
            link="http://www.framieapp.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            I co-founded this startup in 2015 - an app full of exciting and challenging collections of various themes and categories. I worked mainly in content management, user experience and digital marketing.
          </ProjectCard>
          <ProjectCard
            title="Creative Zone"
            link="http://creativezone.pt/en/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            In this creative Marketing agency, I was responsible for managing the websites and social media of clients in the Healthcare and Home Textile sectors. This includes design and content creation both for online and print formats.
          </ProjectCard>
          <ProjectCard
            title="Pinkit"
            link="https://www.pinkit.pt/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Along with one friend and colleague, we took our skills to create a side project called Pinkit. This helped me to gain experience and expertise in marketing campaigns, business development, e-commerce and even logistics.
          </ProjectCard>
          <ProjectCard
            title="MITIC"
            link="https://www.mitic.pt/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Some pro-bono works were the key to try new things, growing the interest for web development and design and improving my skills. Then, the works were no longer pro-bono...
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
          You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel
          every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should
          make me your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids
          want to know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all
          right?
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
