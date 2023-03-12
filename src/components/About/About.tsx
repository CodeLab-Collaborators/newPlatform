import React from "react";
import styled from "styled-components";
import BrandWork from "../Landing/BrandWork";
import OurStacks from "../Landing/OurStacks";
import PeopleTalks from "../Landing/PeopleTalk";
import Powered from "../Landing/Powered";
import ShowCase from "../Landing/ShowCase";
import Tracks from "../Landing/Tracks";
import ConnectPage from "./ConnectPage";
import HeroPage from "./HeroPage";

const About = () => {
  return (
    <Container>
      <HeroPage />
      <BrandWork />
      <ConnectPage />
      <Tracks />
      <Powered />
      <OurStacks />
      <PeopleTalks />
    </Container>
  );
};

export default About;

const Container = styled.div`
  /* padding-top: 100px; */
`;
