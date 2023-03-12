import styled from "styled-components";
import { Link } from "react-router-dom";

interface iData {
  title: string;
  desc: string;
  bg: string;
  bg1: string;
  action?: string;
}

const TarckProps: React.FC<iData> = ({ action, title, desc, bg, bg1 }) => {
  return (
    <Card bg={bg}>
      <Holder>
        <Title>{title}</Title>
        <Description>{desc}</Description>
        <Know>
          <Button to="/course">{action}</Button>
        </Know>
      </Holder>
      <BG bg={bg1} />
    </Card>
  );
};

export default TarckProps;

const Button = styled(Link)`
  margin-bottom: 40px;
  border: 1px solid silver;
  padding: 20px 40px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  color: white;
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

const Card = styled.div<{ bg: string }>`
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
  font-size: 30px;
  font-weight: bold;
  margin-top: 60px;
  text-align: center;
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
