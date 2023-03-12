import React from "react";
import styled from "styled-components";
import pix from "./log/jj.png";
import pix1 from "./log/1.png";

import pix5 from "./log/power.webp";
import pix6 from "./log/pph.png";
import pix7 from "./log/she.png";
import SliderComp from "./SliderComp";

const BrandWork = () => {
  return (
    <Contianer>
      <Wrapper>
        <Text>
          We committed to have trained over{" "}
          <span style={{ fontWeight: "800" }}>1,000</span> Youths, to become
          FullStack Software and Blockchain Engineers that are Global Talents by
          2027. <br />
          <div style={{ marginTop: "10px" }} />
          These are brands helping us to Achieve that
        </Text>
        <Brands>
          {" "}
          <Brand src={pix6} />
          <Brand src={pix5} style={{ objectFit: "cover" }} />
          <Brand src={pix7} style={{ objectFit: "cover" }} />
          <Brand src={pix1} />
          <Brand src={pix} />
          {/* <Brand src={pix} style={{ objectFit: "cover" }} />
          <Brand src={pix4} /> */}
        </Brands>
        <SliderComp />
      </Wrapper>
    </Contianer>
  );
};

export default BrandWork;

const Brand = styled.img`
  height: 60px;
  width: 90px;
  object-fit: contain;
  margin: 10px;
`;

const Brands = styled.div`
  color: darkorange;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 28px;
`;

const Text = styled.div`
  width: 70%;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  text-align: left;

  span {
    margin: 0 5px;
    color: darkorange;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
    line-height: 1.2;
    /* margin-top: 40px; */
    font-size: 12px;
    text-align: left;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contianer = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: #effaff;
  color: black;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  margin-bottom: 120px;
  position: relative;
  margin-top: -80px;
  @media screen and (max-width: 600px) {
    margin-bottom: 120px;
  }
`;
