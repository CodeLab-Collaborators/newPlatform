import React from "react";
import styled from "styled-components";
import LearnComp from "./Learn";
import CourseCard from "./CourseCard";

const Product_Design = [
  { topic: "Introduction" },
  { topic: "Concept of Design" },
  { topic: "Design Technic " },
  { topic: "Analysis of Diffrence design Technics" },
  { topic: "Introduction to Figma/ getting started" },
  { topic: "Learning to use the Figma tools like a Pro" },
  { topic: "Desings and Alignment with Figma" },
  { topic: "Concept of Wire-Framing" },
  { topic: "Building a Wire-Framing for Client: Test project 1" },
  { topic: "Building Simple Pages" },
  { topic: "Connecting Pages" },
  { topic: "Introduction to Protyping" },
];
const NextJS = [
  { topic: "Foundamentals of NextJS/Why NextJS" },
  { topic: "Brief hightlight on React" },
  { topic: "Performanace with NextJS" },
  { topic: "Benefit of NextJS adn Difference Rendering Techniques" },
  { topic: "Performance with NextJS" },
  { topic: "Image Component in NextJS" },
  { topic: "File base Reoting and SEO" },
  { topic: "Serverless functions in NextJS" },
  { topic: "NextJS and Create React App" },
  { topic: "Pre-rendering in NextJS" },
  { topic: "Comparing plain REact app and NextJS App" },
  { topic: "Server-side (Pre-) Rendering of Pages" },
  { topic: "File-based Routing" },
  { topic: "Build Fullstack Apps With Ease" },
  { topic: "Adding First Pages To The Project" },
  { topic: "Adding Nested Pages / Paths/ Creating Dynamic Pages" },
  { topic: "Extracting Dynamic Route Data / Linking Between Pages" },
  { topic: "The _app.js File & Wrapper Components " },
  { topic: "Programmatic Navigation" },
  { topic: "Building Modules" },
  { topic: "Introducing Data Fetching For Page Generation (getStaticProps)" },
  { topic: "More Static Site Generation (SSG) With getStaticProps" },
  { topic: "Working With Dynamic Path Params In getStaticProps" },
  { topic: "Dynamic Pages & getStaticProps & getStaticPaths" },
  { topic: "Introducing API Routes" },
  { topic: "Connecting & Querying a MongoDB Database" },
  { topic: "Sending HTTP Requests To API Routes" },
  { topic: "Getting Data From The Database (For Page Pre-Rendering)" },
  { topic: "Adding head Metadata To Pages" },
  { topic: "Working With Fallback Pages & Re-Deploying" },
  { topic: "Introducing API Routes" },
];
const HTML = [
  { topic: "Introduction to HTML/CSS" },
  { topic: "HTML/CSS syntax" },
  { topic: "HTML links " },
  { topic: "Forms" },
  { topic: "Tables" },
  { topic: "HTML/CSS colours " },
  { topic: "Borders/ Margins/Paddings" },
  { topic: "CSS flexbox " },
  { topic: "Animations " },
  { topic: "Transitions " },
  { topic: "Media queries (Mobile Responsiveness" },
  { topic: "Web-Fonts" },
];
const ReactJS = [
  { topic: "What is React" },
  { topic: "Introduction to JSX" },
  { topic: "First React Code" },
  { topic: "Building SPAs" },
  { topic: "React Alternatives" },
  { topic: "Diving Into your first Project" },
  { topic: "How React Works & Understanding Components" },
  { topic: "More About Components & Styling with CSS Classes" },
  { topic: "Asynchronous Programming" },
  { topic: "State and React events" },
  { topic: "Styled components and Storybook" },
  { topic: "Building & Reusing Another Component" },
  { topic: "Pros & Dynamic Content" },
  { topic: "Handling Events" },
  { topic: "Introducing State/Event Props" },
  { topic: "Adding Routing" },
  { topic: "Adding Links & Navigation" },
  { topic: "Props and Children concept" },
  { topic: "Getting User Input & Handling Form Submission" },
  { topic: "Preparing the App for HTTP " },
  { topic: "Sending a Post Request" },
  { topic: "Getting Started with Fetching Data" },
  { topic: "Context Logic & Different Ways of Updating State" },

  { topic: "Progressive Web Apps and Service Workers" },
  { topic: "Testing with React Testing Library and Enzyme" },
  { topic: "Deploying an application" },
  { topic: "Understanding MUI" },
  { topic: "React Redux" },
  { topic: "Context API" },
  { topic: "Understanding React Hooks and creating custom hooks" },
  { topic: "Class components and Lifecycle Methods" },
  { topic: "Navigation and Routing with React Router" },
  { topic: "Fetching data from an API (REST and GraphQL)" },
];

const designProfile = [
  {
    name: "Samuel Olurunda",
    img: "/assets/sam.jpeg",
  },
];

const profile = [
  {
    name: "Peter Oti",
    img: "/assets/peter.jpg",
  },
  {
    name: "Gideon Ekeke",
    img: "/assets/gid.jpg",
  },
];

const profile2 = [
  {
    name: "Peter Oti",
    img: "/assets/peter.jpg",
  },
  // {
  //   name: "Gideon Ekeke",
  //   img: "/img/gid.JPG",
  // },
  // {
  //   name: "Anyamah Ndidi",
  //   img: "/img/ndidi.jpeg",
  // },
];

const profile3 = [
  {
    name: "Samuel Omamuzu",
    img: "/img/kele.jpg",
  },
];

const FrontEnd = () => {
  return (
    <Container>
      <Wrapper>
        <LearnComp
          learning="Visual Courses"
          path="Visual Courses are some of the most sought-after track in Software Engineers. This program is designed to provide you with in-depth knowledge on how to create functional websites by implementing web designs tools through the use of various programming languages. You will be exposed to best practices while executing projects with guidance from some of our faculty members comprised of top and experience engineers."
        />

        <Desc>
          <Title>Visual Track Courses</Title>
          <Sub>
            These courses cover the most popular front end design framework that
            will get you started on your path to becoming a great Frontend
            Engineer.
          </Sub>
        </Desc>

        <Card>
          <CourseCard
            courseData={Product_Design}
            profile={designProfile}
            bg="#004080"
            course="Product Design"
          />

          <CourseCard
            courseData={HTML}
            profile={profile}
            bg="#004080"
            course="React JS"
          />
          <CourseCard
            courseData={ReactJS}
            profile={profile2}
            bg="#004080"
            course="NextJS"
          />

          <CourseCard
            courseData={NextJS}
            profile={profile3}
            bg="#004080"
            course="HTML/CSS"
          />
        </Card>
      </Wrapper>
    </Container>
  );
};

export default FrontEnd;

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
