import { Suspense, lazy } from "react";
import { useEffect } from "react";

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

import React from "react";
import ReactGA from "react-ga";

const TRACKING_ID = "G-7QEZP8TRFH"; // 실제 Google Analytics 추적 ID로 바꾸세요
ReactGA.initialize(TRACKING_ID);

const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
// const BlogDetail = lazy(() => import("./pages/BlogDetail/BlogDetail"));
const ContactMe = lazy(() => import("./pages/ContactMe/ContactMe"));
const Page404 = lazy(() => import("./components/common/Page404"));

function App() {
  useEffect(() => {
    // 페이지 뷰를 기록
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []); // 의존성 배열을 비워서 컴포넌트가 마운트될 때만 실행되게 합니다.

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
