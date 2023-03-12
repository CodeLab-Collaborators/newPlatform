import styled from "styled-components";

interface iData {
  pix: string;
  rr: string;
  title: string;
  brand: string;
}

export const ShowProps: React.FC<iData> = ({ pix, title, brand, rr }) => {
  return (
    <Wrapper rr={rr}>
      <TextHolder>
        {title}
        <span>{brand}</span>®.
      </TextHolder>
      <Image src={pix} />
    </Wrapper>
  );
};

const Image = styled.img`
  height: 300px;
  margin: 0 20px;

  @media screen and (max-width: 768px) {
    height: 250px;
  }
  @media screen and (max-width: 425px) {
    height: 200px;
  }
  @media screen and (max-width: 320px) {
    height: 150px;
  }
`;

const TextHolder = styled.div`
  width: 280px;
  text-align: center;
  font-size: 18px;
  margin-left: 10px;

  span {
    font-weight: 700;
    color: #004080;
    margin-left: 5px;
  }
`;

const Wrapper = styled.div<{
  rr: string;
}>`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 10px 0;
  width: 70%;
  min-height: 400px;
  background-color: #f7f8f9;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ rr }) => (rr ? "row-reverse" : "row")};

  @media screen and (max-width: 768px) {
    width: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const Text = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 40px;
  margin-top: 20px;
  text-transform: uppercase;
  text-align: center;
  margin-left: 30px;
  margin-right: 30px;
  line-height: 1;

  @media screen and (max-width: 468px) {
    font-size: 25px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
