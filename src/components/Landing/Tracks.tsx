import React from "react";
import styled from "styled-components";
import NewCard from "./TrackProps";

const Tracks = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Text>
            Claim Your <span>Place</span> in the New Global Digital{" "}
            <span>Workforce</span>.
          </Text>
          <Sub>
            At CodeLab, our programmes are designed to prepare you for a career
            in TECH.
          </Sub>
        </Top>

        <Bottom>
          <NewCard
            title="FrontEnd Track"
            desc="This track takes you through frontend development with full focus in Desktop, Mobile and Web."
            bg=""
            bg1="rgb(137, 45, 142, 1)"
            action="now open"
          />
          <NewCard
            title="BackEnd Track"
            desc="This track focuses on creating server side applications for simple and complex production, Restful API in Development and lot more."
            bg=""
            bg1="rgba(0, 0, 0,1)"
            action="now open"
          />

          <NewCard
            title="Algorithm/Data Structure Track"
            desc="Understanding how codes are structured for proficiency and efficiency both from the server and client sides in order to save production COST, is the key focus for this track."
            bg=""
            bg1="rgba(147, 115, 32, 1)"
            action="now open"
          />

          <NewCard
            title="Transformational Leadership Track"
            desc="This track is one of our most valuable track because it focuses on training leaders, people that will build solutions for solve promiennt problems facing our communities raither than being part of the problems"
            bg=""
            bg1="rgb(61, 32, 147, 1)"
            action="now open"
          />
          <NewCard
            title="Design Thinking Track"
            desc="This track focuses on building the creative aspect of our students mind, building their minds for creative and critical thinking and brainstorming"
            bg=""
            bg1="rgb(147, 32, 82, 1)"
            action="closed"
          />
          <NewCard
            title="UI/UX Track"
            desc="This track teaches our students how build the skeletal part of a project(web or mobile) for easy Development"
            bg="g"
            bg1="rgb(16, 79, 19, 1)"
            action="now open"
          />
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Tracks;

const Button = styled.div`
  margin-bottom: 40px;
  border: 1px solid silver;
  padding: 20px 40px;
  text-transform: uppercase;
  font-weight: bold;
`;

const Know = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

const Description = styled.div`
  margin-top: 30px;
  font-weight: 200;
  font-size: 20px;
  font-size: 15px;
`;

const Title = styled.div`
  padding-top: 50px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 1;
`;

const Holder = styled.div`
  z-index: 1;
  position: absolute;
  width: 80%;
  margin-left: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 400px) {
    width: 90%;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const BG = styled.div<{ bg: string }>`
  position: absolute;
  background: ${({ bg }) => bg};
  width: 100%;
  height: 100%;
  top: 0;
`;

const Card = styled.a<{ bg: string }>`
  text-decoration: none;
  margin: 10px;
  color: white;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 300px;
  height: 400px;
  border-radius: 5px;
  overflow: hidden;
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  transition: all 350ms;
  :hover {
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
`;

const Sub = styled.div`
  text-align: center;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin-top: 60px;
  text-align: center;
  width: 80%;
  line-height: 1.2;
  span {
    color: darkorange;
  }
`;

const Top = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 96%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  color: black;
`;

// function undefined({}) {
//   return (
//     <Card>
//       <Holder>
//         <Title>CodeLab Track</Title>
//         <Description>
//           Increase the value of your business with technology.
//         </Description>
//         <Know>
//           <Button>Know More</Button>
//         </Know>
//       </Holder>
//       <BG />
//     </Card>
//   );
// }
