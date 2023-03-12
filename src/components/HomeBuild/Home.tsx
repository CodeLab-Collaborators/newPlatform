import React from "react";
import styled from "styled-components";
import TopHero from "./TopHero";
import Guild from "./Guild";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <TopHero />
        <Guild />
      </Wrapper>
    </Container>
  );
};

export default Home;

// const Container = styled.div``
const Wrapper = styled.div``;
const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
`;
