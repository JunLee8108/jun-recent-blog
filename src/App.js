import { Suspense, lazy } from "react";

import ScrollToTop from "./components/common/ScrollToTop";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import BlogDetail from "./pages/BlogDetail/BlogDetail";

import Loading from "./components/common/Loading";
// import Empty from "./components/common/Empty";

import { Routes, Route } from "react-router-dom";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
// const BlogDetail = lazy(() => import("./pages/BlogDetail/BlogDetail"));
const ContactMe = lazy(() => import("./pages/ContactMe/ContactMe"));
const Page404 = lazy(() => import("./components/common/Page404"));

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="refresh" element={<Empty />} /> */}

        <Route
          exact
          path="/blog"
          element={
            <Suspense fallback={<Loading />}>
              <Blog />
            </Suspense>
          }
        />

        <Route
          path="/blog/:id"
          element={
            <Suspense fallback={<Loading />}>
              <BlogDetail />
            </Suspense>
          }
        />

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

        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <Page404 />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
library.add(fab, fas, far);
