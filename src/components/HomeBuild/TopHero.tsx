import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

// import GppGoodIcon from "@mui/icons-material/GppGood";
import { MdGppGood } from "react-icons/md";

import { Link } from "react-router-dom";

const TopHero = () => {
  return (
    <Contianer>
      <Wrapper>
        <Card>
          <Text>Start a Career in Software Engineering</Text>
          <Text1>
            {" "}
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter: any) => {
                typewriter

                  .typeString("With No prior knowledge...")
                  .pauseFor(1000)
                  .deleteAll()
                  .start()

                  .typeString("With No Technical Skills...")
                  .pauseFor(1000)
                  .deleteAll()
                  .start()

                  .typeString("With No Programming Skills...")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </Text1>
          {/* <Text1>With No prior knowledge</Text1> */}
          <Below>
            <Arrange>
              <Icon cl="red">
                <MdGppGood />{" "}
              </Icon>
              <TextDown>FOR FREE</TextDown>
            </Arrange>
          </Below>

          <Sub>
            Learn how to code and Build Amazing Projects in 1 year (9 months of
            Rigorous training + 3 months internship)
          </Sub>
          <ButtonHolder>
            <Link to="/hire" style={{ textDecoration: "none" }}>
              <Button bg="darkorange" bg1="" bg2="">
                Register to Start Now
              </Button>
            </Link>
          </ButtonHolder>
        </Card>
      </Wrapper>
    </Contianer>
  );
};

export default TopHero;

const Below = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* margin-top: 50px; */
  padding-bottom: 20px;

  @media screen and (max-width: 500px) {
    font-size: 11px;
    padding-bottom: 20px;
  }
`;
const Icon = styled.div<{ cl: string }>`
  margin-top: 10px;
  color: ${({ cl }) => cl};
  font-size: 40px;
`;
const Arrange = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
  padding-top: 50px;
`;
const TextDown = styled.div`
  font-weight: bold;
  /* width: 100px; */
`;

const Button = styled.div<{
  bg: string;
  bg1: string;
  bg2: string;
}>`
  border-radius: 3px;
  font-weight: bold;
  padding: 20px 40px;
  background-color: ${({ bg }) => bg};
  color: ${({ bg2 }) => (bg2 ? "black" : "white")};
  /* font-weight: ${({ bg1 }) => (bg1 ? "bold" : "normal")}; */
  margin: 10px;
  border: 3px solid;
  border-color: ${({ bg1 }) => (bg1 ? "black" : "transparent")};
  transform: scale(1);
  transition: all 350ms;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
    padding: 15px 10px;
    border-radius: 3px;
    margin: 0px 10px;
  }
`;
const ButtonHolder = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Sub = styled.div`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 70px;
  text-align: center;
  margin: 15px 0;
  /* font-family: AlmarenaDisplayBold; */

  span {
    color: red;
    margin-left: 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 30px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;

const Text1 = styled.div`
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  margin: 15px 0;
  font-style: italic;
  color: #ff8c00;

  span {
    color: #ff8c00;
    margin-left: 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;
const Contianer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 700px;
  background-color: #effaff;
  color: black;
  background-image: url("/assets/bbg.svg");
  /* background-position: center; */

  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 500px) {
    min-height: 500px;
    padding-top: 20px;
  }
`;
