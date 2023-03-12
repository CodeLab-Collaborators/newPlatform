import React from "react";
import styled from "styled-components";

interface iData {
  f: string;
  title: string;
  title2: string;
  desc: string;
  desc2: string;
  pix: string;
}

const ConnectProps: React.FC<iData> = ({
  f,
  title,
  title2,
  desc,
  desc2,
  pix,
}) => {
  return (
    <Holder f={f}>
      <TextHolder>
        <Title>
          <span>{title2}</span> {title}
        </Title>
        <TextView>{desc}</TextView>
        <br />
        <TextView>{desc2}</TextView>
      </TextHolder>

      <ImageCheck>
        <BG />
        <ImageHold src={pix} />
      </ImageCheck>
    </Holder>
  );
};

export default ConnectProps;

const BG = styled.div`
  width: 100%;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  z-index: 1;
  left: 0;
  border-radius: 10px;

  @media screen and (min-width: 1000px) {
    height: 400px;
    margin: 0;
  }
`;

const ImageHold = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  @media screen and (min-width: 1000px) {
    height: 400px;
    margin: 0;
  }
`;

const ImageCheck = styled.div`
  flex: 0.5;
  height: 100%;
  position: relative;

  @media screen and (max-width: 700px) {
    margin-top: 30px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
  }
`;

const TextView = styled.div`
  font-weight: 300;
  font-size: 15px;
`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 20px;
  span {
    margin: 0 5px;
    color: darkorange;
    font-weight: 700;
  }
`;

const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.4;
`;

const Holder = styled.div<{
  f: string;
}>`
  display: flex;
  width: 85%;
  align-items: center;
  justify-content: space-between;
  min-height: 300px;
  flex-direction: ${({ f }) => (f ? "row-reverse" : "row")};
  margin: 5px 0;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 80%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin: 20px 0;
`;

const SubText = styled.div`
  width: 50%;
  text-align: center;

  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;

const TopText = styled.div<{ fs: string }>`
  width: 60%;
  font-size: ${({ fs }) => (fs ? "30px" : "50px")};
  font-weight: 700;
  text-align: center;
  line-height: 1;
  margin-bottom: 30px;

  span {
    color: darkorange;
  }

  @media screen and (max-width: 700px) {
    width: 80%;
    font-size: 35px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
