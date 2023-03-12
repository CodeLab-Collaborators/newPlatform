import React from "react";
import styled from "styled-components";
import LearnComp from "./Learn";
import CourseCard from "./CourseCard";
const courseData = [
  { topic: "Introduction to Project Management" },
  { topic: "Project Management Methodology" },
  { topic: "Distinguishing between Water-Fall and Agile Methodology" },
  { topic: "Identifying the Similarity between Lean and Agile Methodology" },
  { topic: "Deep driving into Agile Methodology" },
  { topic: "Best Methodology for both Manufactoring and Software Inductories" },
  { topic: "Software Development in Focus" },
  { topic: "Introduction to SCUM Methodology" },
  { topic: "SCUM CodeLab's in Style" },
  { topic: "Tech Forum in Focum with SCUM" },
];

const courseData2 = [
  { topic: "Global implications of Hunter and Farmer leadership Paradigm" },
  { topic: "Value systems" },
  { topic: "The good to great framework" },
  { topic: "Funding your dream " },
  { topic: "Facing your fears and Vision setting" },
  { topic: "Building a Legacy" },
];

const courseData3 = [
  { topic: "Introduction and Design Thinking importance" },
  { topic: "Empathy" },
  { topic: "The definition phase" },
  { topic: "Organize your ideas" },

  { topic: "Ideation" },
  { topic: "Identify opportunities/Solve the problem" },
  { topic: "Brainstorming/The 6-3-5 method" },

  { topic: "Creating MVP(Minimum Viable Product)" },

  { topic: "Collect feedback" },
  { topic: "AB testing/" },
  { topic: "Sailboat retrospective" },
  { topic: "Wrapping up" },
];

const profile = [
  {
    name: "Bukola Gbami",
    img: "/assets/bukky.jpg",
  },

  {
    name: "Toheeb Raheem",
    img: "/assets/Mr T.jpg",
  },
];

const profile2 = [
  {
    name: "Toheeb Raheem",
    img: "/assets/Mr T.jpg",
  },
];

const profile3 = [
  {
    name: "Peter Oti",
    img: "/assets/peter.jpg",
  },
];

const SoftSkill = () => {
  return (
    <Container>
      <Wrapper>
        <LearnComp
          learning="SoftSkills"
          path="Softskills are collections of productive personality that characterizes ones relationship in a social environment. you will learn softskills such as critical thinking, problem solving , public speaking, teamwork, leadership, professional attitude, work ethics and you will learn these skill by implementation"
        />

        <Desc>
          <Title>SoftSkill Courses</Title>
          <Sub>
            These courses cover the most popular front end design framework that
            will get you started on your path to becoming a great SoftSkill
            Engineer.
          </Sub>
        </Desc>

        <Card>
          <CourseCard
            courseData={courseData2}
            profile={profile}
            bg="#ed8517"
            course="Transformational Leadership"
          />
          <CourseCard
            courseData={courseData3}
            profile={profile3}
            bg="#ed8517"
            course="Design Thinking: The Fundamentals"
          />
          <CourseCard
            courseData={courseData}
            profile={profile2}
            bg="#ed8517"
            course="Project Management"
          />
        </Card>
      </Wrapper>
    </Container>
  );
};

export default SoftSkill;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 43px;
  font-weight: bold;
`;
const Sub = styled.div`
  margin-top: 20px;
  margin-bottom: 60px;
  font-size: 22px;
  text-align: center;
  width: 80%;
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;
const Container = styled.div`
  width: 100%;
`;
