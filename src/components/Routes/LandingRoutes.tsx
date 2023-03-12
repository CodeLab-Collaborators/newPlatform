import { useRoutes } from "react-router-dom";
import About from "../About/About";
import Course from "../Course/Course";
import Home from "../HomeBuild/Home";
import HomeScreen from "../HomeScreen/HomeScreen";

const LandingRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <About />,
    },
    {
      path: "/about",
      element: (
        <div>
          <Home />
          <HomeScreen />
        </div>
      ),
    },
    {
      path: "/course",
      element: <Course />,
    },
  ]);
  return element;
};

export default LandingRoutes;
