import React from "react";
import styled from "styled-components";

const Guild = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Holder bg="#FEF3E9">
            <Head>Mission</Head>
            <Div>
              Our Mission is to be a transformational leadership tool to
              underserved youths in rural communities, using the meduim of STEM
              Education and the right value systems.{" "}
            </Div>
          </Holder>
          <Holder bg="#D0D1FD">
            <Head>Vision</Head>
            <Div>
              To raise 1000 software developers and transformational leaders
              within rural communities, who would use their skill set to solve
              their communities problems and impact the lives of people around
              them.{" "}
            </Div>
          </Holder>
          <Holder bg="#F9D5D3">
            <Head>Goal</Head>
            <Div>
              Trainig Software Engineers, that will create software applications
              for sustainable development and economic growth in Nigeria and to
              help underserved youths in rural communities become global talents
              in the technological industry.
            </Div>
          </Holder>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Guild;

const Div = styled.div`
  padding: 0 20px;
  margin-top: 20px;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 500;
`;

const Head = styled.div`
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
`;
const Holder = styled.div<{ bg: string }>`
  color: #000;
  display: flex;
  width: 250px;
  height: 320px;
  margin: 10px;
  border-radius: 5px;
  align-items: center;
  padding-top: 18px;
  /* padding-bottom: 20px; */
  background: ${({ bg }) => bg};
  flex-direction: column;
`;

const Card = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 340px;
`;

const Wrapper = styled.div`
  padding-top: 50px;
  justify-content: center;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  min-height: 450px;
  background: black;
`;
