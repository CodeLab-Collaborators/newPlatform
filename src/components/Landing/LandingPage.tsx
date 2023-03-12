import React, { useEffect } from "react";

import BrandWOrk from "./BrandWork";
import DaterScreen from "./DaterScreen";
import GoalScreen from "./GoalScreen";
import HeroPage from "./HeroPage";
import OurStacks from "./OurStacks";
import PeopleTalks from "./PeopleTalk";
import Powered from "./Powered";
import ShowCase from "./ShowCase";
import Tracks from "./Tracks";

const LandingPage = () => {
  return (
    <div>
      <HeroPage />
      <BrandWOrk />
      <GoalScreen />
      <DaterScreen />
      <Tracks />
      <ShowCase />
      <Powered />
      <OurStacks />
      <PeopleTalks />
    </div>
  );
};

export default LandingPage;
