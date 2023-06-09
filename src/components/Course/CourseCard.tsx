import React from "react";
import styled from "styled-components";
// import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

import { FaArrowCircleDown } from "react-icons/fa";

interface iData {
  profile: any;
  courseData: any;
  bg: string;
  course: string;
}

const CourseCard: React.FC<iData> = ({ profile, courseData, bg, course }) => {
  return (
    <Card>
      <Top bg={bg}>
        <Text>Course</Text>
        <TextT>{course}</TextT>
      </Top>
      <TextL bg={bg}>Outline</TextL>
      <Desc>
        This program is designed to provide Students with in-depth knowledge on
        these:
      </Desc>

      {courseData?.map((props: any, i: number) => (
        <View key={i}>
          <Icon>
            <FaArrowCircleDown />{" "}
          </Icon>
          <Cous>{props.topic}</Cous>
        </View>
      ))}
      {/* <Space /> */}
      <Div>
        <Cous1>Instructors</Cous1>
        <ProfileHolder>
          {profile?.map((props: any, i: number) => (
            <Profile key={i}>
              <Image src={props.img} />
              <Name>{props.name}</Name>
            </Profile>
          ))}
        </ProfileHolder>
      </Div>
    </Card>
  );
};

export default CourseCard;

const Space = styled.div`
  flex: 1;
  border-bottom: 1px solid red;
`;

const ProfileHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Profile = styled.div`
  margin: 20px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Image = styled.img`
  object-fit: cover;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: black;
  border: 2px solid black;
`;
const Cous1 = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
const Name = styled.div`
  margin-top: 5px;
  font-weight: bold;
  font-size: 13px;
`;

const Div = styled.div`
  margin-left: 20px;
  margin-top: 50px;
  /* background: lightblue; */
`;

const View = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;
const Icon = styled.div`
  margin-right: 15px;
  transform: rotate(270deg);
  /* color: #004080; */
`;
const Cous = styled.div`
  font-weight: bold;
  width: 85%;
  font-size: 13px;
`;

const Desc = styled.div`
  margin: 0 20px;
  font-size: 18px;
  line-height: 1.2;
  margin-bottom: 30px;
  font-size: 17px;
`;

const Top = styled.div<{ bg: string }>`
  width: 100%;
  height: 180px;
  background: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding-left: 20px;
  font-weight: bold;
`;
const TextT = styled.div`
  font-size: 28px;
`;

const TextL = styled.div<{ bg: string }>`
  background: ${({ bg }) => bg};
  color: white;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100px;
  height: 40px;
  margin: 20px;
  text-transform: uppercase;
  font-weight: bold;
`;

const Text = styled.div`
  text-transform: uppercase;
  background: white;
  color: black;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100px;
  height: 40px;
  margin-bottom: 20px;
`;
const Card = styled.div`
  flex-direction: column;
  width: 500px;
  min-height: 800px;
  padding-bottom: 30px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  overflow: hidden;
  margin: 10px;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;
