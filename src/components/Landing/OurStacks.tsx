import React from "react";
import styled from "styled-components";
import img from "./Logo/node.png";
import img1 from "./Logo/react.png";
import img2 from "./Logo/ex.png";
import img3 from "./Logo/pass.webp";
import img5 from "./Logo/fire.webp";
import img4 from "./Logo/mongo.jpg";
import img6 from "./Logo/miro-2.svg";
import img7 from "./Logo/h.png";
import img8 from "./Logo/js.png";
import img9 from "./Logo/tens.png";
import img10 from "./Logo/fig.png";
import img11 from "./Logo/k.png";
import img12 from "./Logo/si.png";
import img13 from "./Logo/rtc.jpg";
import img14 from "./Logo/v.png";
import img15 from "./Logo/a.png";
import img16 from "./Logo/git.webp";
import img17 from "./Logo/css.png";
import img18 from "./Logo/html.svg";
import img19 from "./Logo/sty.png";
import img20 from "./Logo/logo.png";
import img21 from "./Logo/ts.png";
import img22 from "./Logo/ml5.png";

import img24 from "./Logo/ether.png";
import img25 from "./Logo/chain.png";
import img26 from "./Logo/hardhat.png";
import img27 from "./Logo/meta.png";
import img28 from "./Logo/nex.png";
import img29 from "./Logo/poly.png";
import img30 from "./Logo/sanity.webp";
import img31 from "./Logo/Solid.webp";
import img32 from "./Logo/remix.png";

interface iData {
  title: string;
  ob: string;
  pix: string;
}

const LogoBuild: React.FC<iData> = ({ title, pix, ob }) => {
  return (
    <Card>
      <Text>{title}</Text>
      <LogoHolder>
        <Logo>
          <Image src={pix} ob={ob} />
        </Logo>
      </LogoHolder>
    </Card>
  );
};

const OurStacks = () => {
  return (
    <Container>
      <Wrapper>
        <TopText>CodeLab Audacious Commission</TopText>
        <DownText>
          …To Empower Young people with Technological Skills,
          <span> here are the Tools we USE</span>.
        </DownText>
        <TopT>Some of the Technology we train on</TopT>
        <CardHolder>
          <LogoBuild title="Ether JS" pix={img24} ob="" />
          <LogoBuild title="ChainLink " pix={img25} ob="" />
          <LogoBuild title="HardHat" pix={img26} ob="" />
          <LogoBuild title="MetaMask" pix={img27} ob="" />
          <LogoBuild title="NextJS" pix={img28} ob="" />
          <LogoBuild title="Polygon" pix={img29} ob="" />
          <LogoBuild title="Sanity" pix={img30} ob="" />
          <LogoBuild title="Solidity" pix={img31} ob="" />
          <LogoBuild title="Remix" pix={img32} ob="" />

          <LogoBuild title="Node JS" pix={img} ob="ob" />
          <LogoBuild title="React JS" pix={img1} ob="" />
          <LogoBuild title="Express JS" pix={img2} ob="ob" />
          <LogoBuild title="Passport JS" pix={img3} ob="ob" />
          <LogoBuild title="Mongo DB" pix={img4} ob="" />
          <LogoBuild title="Firebase" pix={img5} ob="" />
          <LogoBuild title="Miro" pix={img6} ob="ob" />
          <LogoBuild title="Heroku" pix={img7} ob="" />
          <LogoBuild title="TypeScript" pix={img21} ob="" />
          <LogoBuild title="JavaScript" pix={img8} ob="" />
          <LogoBuild title="Figma" pix={img10} ob="ob" />
          <LogoBuild title="Keras" pix={img11} ob="ob" />
          <LogoBuild title="TensorFlow" pix={img9} ob="ob" />
          <LogoBuild
            title="Friendly Machine Learning(ML5.js)"
            pix={img22}
            ob="ob"
          />
          <LogoBuild title="SocketIO" pix={img12} ob="ob" />
          <LogoBuild title="webRTC" pix={img13} ob="" />
          <LogoBuild title="Vercel" pix={img14} ob="" />
          <LogoBuild title="Microsoft Azura" pix={img15} ob="" />
          <LogoBuild title="GitHub " pix={img16} ob="" />
          <LogoBuild title="CSS " pix={img17} ob="ob" />
          <LogoBuild title="HTML " pix={img18} ob="ob" />
          <LogoBuild title="Styled Components " pix={img19} ob="ob" />
          <LogoBuild title="Material UI " pix={img20} ob="" />
        </CardHolder>
      </Wrapper>
    </Container>
  );
};

export default OurStacks;

const TopT = styled.div`
  text-transform: uppercase;
  font-weight: 200;
  margin-top: 40px;
  text-align: center;
`;

const Image = styled.img<{ ob: string }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: ${({ ob }) => (ob ? "cover" : "contain")};
  overflow: hidden;
`;
const Logo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* border: 1px solid black; */
`;

const LogoHolder = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Text = styled.div`
  flex: 1;
`;

const Card = styled.div`
  background-color: whitesmoke;
  width: 150px;
  height: 100px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  margin: 8px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  transition: all 350ms;

  :hover {
    transform: scale(1.02);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    cursor: pointer;
  }
`;

const CardHolder = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DownText = styled.div`
  font-weight: 700;
  width: 50%;
  text-align: center;
  font-size: 28px;
  line-height: 1.1;
  margin-bottom: 20px;
  span {
    color: darkorange;
    text-transform: uppercase;
    font-size: 25px;
  }

  @media screen and (max-width: 786px) {
    width: 90%;
    font-size: 23px;

    span {
      font-size: 23px;
    }
  }
`;

const TopText = styled.div`
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
