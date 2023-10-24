import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ScrollToTop from "./components/helpher/ScrollToTop";
import Loading from "./components/helpher/Loading";

import { Routes, Route } from "react-router-dom";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

const Portfolio = lazy(() => import("./pages/Portfolio"));
const ContactMe = lazy(() => import("./pages/ContactMe"));

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/portfolio"
          element={
            <Suspense fallback={<Loading />}>
              <Portfolio />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              <ContactMe />
            </Suspense>
          }
        />
        <Route path="*" element={<div>Something Went Wrong!</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
library.add(fab, fas, far);
