import React from "react";
import styled from "styled-components";
import Benefits from "./Benefits";
import img1 from "./assets/cert.png";
import img2 from "./assets/network.png";
import img3 from "./assets/learn.png";
import img4 from "./assets/start.png";
import img5 from "./assets/job.png";
import img6 from "./assets/pay.png";

const BenefitComp = () => {
  return (
    <Container>
      <Content>
        <Title>
          What you stand to <span>benefit</span>
        </Title>
        <Para>
          Some of the benefits of being one of CodeLab's Student includes:
        </Para>
      </Content>
      <WrapperCard>
        <Wrapper>
          <Benefits
            img={img1}
            title="Earn certificates at the end of your Training"
            desc="One on Azure Cloud, One on CodeWar, One on Transformation Leadership."
          />
          <Benefits
            img={img2}
            title="Network with like minds"
            desc="During your training/internship, you will be tasked with joining teams, which gives you unlimited access to forming strong networks with like minds."
          />
          <Benefits
            img={img3}
            title="Learn from the very best for free"
            desc="All fellows of CodeLab have received one form of training or the other and are all willing to do same to you."
          />
          <Benefits
            img={img4}
            title="Be a part of a fast-growing startup"
            desc="As an student, you stand a chance to become a part of the CodeLab dev team or any other fast paced start up after your training that CodeLab is building."
          />
          <Benefits
            img={img5}
            title="Get skills beyound coding"
            desc="You’ll also learning other soft skills, which gives you high priority when you apply for jobs."
          />
          <Benefits
            img={img6}
            title="Earn perfomance-based confidence"
            desc="Because all our training are real life project base and industry standard development practice, by the end of your training you would have gain 100% confidence on yourself."
          />
        </Wrapper>
      </WrapperCard>
    </Container>
  );
};

export default BenefitComp;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 900;
  margin: 10px 0;

  span {
    color: darkorange;
    margin-left: 5px;
  }

  @media screen and (max-width: 500px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;
const Para = styled.div`
  margin-bottom: 60px;
`;

const Container = styled.div`
  padding-top: 0px;
  width: 100%;
  background-image: linear-gradient(#effaff, #daf3fe, #effaff);
`;

const WrapperCard = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
