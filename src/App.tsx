import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";

import LandingRoutes from "./components/Routes/LandingRoutes";
import ScrollToTop from "./components/ToTop";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ScrollToTop>
          <LandingRoutes />
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
