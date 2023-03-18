import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import TestHome from "./TestHome";
import LandingRoutes from "./components/Routes/LandingRoutes";
import ScrollToTop from "./components/ToTop";
import Testing from "./Testing";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <ScrollToTop>
          {/* <LandingRoutes /> */}
          <TestHome />
          {/* <Testing /> */}
        </ScrollToTop>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
